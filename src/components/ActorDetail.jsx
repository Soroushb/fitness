import React from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import { useGetActorDetailQuery } from '../services/movieSearchApi'
import { Card, Col, Row, Typography} from 'antd'

const ActorDetail = () => {

    const {actorId} = useParams();
    const {data, isFetching} = useGetActorDetailQuery(actorId)
    const actor = data?.data?.person


    if(isFetching) return <Loader/>

  return (
    <>
      <Row>
      <Col span={12} offset={6}>
        <Card cover={<img src={actor?.headShotImage?.url} alt="Not Found"/>}>
            
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default ActorDetail