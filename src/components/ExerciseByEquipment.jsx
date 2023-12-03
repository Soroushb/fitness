import React, {useState} from 'react'
import {  Col, Row, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useGetExerciseEquipmentsQuery, useGetExercisesByEquipmentsQuery } from '../services/fitnessApi';


const ExerciseByEquipment = () => {

  const {Title} = Typography
  const [equipment, setEquipment] = useState('assisted')
  const {data: equipments} = useGetExerciseEquipmentsQuery();
  const {data : targetData} = useGetExercisesByEquipmentsQuery(equipment)
  console.log(targetData)

  

  return (
    <div className='target-container'>
      
      <Title style={{color: 'white'}}>
            By Equipment
       </Title>
      <div className='muscle-container'>
        {equipments?.map((selectedMuscle, index) => (
          <div className='muscle' key={index}>
            <button style={{}} onClick={() => {setEquipment(selectedMuscle)}} className={selectedMuscle === equipment ? 'selected' : ''}>{selectedMuscle.toUpperCase()}</button>
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

export default ExerciseByEquipment