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
    <div className="hero-section">
  <div className="hero-content">
    <h1 className="hero-title">Your Fitness Journey Starts Here</h1>
    <p className="hero-subtitle">Discover a healthier and happier you with our fitness programs.</p>
    <a href="/searchExercise" className="hero-button">Get Started</a>
  </div>
</div>
  )
}

export default Fitness