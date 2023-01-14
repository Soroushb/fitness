import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const netflixApiHeaders = {
    'X-RapidAPI-Key': 'f72da7c950msh11ea433ca5651cbp1b213cjsn8deca4e8e5a6',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
}

const baseUrl = 'https://imdb-top-100-movies.p.rapidapi.com';


const createRequest = (url) => ({url, headers: netflixApiHeaders})

export const NetflixApi = createApi({

    reducerPath: 'NetflixApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTopMovies: builder.query({
        query: () => createRequest(`/`),       
        }),
    })
})

export const {useGetTopMoviesQuery} = NetflixApi
