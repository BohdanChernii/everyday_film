import React, {FC} from 'react';

import {Footer, Genres, Header, Movies} from "../components";

const MoviesPage: FC = () => {
  return (
    <div>
      <Genres/>
      <Movies/>
    </div>
  );
};

export {MoviesPage};