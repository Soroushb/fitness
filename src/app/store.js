import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { moviesApi } from "../services/MoviesApi";
import { ActorsApi } from "../services/ActorsApi";
import { NetflixApi } from "../services/NetflixApi";
import { popularMoviesApi } from "../services/popularMoviesApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
        [ActorsApi.reducerPath]: ActorsApi.reducer,
        [NetflixApi.reducerPath]: NetflixApi.reducer,
        [popularMoviesApi.reducerPath]: popularMoviesApi.reducer

    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware, moviesApi.middleware, ActorsApi.middleware, NetflixApi.middleware, popularMoviesApi.middleware)
}) 