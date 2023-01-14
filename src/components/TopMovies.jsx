import React, { useState, useEffect } from 'react'
import { Avatar, Card, Row, Col, Rate } from 'antd';
import { useGetTopMoviesQuery } from '../services/NetflixApi';
import { SearchOutlined } from '@ant-design/icons'
import Loader from './Loader';

const Upcoming = () => {


const { Meta } = Card;
  const {data} = useGetTopMoviesQuery();
  console.log(data)
  
  if(!data) return <Loader/>

  

  return (
    <>

<Row gutter={[24,24]}>
        {data.map((movie) => (

<Col xs={24} sm={12} lg={6} className="crypto-card">

<Card
style={{
width: 250,
}}
cover={
<img
alt="example"
src={movie.image}
/>
}
>
<Col span={5} offset={11}>
<h3 className='rank'>{movie.rank}</h3>
</Col>
<Row>
  <Col>
  <Rate disabled value={parseFloat(movie.rating)}/> 
  </Col>
  <Col offset={2}>
  <h4 className='rate'>{movie.rating}</h4>
  </Col>
</Row>

<Meta
avatar={<Avatar src={movie.thumbnail}/>}
title={movie.title}
description={movie.director}
/>
</Card>
</Col>
    
        ))}

        </Row>

        
    </>
    
  )
}

export default Upcoming