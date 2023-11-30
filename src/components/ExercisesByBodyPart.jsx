import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';

import { useGetExerciseBodyPartsQuery } from '../services/fitnessApi';

const SearchExercise = () => {


  const {bodyParts} = useGetExerciseBodyPartsQuery();
  console.log(bodyParts)

  

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Target a Specific Muscle</h1>

      

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