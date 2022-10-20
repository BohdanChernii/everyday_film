import React, {FC, useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faToggleOff, faToggleOn} from '@fortawesome/free-solid-svg-icons'

import './Header.scss'
import {useForm} from "react-hook-form";
import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeAction} from "../../redux/slices/theme.slice";

interface IForm{
  filter:string
}

const Header: FC = () => {
  const [theme, setTheme] = useState<boolean>(false)

  const {page, movies, filterParam} = useAppSelector(state => state.moviesReducer)

  const {register, handleSubmit, reset} = useForm({defaultValues: {filter: ''}})
  const dispatch = useAppDispatch()


  const submit = async (data:IForm) => {
    await dispatch(moviesActions.setFilterParam(data.filter))
    reset()
  }

  return (
    <header className={'header'}>
      <div className="header__logo">
        <p className="header__logo-logo">EDF</p>
      </div>
      {!theme ? (<FontAwesomeIcon
          icon={faToggleOff}
          className="header__theme"
          onClick={() => {
            setTheme(true)
            dispatch(themeAction.setLightTheme())
          }
          }/>)
        : (<FontAwesomeIcon
          icon={faToggleOn} className="header__theme"
          onClick={() => {
            setTheme(false)
            dispatch(themeAction.setDarkTheme())
          }}
        />)}
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

export {Header};