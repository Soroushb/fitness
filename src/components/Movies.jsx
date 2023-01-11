import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Input, Select} from 'antd';
import { useGetMoviesQuery } from '../services/MoviesApi';


const Movies = () => {

    const {Option} = Select
    const { data } = useGetMoviesQuery();
    console.log(data)
    const genres = data?.results
   

  return (

    <Row gutter={[24,24]}> 
        <Col span={24}>
          <Select showSearch className='select-news' placeholder='select a crypto' optionFilterProp='children'  filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
            <Option value="Action"></Option>
            {genres.map((genre) => <Option value={genre}>{genre}</Option>)}
          </Select>
        </Col>
    </Row>

    )
}

export default Movies