import React, {useState} from 'react'
import { Input, Col, Row, Card } from 'antd';
import { useGetMoviesByTitleQuery } from '../services/movieSearchApi';
import Loader from './Loader';

const SearchMovies = () => {

  const {Search} = Input
  const [searchValue, setSearchValue] = useState("")
  const onSearch = (value) => setSearchValue(value);
  const {data} = useGetMoviesByTitleQuery(searchValue);
  if(!data) return <Loader/>

  return (
    <>
    <Col span={8} offset={8}>
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </Col>

    <Row gutter={[32,32]} className="crypto-card-container">
      {data?.data?.search?.movies.map((movie) => (
         <Col xs={24} sm={12} lg={6} className="crypto-card" key={movie.emsId}>
           <Card title={`${movie.name}`} extra={<img className='crypto-image' src={movie?.posterImage} />}
           hoverable>
             <p>Price: {movie.name}</p>
           </Card>
         
       
     </Col>
      ))}
    </Row>


    </>
  )

}

export default SearchMovies