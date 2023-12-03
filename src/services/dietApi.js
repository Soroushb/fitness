import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const DietApiHeaders = {
    'X-RapidAPI-Key': 'a77f543c33msh8be63dd0e0e154bp169eb1jsn3aceee7b6e2c',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
}

const baseUrl = 'https://fitness-calculator.p.rapidapi.com'

const createRequest = (url) => ({url, headers: DietApiHeaders})

export const FitnessApi = createApi({

    reducerPath: 'DietApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExercises: builder.query({
            query: () => createRequest('/exercises'),       
        }),
        
        
    })

})

export const {useGetExercisesQuery, useGetExerciseByNameQuery, useGetExerciseDetailsQuery, useGetExerciseTargetsQuery, useGetExerciseByTargetQuery, useGetExerciseBodyPartsQuery, useGetExerciseByBodyPartQuery, useGetExerciseEquipmentsQuery, useGetExercisesByEquipmentsQuery} = FitnessApi
