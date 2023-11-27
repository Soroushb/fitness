import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../services/MoviesApi";
import { ActorsApi } from "../services/ActorsApi";
import { NetflixApi } from "../services/NetflixApi";
import { popularMoviesApi } from "../services/popularMoviesApi";
import { movieSearchApi } from "../services/movieSearchApi";
import { movieNewsApi } from "../services/movieNewsApi";
import { FitnessApi } from "../services/fitnessApi";


export default configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
        [ActorsApi.reducerPath]: ActorsApi.reducer,
        [NetflixApi.reducerPath]: NetflixApi.reducer,
        [popularMoviesApi.reducerPath]: popularMoviesApi.reducer,
        [movieSearchApi.reducerPath]: movieSearchApi.reducer,
        [movieNewsApi.reducerPath]: movieNewsApi.reducer,
        [FitnessApi.reducerPath]: FitnessApi.reducer

    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(moviesApi.middleware, ActorsApi.middleware, NetflixApi.middleware, popularMoviesApi.middleware, movieSearchApi.middleware, movieNewsApi.middleware, FitnessApi.middleware)
}) 