import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "../slices/movies.slice";

const rootReducer = combineReducers({
  moviesReducer
})
const setUpStore = () =>configureStore({
  reducer:rootReducer
})
export {
  setUpStore
}