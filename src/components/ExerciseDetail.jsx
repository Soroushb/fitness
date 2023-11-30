import React, {useState} from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import { Card, Col, Row, Typography} from 'antd'
import { Link } from 'react-router-dom'
import { useGetExerciseDetailsQuery } from '../services/fitnessApi'

const ExerciseDetail = () => {


    const {Meta} = Card
    const {Title} = Typography
    const {id} = useParams();
    const [showMore, setShowMore] = useState(false)
    const {data, isFetching} = useGetExerciseDetailsQuery(id)
    console.log(id)
    console.log(data)

  return (

    <>
    <div className='exercise-detail'>
    <Title style={{color: '#2980b9'}}>
            {data?.name.toUpperCase()}
    </Title>
    <Typography ><h3 style={{color: '#e74c3c'}}>EQUIPMENT: {data?.equipment.toUpperCase()}</h3></Typography>
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
        {data?.instructions.map((instruction, index) => (
            <div className='instruction-list'>
                <ol>
                    <li className='instruction-line'><Typography style={{color: '#2ecc71'}}><b style={{color: 'grey'}}>{index + 1}. </b>{instruction.toUpperCase()}</Typography></li>
                </ol>
            </div>
        ))}
    </div> 
    <Typography>What this exercise mainly targets: <h1>{data?.target.toUpperCase()}</h1></Typography>
    <Typography><h2>Secondary Muscles:</h2></Typography>
    <div className='secondary-muscles'>
    {data?.secondaryMuscles.map((muscle) => (
        <p className='secondary-muscle'>{muscle.toUpperCase()}</p>
    ))}
    </div>
    </>
  )
}

export default ExerciseDetail