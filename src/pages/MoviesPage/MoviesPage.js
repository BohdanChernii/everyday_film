import React from 'react';
import Header from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import Footer from "../../components/Footer/Footer";
import {Genres} from "../../components";

const MoviesPage = () => {

  return (
    <div>
      <Genres/>
      <Movies/>
    </div>
  );
};

export default MoviesPage;