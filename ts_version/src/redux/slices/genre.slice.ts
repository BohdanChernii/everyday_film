import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../service";
import {AxiosError} from "axios";
import {IGenre} from "../../interfaces";


interface IGenresState<IGenre> {
  genres: IGenre[]
  genre: IGenre | null
  loading: boolean
}

const initialState: IGenresState<IGenre> = {
  genres: [],
  genre: null,
  loading: false,
}


const getGenres = createAsyncThunk<IGenre[], void>(
  'genresSlice/getGenres',
  // @ts-ignore
  async (_, {rejectedWithValue}) => {
    try {
      const {data} = await genresService.get()
      return data
    } catch (e) {
      const err = e as AxiosError
      return rejectedWithValue(err.response?.data)
    }
  }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
      getGenre: (state, action) => {
        state.genre = action.payload
      }
    },

    extraReducers: builder =>
      builder.addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload
        state.loading = false
      })
        .addCase(getGenres.pending, (state, action) => {
          state.loading = true
        })
  }
)
const {reducer: genresReducer, actions: {getGenre}} = genresSlice

const genresAction = {
  getGenres,
  getGenre
}
export {genresReducer, genresSlice, genresAction}