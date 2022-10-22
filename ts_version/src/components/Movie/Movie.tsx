import React, {FC, useEffect, useState} from 'react';

import {Rating} from 'react-simple-star-rating'

import {useNavigate} from "react-router";

import {genresAction} from "../../redux";

import {IGenre, IMovie} from "../../interfaces";

import {useAppDispatch} from "../../hooks";

import './Movie.scss'

type IProps = {
  movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
  const {title, genre_ids, release_date, poster_path, vote_average} = movie
  const [genres, setGenres] = useState<IGenre[]>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    // @ts-ignore
    dispatch(genresAction.getGenres()).then(({payload}) => setGenres(payload.genres))
  }, [])

  const badge = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item.name)
  const navigate = useNavigate()
  badge.length = 2

  return (
    <div className={'movie'}>

      <img className={'movie__poster'}
           src={`https://image.tmdb.org/t/p/original/${poster_path}`}
           alt="Poster"
           onClick={() => navigate('details', {state: movie})}
      />

      <div className="movie__badge">
        {badge.map((item, index) => (
          <p key={index} className="movie__badge-item">{item}</p>
        ))}
      </div>

      <div className="movie__info">
        <h2 className={'movie__info-title'}>{title}</h2>
        <p className={'movie__info-date'}>Release Date: {release_date}</p>
        <p className={'movie__info-rating'}>Rating: {vote_average}</p>
        <Rating
          className={'movie__info-star'}
          readonly={true}
          initialValue={Math.round(vote_average)}
          iconsCount={10}
          size={20}
        />
      </div>

    </div>
  );

};

export {Movie};