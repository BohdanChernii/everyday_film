import React from 'react';

import './Pagination.scss'
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useSearchParams} from "react-router-dom";


const Pagination = ({queryPage}) => {

  const {page} = useSelector(state => state.moviesReducer)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  console.log(queryPage);

  return (
    <div className={'pagination'}>
      <button className={'pagination__item prev'} onClick={async () => {
        dispatch(moviesActions.prevPage())
        navigate(`?page=${page - 1}`)
      }} disabled={queryPage <= 1}>Prev
      </button>
      <button className={'pagination__item next'} onClick={() => {
        dispatch(moviesActions.nextPage())
        navigate(`?page=${page + 1}`)
      }}>
        Next
      </button>
    </div>
  );
};

export default Pagination;