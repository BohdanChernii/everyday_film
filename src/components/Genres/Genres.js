import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genresAction} from "../../redux";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

import './Genres.scss'
import {ThemeContext} from "../../index";

const Genres = () => {

  const [genres, setGenres] = useState([])
  const [collapse, setCollapse] = useState(false)
  const {genre} = useSelector(state => state.genresReducer)

  const dispatch = useDispatch()
  const {color} = useSelector(state => state.themeReducer)

  useEffect(() => {
    dispatch(genresAction.getGenres()).then(({payload}) => setGenres(payload.genres))
  }, [])

  console.log(genre);
  return (
    <div className={'genres'}>
      <div className="genres__title">
        <h1 className={'genres__title-title'}>Choose genre </h1>
        {!collapse
          ? (<FontAwesomeIcon
            className={'genres__title-btn show'}
            icon={faXmark}
            onClick={() => setCollapse(!collapse)}/>)
          : (<FontAwesomeIcon
            className={'genres__title-btn close'}
            icon={faXmark}
            onClick={() => setCollapse(!collapse)}/>)}
      </div>
      {collapse && <div className="genres__container">
        {genres.map(genre => (
          <button
            style={{color: color}}
            key={genre.id}
            className="genres__container-btn"
            onClick={() => {
              dispatch(genresAction.getGenre(genre))
            }}>
            {genre.name}
          </button>
        ))}
        <div className="genres__container-reset">
          <button
            style={{color: color}}
            className="genres__container-btn"
            onClick={() => {
              dispatch(genresAction.getGenre(null))
            }}>Reset
          </button>
        </div>

      </div>}
    </div>
  );
};

export {Genres};