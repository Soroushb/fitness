import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Input, Select, Typography} from 'antd';
import { useGetGenresQuery, useGetMoviesQuery, useGetMoviesByDecadeQuery } from '../services/MoviesApi';


const Movies = () => {

    const {Option} = Select
    const { data } = useGetGenresQuery();
    const decades = [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020]
    //console.log(data)
    const genres = data?.results
    const [decade, setDecade] = useState(2020)
    const { data: movies } = useGetMoviesQuery();
    const titles = movies?.results
    const {data: moviesByDecade} = useGetMoviesByDecadeQuery({startYear: decade, endYear: decade+9});

    //console.log(titles)
   //{titles?.map((title, index) => <Option key={index} value={title?.id}>{title?.id}</Option>)}

   

  return (

    <Row gutter={[24,24]}> 
        <Col span={24}>
        <Typography>Favorite Era</Typography>
          <Select showSearch className='select-news' placeholder='Favorite Decade' optionFilterProp='children' onChange={(value) => setDecade(value)}  filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
            {decades?.map((decade, index) => <Option key={index} value={decade}>{decade}</Option>)}
          </Select>
          {console.log(moviesByDecade)}
          <Col xs={24} sm={12} lg={6} className="crypto-card">
          {moviesByDecade?.results?.map((movie) => (
            <p>{movie?.titleText?.text}</p>
          ))}
          </Col>
        </Col>
    </Row>

    )
}

export default Movies