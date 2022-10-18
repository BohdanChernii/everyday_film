import React from 'react';
import {NavLink} from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './Header.scss'

const Header = () => {
  return (
    <header className={'header'}>

      <div className="header__logo">
        <p className="header__logo-logo">EDF</p>
      </div>

      <form className={'header__form'}>
        <input type="text" placeholder={'enter name or genre'} className={'header__form-input'}/>
        <button className={'header__form-button'}><FontAwesomeIcon icon={ faMagnifyingGlass}/></button>
      </form>

    </header>
  );
};

export default Header;