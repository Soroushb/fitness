
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const movieApiHeaders = {
    'X-RapidAPI-Key': 'f72da7c950msh11ea433ca5651cbp1b213cjsn8deca4e8e5a6',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
}

const baseUrl = 'https://moviesdatabase.p.rapidapi.com'


const createRequest = (url) => ({url, headers: movieApiHeaders})

export const moviesApi = createApi({

    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getMovies: builder.query({
        query: () => createRequest(`/actors`),       
     })
    })
})

export const {useGetMoviesQuery} = moviesApi
