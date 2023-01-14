import React, { useState } from 'react'
import {Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader';


const {Text, Title} = Typography;
const { Option } = Select;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({simplified}) => {

  const { data } = useGetCryptoNewsQuery()

  if(!data) return <Loader/>

  return (
    <Row gutter={[24,24]}> 
      
      {data.map((news, i) => (
        <Col xs={24} sm={12} lg={12} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image} alt="news"></img>
              </div>
              <Title className='news-title' level={4}>{news.title}</Title>
              <p>
                {`${news.description.substring(0, 100)}...`}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.image} alt="news"/>
                </div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))} 
    </Row>
  )
}

export default News