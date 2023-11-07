import React from 'react'
import {Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment'
import { useGetMoviesNewsQuery } from '../services/movieNewsApi'
import Loader from './Loader';

const {Text, Title} = Typography;

const News = () => {

  const parser = new DOMParser();
  const { data } = useGetMoviesNewsQuery()

  if(!data) return <Loader/>

  return (
    
    <>
    <Title className="news-header" level={3}>
      Latest Movie News
    </Title>
    <Row gutter={[24,24]}> 
      {data.data.newsStories.map((news, i) => (
        <Col xs={24} sm={12} lg={12} key={i}>
          <Card hoverable className='news-card movie-card'>
            <div>
              <div className='news-image-container'>
                <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.mainImage?.url} alt="news"></img>
              </div>
              <html>
              <Title className='news-title' level={4}>{news?.title}</Title>
              </html>
            </div>
            <a href={news.link} target="_blank" rel="noreferrer">
            <div className='read-more'>
            <p className='button' style={{color: "white"}}>Read More</p>
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