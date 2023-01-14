import React, { useState, useEffect } from 'react'
import {Card, Space, Row, Col, Input, Select, Typography, Button, Pagination } from 'antd';
import { useGetGenresQuery, useGetMoviesQuery, useGetMoviesByDecadeQuery } from '../services/MoviesApi';
import { SearchOutlined } from '@ant-design/icons'
import Loader from './Loader';


const Movies = () => {

    const {Option} = Select
    const {Title} = Typography;
    const { data } = useGetGenresQuery();
    const decades = [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020]
    //console.log(data)
    const genres = data?.results
    const [decade, setDecade] = useState(2020)
    const [page, setPage] = useState(1)
    const { data: movies } = useGetMoviesQuery();
    const titles = movies?.results
    const {data: moviesByDecade} = useGetMoviesByDecadeQuery({startYear: decade,page: page, endYear: decade+9});

    const onChange = (page) => {
      setPage(page);
    };
    //console.log(titles)
   //{titles?.map((title, index) => <Option key={index} value={title?.id}>{title?.id}</Option>)}
   if(!moviesByDecade) return <Loader/>

   

  return (

    <>
    <Row gutter={[24,24]}>
    <Col span={8}>
    <Typography>Favorite Era</Typography>
    <Select showSearch className='select-news' placeholder='Favorite Decade' optionFilterProp='children' onChange={(value) => setDecade(value)}  filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
      {decades?.map((decade, index) => <Option key={index} value={decade}>{decade}</Option>)}
    </Select>
    </Col>
    <Col span={8} offset={8}>
    <Space size={20}>
    <Row>
    <Pagination page={page} onChange={onChange} total={500000} />
    </Row>
    </Space>
    </Col> 
    </Row>

    <Row gutter={[24,24]}> 
    
    {console.log(moviesByDecade)}
  
    
          {moviesByDecade?.results?.map((movie) => ((movie?.titleType?.text === "Movie" || "tvSeries") && (movie?.titleType?.isEpisode === false)) ? (
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
        <Col span={8} offset={8}>
        <Pagination page={page} onChange={onChange} total={500000} />
        </Col>
        </Row>
        </>
    )
}

export default Movies