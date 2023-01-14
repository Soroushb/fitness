import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'f72da7c950msh11ea433ca5651cbp1b213cjsn8deca4e8e5a6',
    'X-RapidAPI-Host': 'movies-news1.p.rapidapi.com'
}

const baseUrl = 'https://movies-news1.p.rapidapi.com'


const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({

    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
        query: () => createRequest(`/movies_news/recent`),        
    })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi
