import React, {useState} from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import { useGetActorDetailQuery } from '../services/movieSearchApi'
import { Card, Col, Row, Typography, Pagination} from 'antd'
import { Link } from 'react-router-dom'
import actorIcon from '../images/user.jpg'
import filmIcon from '../images/movie.jpg'

const ActorDetail = () => {


    const {Meta} = Card
    const {Title} = Typography
    const {actorId} = useParams();
    const [showMore, setShowMore] = useState(false)
    const {data, isFetching} = useGetActorDetailQuery(actorId)
    const actor = data?.data?.person


    if(isFetching) return <Loader/>

  return (
    <>
      <Row gutter={[28,28]} style={{marginTop:"40px"}}>
      <Col xs={24} sm={12} lg={6} span={8}>
        <Card cover={<img src={actor?.headShotImage?.url ? actor?.headShotImage?.url : actorIcon} alt="Not Found"/>}>
          <Meta 
          title={actor?.name}
          description={actor?.birthDate}/>
        </Card>
      </Col>
      <Col span={15}>
      <Title>Biography:</Title>
      {actor?.biography && !showMore && (
      <p>
        {actor?.biography.substring(0, 1000)}...<Title className='show-more-button' style={{color: "blue"}} level={3} onClick={() => setShowMore(!showMore)}>Show more</Title>
      </p>
      )}
      {actor?.biography && showMore && (
      <p>
        {actor?.biography}<Title className='show-more-button' style={{color: "blue"}} level={3} onClick={() => setShowMore(!showMore)}>Show Less</Title>
      </p>
      )}
      {actor?.filmography.length > 0 && (
        <Row gutter={[14,14]}>
        <Col xs={24} sm={12} lg={10} align="middle">
        {actor?.filmography.map((film) => (
          <Link to={`/movie/${film?.emsVersionId}`}>
             <Card className='actors-movie-card'>
            <img src={film?.posterImage?.url ? film?.posterImage?.url : filmIcon} alt="movie-poster" height={200}/>
            <Meta 
            title={film?.name}
            />            
          </Card>
          </Link>
        ))}
        </Col>
      </Row>
      )}
      </Col>
    </Row>
    </>
  )
}

export default ActorDetail