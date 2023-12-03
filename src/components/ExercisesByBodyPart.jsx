import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useGetExerciseBodyPartsQuery, useGetExerciseByBodyPartQuery } from '../services/fitnessApi';
import DropDown from './DropDown'


const ExercisesByBodyPart = () => {


  const {Title} = Typography
  const [bodyPart, setBodyPart] = useState("back")
  const {data: targetData} = useGetExerciseByBodyPartQuery(bodyPart)
  const {data} = useGetExerciseBodyPartsQuery();
  console.log(data)

  

  return (
    <div className='target-container'>

      <Title style={{color: 'white'}}>
            By Body Part
       </Title>

       <DropDown className="dropdown" options={data} selectedOption={bodyPart} setMuscle={setBodyPart}/>


      <div className='muscle-container'>
        {data?.map((selectedMuscle, index) => (
          <div className='muscle' key={index}>
            <button style={{}} onClick={() => {setBodyPart(selectedMuscle)}} className={selectedMuscle === bodyPart ? 'selected' : ''}>{selectedMuscle.toUpperCase()}</button>
          </div>
        ))}
      </div>


      <Row className="card-container" gutter={[32,32]}>
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

export default ExercisesByBodyPart