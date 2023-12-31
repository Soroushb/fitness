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
        }),
        getFoodTables: builder.query({
            query: () => createRequest(`/foodids/tablenames`)
        }),
        getFoodSubTables: builder.query({
            query: (tablename) => createRequest(`/foodids/subtablenames?tablename=${tablename}`)
        }),
        getFoodIds: builder.query({
            query: (subtablename) => createRequest(`/foodids?subtablename=${subtablename}`)
        }),
        getFoodInfo: builder.query({
            query: (foodid) => createRequest(`/food?foodid=${foodid}`)
        }),
        getIdealWeight: builder.query({
            query: ({gender, height}) => createRequest(`/idealweight?gender=${gender}&height=${height}`)
        }),
        getBmi: builder.query({
            query: ({age, weight, height}) => createRequest(`/bmi?age=${age}&weight=${weight}&height=${height}`)
        }),
        getBodyFat: builder.query({
            query: ({age, gender, weight, height, neck, waist, hip}) => createRequest(`/bodyfat?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`)
        }),
        getDailyCalorie:  builder.query({
            query: ({age, gender, weight, height, activity}) => createRequest(`/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activity}`)
        }),
        getMacros:  builder.query({
            query: ({age, gender, weight, height, activity, goal}) => createRequest(`/macrocalculator?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activity}&goal=${goal}`)
        }),

    })

})

export const {useGetActivitiesQuery, useGetBurnedCaloriesQuery, useGetFoodTablesQuery, useGetFoodSubTablesQuery, useGetFoodIdsQuery, useGetFoodInfoQuery, useGetIdealWeightQuery, useGetBmiQuery, useGetBodyFatQuery, useGetDailyCalorieQuery, useGetMacrosQuery} = DietApi