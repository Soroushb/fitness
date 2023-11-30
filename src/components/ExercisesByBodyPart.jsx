import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';

import { useGetExerciseBodyPartsQuery } from '../services/fitnessApi';

const ExercisesByBodyPart = () => {


  const {data} = useGetExerciseBodyPartsQuery();
  console.log(data)

  

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Target a Specific Muscle</h1>

      

      <div className='muscle-container'>
        {data?.map((bodyPart, index) => (
          <div className='' key={index}>
            <button>{bodyPart.bodyPart}</button>
          </div>
        ))}
      </div>
      <p>{data}</p>



    </div>
  );
}

export default ExercisesByBodyPart