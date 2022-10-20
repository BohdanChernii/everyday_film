import React, {useEffect, useState} from 'react';

import {Rating} from 'react-simple-star-rating'

import './Movie.scss'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {genresAction} from "../../redux";


const Movie = ({movie}) => {
  const {title, genre_ids, release_date, poster_path, vote_average} = movie
  const [genres, setGenres] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(genresAction.getGenres()).then(({payload}) => setGenres(payload.genres))
  }, [])

  const badge = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item.name)
  const navigate = useNavigate()
  badge.length = 2

  return (
    <div className={'movie'}>

      <img
        onClick={() => navigate('details', {state: movie})}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" className={'movie__poster'}
      />

      <div className="movie__badge">
        {badge.map((item, index) => (
          <p key={index} className="movie__badge-item">{item}</p>
        ))}
      </div>

      <div className="movie__info">
        <p className={'movie__info-title'}>{title}</p>
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


export default Movie;
