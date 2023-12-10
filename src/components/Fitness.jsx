import React, {useState} from 'react'
import {  Typography } from 'antd';
import { useGetExerciseByNameQuery } from '../services/fitnessApi'
import Loader from './Loader';
import SearchExercise from './SearchExercise';
import Calculators from './Calculators';

import ExerciseByTarget from './ExerciseByTarget'

const Fitness = () => {

  const {Title} = Typography
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState("BMI");
  const options = ["Body Fat", "BMI", "Ideal Weight"];
  const { data } = useGetExerciseByNameQuery('chest')
  console.log(data)
  if(!data) return <Loader/>

  return (
    <>

<div class="hero-section">
    <div class="hero-content">
      <div class="hero-title"><Title level={1}style={{color: "white"}}>Unleash Your Potential</Title></div>
      <div class="hero-subtitle"><Title style={{color: "white"}} level={4}>Embark on a journey to a healthier you</Title></div>
      <div onClick={() => {setStarted(true)}} class="hero-button">Get Started</div>
    </div>
  </div>
  <div className='main-body'>
  <Calculators/>
  </div>
  
  
</>
  )
}

export default Fitness