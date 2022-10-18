import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresAction, genresReducer} from "../slices/genre.slice";
import {moviesReducer} from "../slices/movies.slice";


const rootReducer = combineReducers({
  genresReducer,
  moviesReducer,
})
const setUpStore = () => configureStore({
  reducer: rootReducer
})
export {
  setUpStore
}