import React, {useState, useEffect} from 'react';
import {moviesService} from "../../service/movies.service";
import Movie from "../Movie/Movie";

import './Movies.scss'

import Pagination from "../Pagination/Pagination";

import {genresService} from "../../service";

import {useSearchParams} from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [genres, setGenres] = useState([])

  const [searchParams, setSearchParams] = useSearchParams();
  const queryPage = searchParams.get("page")


  useEffect(() => {
    genresService.get().then(({data}) => setGenres(data))
    moviesService.changePage(queryPage).then(({data}) => setMovies(data.results))
  }, [page])

  const nextPage = () => {
    setPage(page + 1)

  }
  const prevPage = () => {
    setPage(page - 1)
  }


  return (
    <>
      <div className={'movies'}>
        {movies.map(movie => (<Movie key={movie.id} movie={movie} genres={genres.genres}/>))}
      </div>
      <Pagination page={page} prevPage={prevPage} nextPage={nextPage}/>

    </>
  );
};

export default Movies;