import React, {FC} from 'react';

import './Pagination.scss'
import {useNavigate} from "react-router";
import {moviesActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";

interface IProps {
  queryPage: string | null
}

const Pagination: FC<IProps> = ({queryPage}) => {

  const {page} = useAppSelector(state => state.moviesReducer)

  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  console.log(queryPage);
  return (
    <div className={'pagination'}>
      <button className={'pagination__item prev'} onClick={async () => {
        dispatch(moviesActions.prevPage())

        if (queryPage !== null) {
          navigate(`?page=${+queryPage - 1}`)
        }

      }} disabled={
        (queryPage === null) || (queryPage === '1')
      }>Prev
      </button>
      <button className={'pagination__item next'} onClick={() => {

        dispatch(moviesActions.nextPage())

        if (queryPage !== null) {
          navigate(`?page=${+queryPage + 1}`)
        } else if(page === 1){
          navigate(`?page=${page + 1}`)
        }

      }}>
        Next
      </button>
    </div>
  );
};

export {Pagination};