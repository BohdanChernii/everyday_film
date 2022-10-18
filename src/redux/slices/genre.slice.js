import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../service";

const initialState = {
  genres: [],
  error: null,
  loading: false,
}

const getGenres = createAsyncThunk(
  'getGenres/genresSlice', async (_, {rejectedWithValue}) => {
    try {
      const {data} = genresService.get()
      return data
    } catch (e) {
      rejectedWithValue(e.response?.data)
    }
  }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
      builder.addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload
        state.loading = false
      })
  }
)