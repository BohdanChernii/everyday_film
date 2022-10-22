import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../service";

import {AxiosError} from "axios";

import {IMovie} from "../../interfaces";

interface IState<IMovie> {
  page: number
  movies: IMovie[] | []
  loading: boolean
  filterParam: string
}

interface IGet {
  page: string | null
}

const initialState: IState<IMovie> = {
  page: 1,
  movies: [],
  loading: false,
  filterParam: '',
}

const getMovies = createAsyncThunk<IMovie[], IGet>(
  'moviesSlice/getMovies',
  async ({page}, {rejectWithValue}) => {
    try {
      const {data} = await moviesService.changePage(page)
      return data
    } catch (e) {
      const err = e as AxiosError
      return rejectWithValue(err.response?.data)
    }
  }
)

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1
    },
    prevPage: (state) => {
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