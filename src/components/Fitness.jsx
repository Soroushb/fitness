import React from 'react'
import {  Card, Row, Col, Typography, Dropdown } from 'antd';
import { useGetExercisesQuery, useGetExerciseByNameQuery } from '../services/fitnessApi'
import Loader from './Loader';
import SearchExercise from './SearchExercise';
import DropDown from './DropDown';
import Diet from './Diet';
import IdealWeight from './IdealWeight';
import Bmi from './Bmi';
import BodyFat from './BodyFat';
import ExerciseByTarget from './ExerciseByTarget'

const Fitness = () => {

const { Meta } = Card;
  const {Title} = Typography
  const { data } = useGetExerciseByNameQuery('chest')
  console.log(data)
  if(!data) return <Loader/>

  return (
    <>

<div class="hero-section">
    <div class="hero-content">
      <div class="hero-title"><Title level={1}style={{color: "white"}}>Unleash Your Potential</Title></div>
      <div class="hero-subtitle"><Title style={{color: "white"}} level={4}>Embark on a journey to a healthier you</Title></div>
      <a href="#" class="hero-button">Get Started</a>
    </div>
  </div>
<ExerciseByTarget/>
<SearchExercise/>
<BodyFat/>
</>
  )
}

export default Fitness