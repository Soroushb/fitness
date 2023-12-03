import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';
import actorLogo from '../images/user.jpg'
import { Link } from 'react-router-dom';
import { useGetExerciseTargetsQuery, useGetExerciseByTargetQuery, useGetExerciseBodyPartsQuery } from '../services/fitnessApi';
import { IoMdFitness } from "react-icons/io";
import { GiMuscleUp, GiLeg } from "react-icons/gi";


const ExerciseByMuscle = () => {


  const [muscle, setMuscle] = useState('abs')
  const {data} = useGetExerciseTargetsQuery();
  const {bodyParts} = useGetExerciseBodyPartsQuery();
  const {data : targetData} = useGetExerciseByTargetQuery(muscle)
  console.log(targetData)

  

  return (
    <div className='target-container'>
      
      <div className='muscle-container'>
        {data?.map((selectedMuscle, index) => (
          <div className='muscle' key={index}>
            <button style={{}} onClick={() => {setMuscle(selectedMuscle)}} className={selectedMuscle === muscle ? 'selected' : ''}>{selectedMuscle.toUpperCase()}</button>
          </div>
        ))}
      </div>

      <Row className="card-container" gutter={[32,32]}>
    {console.log(data)}
      {targetData?.map((exercise) => (
         <Col xs={24} sm={12} lg={8} key={exercise.id} align="center">  
            <Link to={`/exerciseDetails/${exercise.id}`}>
           <Card title={`${exercise.name.toUpperCase()}`}  style={{
                                          width: 300,
                                          maxHeight: 400,
                                          minHeight: 400}} 
                                          hoverable>
                                            
              <img height={250} width={200} className='film-image' src={ exercise?.gifUrl} alt="exercise gif"/>
              <div className='info'>More info...</div>
           </Card>
           </Link>
     </Col>
      ))}
    </Row>


    </div>
  );
}

export default ExerciseByMuscle