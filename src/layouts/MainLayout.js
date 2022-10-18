import React, {useState} from 'react';
import {Outlet} from "react-router";
import MoviesPage from "../pages/MoviesPage/MoviesPage";


const MainLayout = () => {
  return (
    <div>
      <MoviesPage/>
    </div>
  );
};

export default MainLayout;