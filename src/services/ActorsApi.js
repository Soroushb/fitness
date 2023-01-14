import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const ActorsApiHeaders = {
    'X-RapidAPI-Key': 'f72da7c950msh11ea433ca5651cbp1b213cjsn8deca4e8e5a6',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
}

const baseUrl = 'https://online-movie-database.p.rapidapi.com'

const createRequest = (url) => ({url, headers: ActorsApiHeaders})

export const ActorsApi = createApi({

    reducerPath: 'ActorsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPopularActors: builder.query({
        query: () => createRequest('/actors/list-most-popular-celebs'),       
        }),
        getActorImage: builder.query({
            query: (nameId) => createRequest(`/actors/get-all-images?nconst=${nameId.substring(6)}`)
        })
    })
})

export const {useGetPopularActorsQuery, useGetActorImageQuery} = ActorsApi
