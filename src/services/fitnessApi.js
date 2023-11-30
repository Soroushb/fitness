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
        }),
        getExerciseByName: builder.query({
            query: (exercise) => createRequest(`/exercises/name/${exercise}?limit=20`),       
        }),
        getExerciseDetails: builder.query({
            query: (id) => createRequest(`exercises/exercise/${id}`) 
        }),
        getExerciseTargets: builder.query({
            query: () => createRequest(`exercises/targetList`)
        }),
        getExerciseByTarget: builder.query({
            query: (muscle) => createRequest(`/exercises/target/${muscle}`)
        }),
        getExerciseBodyParts: builder.query({
            query: () => createRequest(`/exercises/bodyPartList`)
        }),
    })

})

export const {useGetExercisesQuery, useGetExerciseByNameQuery, useGetExerciseDetailsQuery, useGetExerciseTargetsQuery, useGetExerciseByTargetQuery, useGetExerciseBodyPartsQuery} = FitnessApi
