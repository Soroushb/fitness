import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';
import { useGetMoviesByTitleQuery } from '../services/movieSearchApi';
import actorLogo from '../images/user.jpg'

const SearchActors = () => {

  const {Search} = Input
  const {Title} = Typography
  const [searchValue, setSearchValue] = useState("")
  const onSearch = (value) => setSearchValue(value);
  const {data} = useGetMoviesByTitleQuery(searchValue);
  console.log(data)
  return (
    <>

    <Title level={2} className="heading">
      Search Actors/Actresses:
    </Title>
    <Col span={8} offset={8}>
    <Search className='searchInput' placeholder="Search for a movie title" onSearch={onSearch} enterButton />
    </Col>

    <Row gutter={[32,32]}>
      {data?.data?.search?.people.map((actor) => (
         <Col xs={24} sm={12} lg={6} key={actor.id}>      
           <Card title={`${actor.name}`}  style={{
                                          width: 250,
                                          maxHeight: 400,
                                          minHeight: 400}} 
                                          hoverable>
                                            
              <img height={250} width={200} className='crypto-image' src={ actor?.headShotImage?.url ? actor?.headShotImage?.url : actorLogo} alt="movie-logo"/>
           </Card>
         
       
     </Col>
      ))}
    </Row>


    </>
  )

}

export default SearchActors