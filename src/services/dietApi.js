import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const DietApiHeaders = {
    'X-RapidAPI-Key': 'a77f543c33msh8be63dd0e0e154bp169eb1jsn3aceee7b6e2c',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
}

const baseUrl = 'https://fitness-calculator.p.rapidapi.com'

const createRequest = (url) => ({url, headers: DietApiHeaders})

export const DietApi = createApi({

    reducerPath: 'DietApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getActivities: builder.query({
            query: (level) => createRequest(`/activities?intensitylevel=${level}`),       
        }),
        getBurnedCalories: builder.query({
            query: (id) => createRequest(`/burnedcalorie?activityid=${id}&activitymin=30&weight=70`)
        })
        
        
    })

})

export const {useGetActivitiesQuery, useGetBurnedCaloriesQuery} = DietApi