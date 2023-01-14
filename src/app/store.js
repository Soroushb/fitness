import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { moviesApi } from "../services/MoviesApi";
import { ActorsApi } from "../services/ActorsApi";
import { NetflixApi } from "../services/NetflixApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
        [ActorsApi.reducerPath]: ActorsApi.reducer,
        [NetflixApi.reducerPath]: NetflixApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware, moviesApi.middleware, ActorsApi.middleware, NetflixApi.middleware)
}) 