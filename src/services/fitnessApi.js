import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const FitnessApiHeaders = {
    'X-RapidAPI-Key': 'a77f543c33msh8be63dd0e0e154bp169eb1jsn3aceee7b6e2c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}

const baseUrl = 'https://exercisedb.p.rapidapi.com'

const createRequest = (url) => ({url, headers: FitnessApiHeaders})

export const FitnessApi = createApi({

    reducerPath: 'FitnessApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExercises: builder.query({
        query: () => createRequest('/exercises'),       
        })
    })
})

export const {useGetExercisesQuery} = FitnessApi
