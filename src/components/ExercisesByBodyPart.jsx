import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { useGetExerciseBodyPartsQuery, useGetExerciseByBodyPartQuery } from '../services/fitnessApi';
import DropDown from './DropDown'


const ExercisesByBodyPart = () => {


  const {Title} = Typography
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const [bodyPart, setBodyPart] = useState("back")
  const {data: targetData} = useGetExerciseByBodyPartQuery(bodyPart)
  const {data} = useGetExerciseBodyPartsQuery();
 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentExerciseData = data?.slice(indexOfFirstItem, indexOfLastItem);


  const scrollToContent = () => {

    setTimeout(() => {

      const element = document.getElementById('element');
      if(element){
        element.scrollIntoView({behavior: "smooth"})
      }

    }, 200)
  }
  

  return (
    <div className='target-container'>

      <Title style={{color: 'white'}}>
            By Body Part
       </Title>

       <DropDown className="dropdown" options={data} selectedOption={bodyPart} setMuscle={setBodyPart}/>


      <div className='muscle-container'>
        {currentExerciseData?.map((selectedMuscle, index) => (
          <div className='muscle' key={index}>
            <button style={{}} onClick={() => {setBodyPart(selectedMuscle); scrollToContent()}} className={selectedMuscle === bodyPart ? 'selected' : ''}><Typography style={{ color: "white", fontWeight: "600" }}>{selectedMuscle.toUpperCase()}</Typography></button>
          </div>
        ))}
      </div>

      <Pagination
        className='page-numbers'
        current={currentPage}
        total={data?.length}
        pageSize={itemsPerPage}
        onChange={(page) => setCurrentPage(page)}
        showSizeChanger={false}
        showQuickJumper={false}
      />


      <Row id='element' className="card-container" gutter={[32,32]}>
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
              <div className='info' style={{color: "white"}}><Typography>More info...</Typography></div>
           </Card>
           </Link>
     </Col>
      ))}
    </Row>

      



    </div>
  );
}

export default ExercisesByBodyPart