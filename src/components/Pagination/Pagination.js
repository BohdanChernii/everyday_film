import React from 'react';

import './Pagination.scss'
import {useNavigate} from "react-router";

const Pagination = ({page, prevPage, nextPage}) => {

  const navigate= useNavigate()

  return (
    <div className={'pagination'}>
      <button className={'pagination__item prev'} onClick={async () => {
        prevPage()
        navigate(`movies/?page=${page-1}`)
      }} disabled={page === 1}>Prev
      </button>
      <button  className={'pagination__item next'} onClick={() => {
        nextPage()
        navigate(`movies/?page=${page+1}`)
      }}>
        Next
      </button>
    </div>
  );
};

export default Pagination;