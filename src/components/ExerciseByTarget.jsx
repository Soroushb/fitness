import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';
import actorLogo from '../images/user.jpg'
import { Link } from 'react-router-dom';
import { useGetExerciseTargetsQuery } from '../services/fitnessApi';

const SearchExercise = () => {

  const {Search} = Input
  const {Title} = Typography

  const {data} = useGetExerciseTargetsQuery()

 

  return (
    <>
    <div className=''>
    
    <p>{data}</p>

   
    </div>
    </>
  )

}

export default SearchExercise