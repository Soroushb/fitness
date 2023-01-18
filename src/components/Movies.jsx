import React, { useState, useEffect } from 'react'
import {Card, Space, Row, Col, Select, Typography, Pagination, Input } from 'antd';
import { useGetMoviesByDecadeQuery, useGetMoviesByYearQuery } from '../services/MoviesApi';
import { SearchOutlined } from '@ant-design/icons'
import Loader from './Loader';


const Movies = () => {

    const {Title} = Typography;
    const { Search } = Input;
    const [year, setYear] = useState(2022)
    const [page, setPage] = useState(1)
    const {data: moviesByYear} = useGetMoviesByYearQuery({page: page, year: year});
    
    
   if(!moviesByYear) return <Loader/>

  return (

    <>
    <Title style={{marginTop: "30px"}}>Select a Year</Title>
    <Row gutter={[24,24]}>
    <Col span={8}>
    <Search placeholder="For Example: 1970" onSearch={(value) => {setYear(value)}} enterButton />
    </Col>
    </Row>
    <Row>
    <Pagination style={{marginTop: "30px"}} page={page} onChange={(page) => setPage(page)} total={5000} />
    </Row>

    <Row gutter={[24,24]}  style={{marginTop: "30px"}}> 
    
    {console.log(moviesByYear)}
  
    
          {moviesByYear?.results?.map((movie) => ((movie?.titleType?.text === "Movie" || "tvSeries") && (movie?.titleType?.isEpisode === false)) ? (
            <Col xs={24} sm={12} lg={6} className="crypto-card">
            <Card hoverable className='movies-card'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{movie?.titleText?.text}</Title>
                <SearchOutlined onClick={() => {window.open(`https://www.google.com/search?q=${movie?.titleText?.text} ${movie?.releaseYear?.year}`);}}/>
              </div>
              <p>
                Release Year: {movie?.releaseYear?.year}
              </p>
          </Card>
          </Col>
          ) : (<></>))}
        </Row>
        <Row >
        </Row>
        </>
    )
}

export default Movies