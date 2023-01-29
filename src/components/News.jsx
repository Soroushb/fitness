import React from 'react'
import {Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment'
import { useGetMoviesNewsQuery } from '../services/movieNewsApi'
import Loader from './Loader';

const {Text, Title} = Typography;

const News = () => {

  const { data } = useGetMoviesNewsQuery()

  if(!data) return <Loader/>

  return (
    
    <>
    <Title className="news-header" level={3}>
      Latest Movie News
    </Title>
    <Row gutter={[24,24]}> 
      {data.map((news, i) => (
        <Col xs={24} sm={12} lg={12} key={i}>
          <Card hoverable className='news-card movie-card'>
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
    </>
    
  )
}

export default News