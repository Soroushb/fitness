import React, { useState } from 'react';
import { Input, Col, Row, Card, Typography, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { useGetExerciseTargetsQuery, useGetExerciseByTargetQuery, useGetExerciseBodyPartsQuery } from '../services/fitnessApi';
import { IoMdFitness } from "react-icons/io";
import { GiMuscleUp, GiLeg } from "react-icons/gi";
import DropDown from './DropDown';
import { motion } from 'framer-motion';


const ExerciseByMuscle = () => {
  const { Title } = Typography;
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [muscle, setMuscle] = useState('abs');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 
  const { data } = useGetExerciseTargetsQuery();
  const { bodyParts } = useGetExerciseBodyPartsQuery();
  const { data: targetData } = useGetExerciseByTargetQuery(muscle);

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

    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className='target-container'
    >
    <div className='target-container'>
      <Title style={{ color: 'white' }}>
        By Muscle
      </Title>
      <DropDown className="dropdown" options={data} selectedOption={muscle} setMuscle={setMuscle} />

      <div className='muscle-container'>
        {currentExerciseData?.map((selectedMuscle, index) => (
          <div className='muscle' key={index}>
            <button style={{}} onClick={() => { setMuscle(selectedMuscle); scrollToContent() }} className={selectedMuscle === muscle ? 'selected' : ''}><Typography style={{ color: "white", fontWeight: "600" }}>{selectedMuscle.toUpperCase()}</Typography></button>
          </div>
        ))}
      </div>
      <Pagination
        className='page-numbers'
        current={currentPage}
        total={targetData?.length}
        pageSize={itemsPerPage}
        onChange={(page) => setCurrentPage(page)}
        showSizeChanger={false}
        showQuickJumper={false}
      />

      <Row id='element' className="card-container" gutter={[32, 32]}>
        {targetData?.map((exercise) => (
          <Col xs={24} sm={12} lg={8} key={exercise.id} align="center">
            <Link to={`/exerciseDetails/${exercise.id}`}>
              <Card
                title={`${exercise.name.toUpperCase()}`}
                style={{
                  width: 250,
                  borderRadius: "50px",
                  maxHeight: 400,
                  minHeight: 400
                }}
                hoverable
              >
                <img height={250} width={200} className='film-image' src={exercise?.gifUrl} alt="exercise gif" />
                <div className='info'>More info...</div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
    </motion.div>
  );
}

export default ExerciseByMuscle;
