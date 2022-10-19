import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {genresAction} from "../../redux";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

import './Genres.scss'

const Genres = () => {

  const [genres, setGenres] = useState([])
  const [collapse, setCollapse] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(genresAction.getGenres()).then(({payload}) => setGenres(payload.genres))
  }, [])

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
          <button className="genres__container-btn">{genre.name}</button>
        ))}
      </div>}
    </div>
  );
};

export {Genres};