import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../service";

const initialState = {
  genres: [],
  genre: null,
  error: null,
  loading: false,
}

const getGenres = createAsyncThunk(
  'genresSlice/getGenres',
  async (_, {rejectedWithValue}) => {
    try {
      const {data} = await genresService.get()
      return data
    } catch (e) {
      return rejectedWithValue(e.response?.data)
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
          state.loading = action.payload
        })
        .addCase(getGenres.rejected, (state, action) => {
          state.error = action.payload
        })
  }
)
const {reducer: genresReducer, actions: {getGenre}} = genresSlice

const genresAction = {
  getGenres,
  getGenre
}
export {genresReducer, genresSlice, genresAction}
