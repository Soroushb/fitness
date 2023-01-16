import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const movieSearchApiHeaders = {
    'X-RapidAPI-Key': 'f72da7c950msh11ea433ca5651cbp1b213cjsn8deca4e8e5a6',
    'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
}

const baseUrl = 'https://flixster.p.rapidapi.com';


const createRequest = (url) => ({url, headers: movieSearchApiHeaders})

export const movieSearchApi = createApi({

    reducerPath: 'movieSearchApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getMoviesByTitle: builder.query({
        query: (title) => createRequest(`/search?query=${title}`),       
        }),
        getMovieDetail: builder.query({
            query: (movieId) => createRequest(`/movies/detail?emsVersionId=${movieId}`)
        })
    })
})

export const {useGetMoviesByTitleQuery, useGetMovieDetailQuery} = movieSearchApi
