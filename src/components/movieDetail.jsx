import React from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import { useGetMovieDetailQuery } from '../services/movieSearchApi'

const MovieDetail = () => {

  const {movieId} = useParams();
  const {data, isFetching} = useGetMovieDetailQuery(movieId)
  console.log(data);
  
  if(isFetching) return <Loader/>

  return (
    <div>movieDetail</div>
  )
}

export default MovieDetail