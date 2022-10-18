import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes} from "react-router";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import Movies from "./components/Movies/Movies";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <div className="page" style={{color: 'white'}}>
        <Routes>
          <Route  path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'/movies'}/>}/>
            <Route path={'/movies'} element={<MoviesPage/>}/>
            <Route path={'/movies/details'} element={<Details/>}/>
            {/*<Route path={':?page='} element={<MoviesPage/>}/>*/}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
