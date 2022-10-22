import React, {useState, useEffect, FC} from 'react';

import './Movies.scss'



import {useSearchParams} from "react-router-dom";

import {genresAction, moviesActions} from "../../redux";
import {IMovie} from "../../interfaces";
import {Movie} from "../Movie/Movie";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Pagination} from "../Pagination/Pagination";

const Movies: FC = () => {
  // const [movies, setMovies] = useState<IMovie[]>([])
  const {page, loading, filterParam} = useAppSelector(state => state.moviesReducer)
const {movies}=useAppSelector(state=> state.moviesReducer)
  const {genre} = useAppSelector(state => state.genresReducer)

  const [searchParams, setSearchParams] = useSearchParams();
  const queryPage = searchParams.get("page")

  const dispatch = useAppDispatch()
  console.log(movies);
  useEffect(() => {
    moviesActions.setPage(queryPage)
    dispatch(moviesActions.getMovies({page: queryPage}))

  }, [dispatch,page, queryPage])

  useEffect(() => {
    if (genre) {
      dispatch(moviesActions.filterMoviesByGenres(movies.filter(movie => movie.genre_ids.includes(genre.id))))
    } else {
      dispatch(moviesActions.getMovies({page: queryPage}))
    }
  }, [dispatch,genre])

  useEffect(() => {
    dispatch(moviesActions.filterMoviesByName(movies.filter(movie => movie.title.includes(filterParam))))
    if (filterParam === '') {
      dispatch(moviesActions.getMovies({page: queryPage}))
    }
  }, [dispatch, filterParam])

  return (
    <>
      {loading && <div className={'loader'}></div>}
      <div className={'movies'}>
        {movies.map(movie => (<Movie
          key={movie.id} movie={movie}/>))}
      </div>
      {filterParam !== '' &&
        <div className={'movies__reset'}>
          <button
            onClick={() => dispatch(moviesActions.setFilterParam(''))}>
            Go to movies
          </button>
        </div>
      }
      <Pagination queryPage={queryPage}/>
    </>
  );
};

export {Movies};