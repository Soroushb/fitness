import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd';
import { useGetMoviesQuery } from '../services/MoviesApi';


const Movies = () => {

    const { data } = useGetMoviesQuery();
    console.log(data)
    const actors = data?.results

    console.log(actors[0].primaryName)
   

  return (
    <div>Movies</div>
  )
}

export default Movies