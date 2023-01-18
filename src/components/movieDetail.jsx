import React, {useState} from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import { useGetMovieDetailQuery } from '../services/movieSearchApi'
import { Card, Typography, Col, Row, Rate, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import movieLogo from '../images/movie.jpg'


const MovieDetail = () => {

  const {Title} = Typography
  const {Meta} = Card
  const {movieId} = useParams();
  const {data, isFetching} = useGetMovieDetailQuery(movieId)
  const movieData = data?.data?.movie
  console.log(data);
  const directors = movieData?.crew.filter((member) => member?.role === "Director");
  const writers = movieData?.crew.filter((member) => member?.role === "Writer");


  if(isFetching) return <Loader/>

  return (
    <>

    <Row gutter={[28,28]} align="top" style={{marginTop:"40px"}}>
        <Col className='movie-detail-card'  xs={24} sm={12} lg={6} span={8}>
            <Card cover={<img src={movieData?.posterImage?.url ? movieData?.posterImage?.url : movieLogo} alt=""/>}>
            <Col align="center">
            <h3>%{movieData?.userRating?.dtlLikedScore}</h3>
            </Col>  
            <Row align="center">
            <Col align="center">
            <Rate className='movie-rate' disabled value={parseFloat(movieData?.userRating?.dtlLikedScore)}/> 
            </Col>
            </Row>
            </Card>
        </Col>
        <Col span={15}>
        <Title>
          {movieData?.name}  
        </Title>
        {movieData?.genres.length > 0 && (
          <>
          <b>Genre: </b><br/> 
          {movieData?.genres.map((genre) => (
            <p>
              {genre?.name}
              <br/>
            </p>
          ))}
          </>
        )}
        {directors.length > 0 && (
          <Card className='director-card'>
          <Row>
          <Col span={10}>
          <p>Directed By: <br/><b>{movieData?.directedBy}</b></p>
          </Col>
          <Col>
          {directors.map((director) => (
          <Avatar size={75} src={director?.headShotImage?.url}/>
          ))}
          </Col>
          </Row>
          {console.log(writers)}
          {writers.length > 0 && (<>
          <Row>
          <Col span={10}>
          Written By: 
          {writers.map((writer) => (
            <p><b>{writer?.name}</b></p>
          ))}
          </Col>
          <Col >
          {writers.map((writer) => (
          <Avatar size={75} className='crew-avatar' src={writer?.headShotImage?.url}/>
          ))}
          </Col>
          </Row>
          </>
          )}
          </Card>
        )}
        
        <h3>Synopsis:</h3>
        <p>
        {movieData?.synopsis}
        </p>
        {movieData?.cast.length > 0 && (
          <Row>
            {movieData?.cast.map((castMember, id) => (
              <Link to={`/actor/${castMember?.id}`}>
                <Card hoverable className='actor-card' key={id}>
                  <Avatar size={75} src={castMember?.headShotImage?.url ? castMember?.headShotImage?.url : movieLogo}/>
                    <Meta 
                    cover={<img src={castMember?.headShotImage?.url ? castMember?.headShotImage?.url : movieLogo} alt="cast"/>}
                    title={castMember?.name}
                    description={castMember?.characterName}/>
                </Card>
                </Link>
            ))}
        </Row>
        )}
        </Col>
    </Row>

    </>
  )
}

export default MovieDetail