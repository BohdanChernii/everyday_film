import React, {useState} from 'react';
import {Outlet} from "react-router";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
  return (
    <div>
      <Header />
   <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;