import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';
import actorLogo from '../images/user.jpg'
import { Link } from 'react-router-dom';
import { useGetExerciseTargetsQuery, useGetExerciseByTargetQuery, useGetExerciseBodyPartsQuery } from '../services/fitnessApi';

const SearchExercise = () => {


  const [muscle, setMuscle] = useState('abs')
  const {data} = useGetExerciseTargetsQuery();
  const {bodyParts} = useGetExerciseBodyPartsQuery();
  const {targetData} = useGetExerciseByTargetQuery('spine')
  console.log(bodyParts)

  

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Target a Specific Muscle</h1>

      <div className='muscle-container'>
        {data?.map((muscle, index) => (
          <div className='muscle' key={index}>
            <button onClick={() => setMuscle(muscle)}>{muscle}</button>
          </div>
        ))}
      </div>

      <div className='muscle-container'>
        {bodyParts?.map((bodyPart, index) => (
          <div className='' key={index}>
            <button>{bodyPart.bodyPart}</button>
          </div>
        ))}
      </div>
      <p>{bodyParts}</p>



    </div>
  );
}

export default SearchExercise