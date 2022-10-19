import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

import './Header.scss'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

const Header = () => {

  const {page, movies, filterParam} = useSelector(state => state.moviesReducer)

  const {register, handleSubmit, reset} = useForm({defaultValues: {filter: ''}})
  const dispatch = useDispatch()


  const submit = async (data) => {
    await dispatch(moviesActions.setFilterParam(data.filter))
    reset()
  }

  return (
    <header className={'header'}>
      <div className="header__logo">
        <p className="header__logo-logo">EDF</p>
      </div>

      <form className={'header__form'} onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'Enter film name'}
               className={'header__form-input'} {...register('filter')}/>
        <button className={'header__form-button'}>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </button>
      </form>

    </header>
  );
};

export default Header;