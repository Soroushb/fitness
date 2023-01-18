import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGetMoviesByTitleQuery } from '../services/movieSearchApi'
import { Cryptocurrencies, News, SearchMovies, SearchActors, ActorDetail } from '../components'
import Loader from './Loader'

const {Title} = Typography

const Homepage = () => {

  

  return (
    <>
    <ActorDetail/>
    <SearchMovies/>
    <SearchActors/>
    <News simplified/>
    </>
  )
}

export default Homepage