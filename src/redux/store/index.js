import {configureStore} from '@reduxjs/toolkit'
import moviesSlice from './moviesSlice'

// редакс тулкит
export default configureStore({
    reducer: {
        movies: moviesSlice,
    }
})