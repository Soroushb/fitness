import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGetMoviesByTitleQuery } from '../services/movieSearchApi'
import { Cryptocurrencies, News, SearchMovies } from '../components'
import Loader from './Loader'

const {Title} = Typography

const Homepage = () => {

  const { data } = useGetMoviesByTitleQuery("Spiderman");
  console.log(data)
  
  if(!data) return <Loader/>

  return (
    <>
    <Title level={2} className="heading">
      Find Details About Movies
    </Title>

    <SearchMovies/>
    
    <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link> </Title>
    </div>
    <Cryptocurrencies simplified/>
    <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link> </Title>
    </div>
    <News simplified/>
    </>
  )
}

export default Homepage