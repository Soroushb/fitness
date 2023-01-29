import React from 'react'
import {  Card, Row, Col, Typography } from 'antd';
import { useGetPopularMoviesQuery } from '../services/popularMoviesApi'
import Loader from './Loader';


const PopularMovies = () => {

  const { Meta } = Card;
  const {Title} = Typography
  const { data } = useGetPopularMoviesQuery()
  console.log(data)
  if(!data) return <Loader/>


  return (
    
    <>
    
    <Title className="movies-title" level={3}>
      Currently Popular Movies
    </Title>

    <Row gutter={[24,24]}>
  
    {data.map((movie) => movie?.title ? (
    <Col xs={24} sm={12} lg={6}>

    <Card
    className='movie-card'
    hoverable
    style={{
    width: 250,
    maxHeight: 500,
    minHeight: 500
    }}
    cover={
    <img
    alt="example"
    src={movie.img}
    
/>
}
>

<Meta
title={movie.title}
description={`${movie.year}
              By ${movie.directedBy[0]}`}
/>
</Card>
</Col>
    
        ) : (<></>))}

        </Row>

    
    </>
  )
}

export default PopularMovies