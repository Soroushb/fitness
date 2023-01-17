import React from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import { useGetMovieDetailQuery } from '../services/movieSearchApi'
import { Card, Typography, Col, Row, Rate } from 'antd'
import movieLogo from '../images/movie.jpg'


const MovieDetail = () => {

  const {Title} = Typography
  const {Meta} = Card
  const {movieId} = useParams();
  const {data, isFetching} = useGetMovieDetailQuery(movieId)
  const movieData = data?.data?.movie
  console.log(data);
  
  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  if(isFetching) return <Loader/>

  return (
    <>
    <Title className="movies-title" level={3}>
      Movie Details
    </Title>

    <Row gutter={[28,28]}>
        <Col className='movie-detail-card'  xs={24} sm={12} lg={6} span={8}>
            <Card cover={<img src={movieData?.posterImage?.url ? movieData?.posterImage?.url : movieLogo} alt=""/>}>
            <Row>
            <Col>
            <Rate className='movie-rate' disabled value={parseFloat(movieData?.userRating?.dtlLikedScore)}/> 
            </Col>
            <Col>
            <h3>%{movieData?.userRating?.dtlLikedScore}</h3>
            </Col>
            </Row>
            </Card>
        </Col>
        <Col span={13}>
        <Title>
          {movieData?.name}  
        </Title>
        <p>Directed By: {movieData?.directedBy}</p>
        <h3>Synopsis:</h3>
        <p>
        {movieData?.synopsis}
        </p>
        <Row>
            {movieData?.cast.map((castMember, id) => (
                <Card key={id}>
                    <Meta 
                    cover={<img src={castMember?.headShotImage?.url ? castMember?.headShotImage?.url : movieLogo} alt="cast"/>}
                    title={castMember?.name}
                    description={castMember?.characterName}/>
                </Card>
            ))}
        </Row>
        </Col>
    </Row>

    </>
  )
}

export default MovieDetail