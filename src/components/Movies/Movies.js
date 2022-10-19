import React, {useState, useEffect} from 'react';
import Movie from "../Movie/Movie";

import './Movies.scss'

import Pagination from "../Pagination/Pagination";


import {useSearchParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";

import {genresAction, moviesActions} from "../../redux";

const Movies = () => {
  const [movies, setMovies] = useState([])
  const {page, loading, filterParam} = useSelector(state => state.moviesReducer)

  const {genre} = useSelector(state => state.genresReducer)


  const [searchParams, setSearchParams] = useSearchParams();
  const queryPage = searchParams.get("page")

  const dispatch = useDispatch()

  useEffect(() => {
    moviesActions.setPage(queryPage)
    dispatch(moviesActions.getMovies({page: queryPage}))
      .then(({payload}) => setMovies(payload.results))
  }, [page,queryPage])

  useEffect(() => {
    setMovies(movies.filter(movie => movie.title.includes(filterParam)))
    if(genre){
      setMovies(movies.filter(movie => movie.genre_ids.includes(genre.id)))
    }else{
      dispatch(moviesActions.getMovies({page: queryPage}))
        .then(({payload}) => setMovies(payload.results))
    }

  }, [filterParam,genre])

  return (
    <>
      {loading && <h1>Loading......</h1>}
      <div className={'movies'}>
        {movies.map(movie => (<Movie
          key={movie.id} movie={movie}/>))}
      </div>
      <Pagination queryPage={queryPage}/>
    </>
  );
};

export default Movies;