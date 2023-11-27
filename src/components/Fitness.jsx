import React from 'react'
import {  Card, Row, Col, Typography } from 'antd';
import { useGetExercisesQuery, useGetExerciseByNameQuery } from '../services/fitnessApi'
import Loader from './Loader';

const Fitness = () => {

const { Meta } = Card;
  const {Title} = Typography
  const { data } = useGetExerciseByNameQuery('chest')
  console.log(data)
  if(!data) return <Loader/>

  return (
    <div>{data.map((exercise) => (

        <>
            <p>{exercise.bodyPart}</p>
            <img src={exercise.gifUrl} alt='exercise'/>
        </>
        
    ))}</div>
  )
}

export default Fitness