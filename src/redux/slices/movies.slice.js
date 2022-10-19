import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {moviesService} from "../../service/movies.service";

const initialState = {
  page: 1,
  movies: [],
  loading: false,
  error: null,
  filterParam: '',
}

const getMovies = createAsyncThunk(
  'moviesSlice/getMovies',
  async ({page}, {rejectedWithValue}) => {
    try {
      const {data} = await moviesService.changePage(page)
      return data
    } catch (e) {
      return rejectedWithValue(e.response?.data)
    }
  }
)

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.page += 1
    },
    prevPage: (state, action) => {
      state.page -= 1
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    setFilterParam: (state, action) => {
      state.filterParam = action.payload
    }
  },
  extraReducers: builder =>
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload
      state.loading = false
    }).addCase(getMovies.pending, (state, action) => {
      state.loading = true
    }).addCase(getMovies.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
})

const {reducer: moviesReducer, actions: {nextPage, prevPage, setPage, setFilterParam}} = moviesSlice

const moviesActions = {
  nextPage,
  prevPage,
  getMovies,
  setPage,
  setFilterParam,
}
export {moviesActions, moviesSlice, moviesReducer}