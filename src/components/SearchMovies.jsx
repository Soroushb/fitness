import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';
import {Link} from 'react-router-dom'
import { useGetMoviesByTitleQuery } from '../services/movieSearchApi';
import movieLogo from '../images/movie.jpg'
import Loader from './Loader';

const SearchMovies = () => {

  const {Search} = Input
  const {Title} = Typography
  const [searchValue, setSearchValue] = useState("")
  const [movieLoader,setMovieLoader] = useState(false)
  const onSearch = (value) => {setSearchValue(value); setMovieLoader(true)}
  const {data} = useGetMoviesByTitleQuery(searchValue);


  return (
    <>
    <div className='search-movies'>
    <Title level={2} className="heading" style={{marginTop: "30px"}}> 
      Search Movies:
    </Title>
    <Col span={8} style={{marginRight: "25px"}}>
    <Search className='searchInput' placeholder="Search for a movie title" onSearch={onSearch} enterButton />
    </Col>

    

    <Row gutter={[32,32]}>
      {data?.data?.search?.movies.map((movie) => (
         <Col xs={24} sm={12} lg={6} key={movie.emsId} align="center">
          <Link to={`/movie/${movie.emsVersionId}`}>
          <Card className='movie-search-card' title={`${movie.name}`}  style={{
                                          width: 250,
                                          maxHeight: 400,
                                          minHeight: 400}} 
                                          hoverable
                                          >
                                            
              <img height={250} className='film-image' src={movie?.posterImage?.url ? movie?.posterImage?.url : movieLogo} alt="movie-logo" style={{maxWidth: "200px"}}/>
             <p>User Rating: {movie?.userRating?.dtlLikedScore ? `%${movie?.userRating?.dtlLikedScore}` : "Not Available"}</p>
           </Card>
          </Link>      
     </Col>
      ))}
    </Row>
    </div>
    </>
  )

}

export default SearchMovies