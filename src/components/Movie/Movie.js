import React, {useEffect, useState} from 'react';

import {Rating} from 'react-simple-star-rating'

import './Movie.scss'
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";


const Movie = ({movie, genres}) => {
  const {title, genre_ids, release_date, poster_path, vote_average} = movie
  const badge = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item.name)


  const {filterParam} = useSelector(state => state.moviesReducer)
  console.log(badge);

  const navigate = useNavigate()

  badge.length = 2
  console.log(filterParam);

  return (
    <div className={'movie'} onClick={() => navigate('details', {state: movie})}>

      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" className={'movie__poster'}/>

      <div className="movie__badge">
        {badge.map(item => (
          <p key={item.id} className="movie__badge-item">{item}</p>
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
