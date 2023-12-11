import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { Card, Col, Row, Typography} from 'antd'
import { useGetExerciseDetailsQuery } from '../services/fitnessApi'

const ExerciseDetail = () => {


    const {Title} = Typography
    const {id} = useParams();
    const {data} = useGetExerciseDetailsQuery(id)
    console.log(id)
    console.log(data)

  return (

    <>
    <div className='exercise-detail'>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
    <Title style={{color: '#FF4136'}}>
            {data?.name.toUpperCase()}
    </Title>
    </div>
    <Typography ><h3 style={{color: "white", textAlign: "center"}}>EQUIPMENT: {data?.equipment.toUpperCase()}</h3></Typography>
    </div>
    <Row className='exercise-card-container' style={{marginTop:"40px"}}>
      <Col className='exercise-detail-container'>
        <div className='exercise-detail-container'>
        <Card cover={<img src={data?.gifUrl} alt="Not Found"/>}>
        </Card>
        </div>
      </Col>   
    </Row>
    <div className='instructions'>
      <Title level={3} style={{color: "#FF4136"}}>Instructions:</Title>
        {data?.instructions.map((instruction, index) => (
            <div className='instruction-list'>
                <ul>
                    <div className='instruction-line'><Typography style={{color: 'white'}}><b style={{color: 'white'}}>{index + 1}. </b>{instruction}</Typography></div>
                </ul>
            </div>
        ))}
    </div> 
    <Title level={4}  style={{color: "white", marginTop: "15px"}}>What this exercise mainly targets: <h2 style={{color: "#FF4136"}}>{data?.target.toUpperCase()}</h2></Title>
    <Title level={5} style={{color: "white"}}>Secondary Muscles:</Title>
    <div className='secondary-muscles'>
    {data?.secondaryMuscles.map((muscle) => (
      <>  <Typography style={{color: "white", borderColor: "#FF4136", borderStyle: "solid", padding: "10px", borderWidth: "1px"}}>{muscle.toUpperCase()}  </Typography>  </>
    ))} 
    </div>
    </>
  )
}

export default ExerciseDetail