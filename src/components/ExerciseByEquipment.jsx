import React, {useState} from 'react'
import {  Col, Row, Card, Typography, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { useGetExerciseEquipmentsQuery, useGetExercisesByEquipmentsQuery } from '../services/fitnessApi';
import DropDown from './DropDown';

const ExerciseByEquipment = () => {

  const {Title} = Typography
  const [equipment, setEquipment] = useState('assisted');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const {data: equipments} = useGetExerciseEquipmentsQuery();
  const {data : targetData} = useGetExercisesByEquipmentsQuery(equipment)
  console.log(targetData);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentExerciseData = equipments?.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div className='target-container'>
      
      <Title style={{color: 'white'}}>
            By Equipment
       </Title>
       <DropDown className="dropdown" options={equipments} selectedOption={equipment} setMuscle={setEquipment}/>

       <Pagination
        className='page-numbers'
        current={currentPage}
        total={equipments?.length}
        pageSize={itemsPerPage}
        onChange={(page) => setCurrentPage(page)}
        showSizeChanger={false}
        showQuickJumper={false}
      />
      <div className='muscle-container'>
        {currentExerciseData?.map((selectedMuscle, index) => (
          <div className='muscle' key={index}>
            <button style={{}} onClick={() => {setEquipment(selectedMuscle)}} className={selectedMuscle === equipment ? 'selected' : ''}><Typography style={{color: "white", fontWeight: "600"}}> {selectedMuscle.toUpperCase()}</Typography></button>
          </div>
        ))}
      </div>

      

      <Row className="card-container" gutter={[32,32]}>
      {targetData?.map((exercise) => (
         <Col xs={24} sm={12} lg={8} key={exercise.id} align="center">  
            <Link to={`/exerciseDetails/${exercise.id}`}>
           <Card title={`${exercise.name.toUpperCase()}`}  style={{
                                          width: 250,
                                          borderRadius: "50px",
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