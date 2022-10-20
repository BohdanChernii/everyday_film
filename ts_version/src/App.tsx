import React, {FC} from 'react';

import './App.css';
import {useAppSelector} from "./hooks";
import {Navigate, Route, Routes} from "react-router";
import {MainLayout} from "./layouts/MainLayout";
import {DetailsPage, MoviesPage} from "./pages";

const App: FC = () => {
  const {background, color} = useAppSelector(state => state.themeReducer)
  return (
    <div className="App">
      <div className="page" style={{color:color,background:background}}>
        <Routes>
          <Route  path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'/movies'}/>}/>
            <Route path={'/movies'} element={<MoviesPage/>}/>
            <Route path={'/movies/details'} element={<DetailsPage/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
