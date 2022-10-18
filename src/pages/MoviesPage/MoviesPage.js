import React from 'react';
import Header from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import Footer from "../../components/Footer/Footer";

const MoviesPage = () => {
  return (
    <div>
      <Header />
      <Movies/>
      <Footer/>
    </div>
  );
};

export default MoviesPage;