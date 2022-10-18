import React, {useState, useEffect} from 'react';
import Movie from "../Movie/Movie";

import './Movies.scss'

import Pagination from "../Pagination/Pagination";


import {useSearchParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";

import {genresAction, moviesActions} from "../../redux";
import {useLocation, useNavigate} from "react-router";

const Movies = () => {
  const [movies, setMovies] = useState([])

  const [searchParams, setSearchParams] = useSearchParams();
  const queryPage = searchParams.get("page")

  const {page, loading} = useSelector(state => state.moviesReducer)
  const {genres} = useSelector(state => state.genresReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(genresAction.getGenres())
  }, [])

  useEffect(() => {
    dispatch(moviesActions.getMovies({page: queryPage})).then(({payload}) => setMovies(payload.results))
    moviesActions.setPage(queryPage)
  }, [page])

  return (
    <>
      {loading && <h1>Loading......</h1>}
      <div className={'movies'}>
        {movies.map(movie => (<Movie
          key={movie.id} movie={movie}
          genres={genres?.genres}/>))}
      </div>
      <Pagination queryPage={queryPage}/>

    </>
  );
};

export default Movies;