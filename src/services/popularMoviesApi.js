import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const popularMoviesApiHeaders = {
    'X-RapidAPI-Key': 'f72da7c950msh11ea433ca5651cbp1b213cjsn8deca4e8e5a6',
    'X-RapidAPI-Host': 'most-popular-movies-right-now-daily-update.p.rapidapi.com'
}

const baseUrl = 'https://most-popular-movies-right-now-daily-update.p.rapidapi.com';


const createRequest = (url) => ({url, headers: popularMoviesApiHeaders})

export const popularMoviesApi = createApi({

    reducerPath: 'popularMoviesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
        query: () => createRequest(`/`),       
        }),
    })
})

export const {useGetPopularMoviesQuery} = popularMoviesApi
