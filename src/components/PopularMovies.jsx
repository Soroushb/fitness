import React from 'react'
import { Avatar, Card, Row, Col, Rate } from 'antd';
import { useGetPopularMoviesQuery } from '../services/popularMoviesApi'
import Loader from './Loader';


const PopularMovies = () => {

  const { Meta } = Card;
  const { data } = useGetPopularMoviesQuery()
  console.log(data)
  if(!data) return <Loader/>


  return (
    
    <>
    
    <Row gutter={[24,24]}>
    {data.map((movie) => (

    <Col xs={24} sm={12} lg={6}>

    <Card
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
    
        ))}

        </Row>

    
    </>
  )
}

export default PopularMovies