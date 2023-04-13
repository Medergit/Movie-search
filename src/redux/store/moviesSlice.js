import { createSlice } from "@reduxjs/toolkit";
import { AllMoviesReversed } from "../../movies/movies";

const moviesSlice = createSlice({
    name: 'moviesSlice',

    // база данных
    initialState: {
        movies: AllMoviesReversed,
        favoriteMovies: [],
    },

    // управление базой данных
    reducers:{
        addMovie(state, action){
            state.movies.reverse()
            state.movies.push(action.payload)
            state.movies.reverse()
        },
        addViewsCount(state,action){
            state.movies.forEach(movie=>{
                if(movie.id === action.payload){
                    movie.views++
                }
            })
        },
        addFavorite(state, action){
            state.favoriteMovies.reverse()
            state.favoriteMovies.push(action.payload)
            state.favoriteMovies.reverse()
            state.movies.forEach(movie=>{
                if(movie.id === action.payload.id){   
                    movie.favorite = true
                }
            })
        },
        removeFavorite(state, action){
            state.movies.forEach(movie=>{
                if(movie.id === action.payload.id){   
                    movie.favorite = false
                }
            })
            state.favoriteMovies = state.favoriteMovies.filter(movie=>{
                return movie.id !== action.payload.id
            })
        },
    },
})



export const {addMovie, addViewsCount, addFavorite, removeFavorite} = moviesSlice.actions

export default moviesSlice.reducer