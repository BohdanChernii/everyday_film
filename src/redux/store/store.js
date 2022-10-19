import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresAction, genresReducer} from "../slices/genre.slice";
import {moviesReducer} from "../slices/movies.slice";
import {themeReducer} from "../slices/theme.slice";


const rootReducer = combineReducers({
  genresReducer,
  moviesReducer,
  themeReducer
})
const setUpStore = () => configureStore({
  reducer: rootReducer
})
export {
  setUpStore
}