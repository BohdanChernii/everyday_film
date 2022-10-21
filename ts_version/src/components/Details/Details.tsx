import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router";

import {genresAction} from "../../redux";
import {Rating} from "react-simple-star-rating";

import './Details.scss'
import {useAppDispatch, useAppLocation, useAppSelector} from "../../hooks";
import {IGenre, IMovie} from "../../interfaces";

const Details = () => {
  const [genres, setGenres] = useState<IGenre[]>([])
  const {state} = useAppLocation<IMovie>()
  const dispatch = useAppDispatch()

  // const {genres} = useAppSelector(state => state.genresReducer.genres)
  const {page} = useAppSelector(state => state.moviesReducer)

  const {
    genre_ids, overview, original_language, original_title, popularity, title, vote_average, vote_count, poster_path
  } = state

  useEffect(() => {
    // @ts-ignore
    dispatch(genresAction.getGenres()).then(({payload}) => setGenres(payload.genres))
  }, [])
  console.log(genres);
  const movieGenres = genres.filter((genre: IGenre) => genre_ids.includes(genre.id))

  const navigate = useNavigate()
  return (
    <div className={'details'}>
      <div className="details__left">
        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" className={'details__left-poster'}/>
        <div className="details__left-info">
          <p>Language: {original_language}</p>
          <p>Votes: {vote_count}</p>
          <p>Vote Average: {vote_average}</p>
          <Rating
            className={'movie__info-start'}
            readonly={true}
            initialValue={Math.round(vote_average)}
            iconsCount={10}
            size={20}
          />
        </div>
      </div>
      <div className="details__right">
        <h1 className="details__right-title">{title}</h1>
        <h3 className="details__right-subtitle">Original: {original_title}</h3>
        <p className="details__right-overview">{overview}</p>
        <div className="details__right-genres">
          {movieGenres?.map(genre => (<p key={genre.id}>{genre.name}</p>))}
        </div>
        <button
          className={'details__right-back'}
          onClick={() => navigate(`/movies/?page=${page}`)}>
          Back
        </button>
        <p className="details__right-popularity">Saw: {popularity}</p>
      </div>
    </div>
  );
};

export {Details};