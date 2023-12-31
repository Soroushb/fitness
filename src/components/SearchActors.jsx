import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';
import { useGetMoviesByTitleQuery } from '../services/movieSearchApi';
import actorLogo from '../images/user.jpg'
import { Link } from 'react-router-dom';

const SearchActors = () => {

  const {Search} = Input
  const {Title} = Typography
  const [searchValue, setSearchValue] = useState("")
  const onSearch = (value) => setSearchValue(value);
  const {data} = useGetMoviesByTitleQuery(searchValue);
  return (
    <>
    <div className='search-actors'>
    <Title level={2} className="heading" >
      Search Actors/Actresses:
    </Title>
    <Col span={8} style={{marginRight: "25px"}}>
    <Search className='searchInput' placeholder="Search for an actor/actress" onSearch={onSearch} enterButton />
    </Col>

    <Row gutter={[32,32]}>
    {console.log(data)}
      {data?.data?.search?.people.map((actor) => (
         <Col xs={24} sm={12} lg={6} key={actor.id} align="center">  
          <Link to={`/actor/${actor.id}`}>    
           <Card title={`${actor.name}`}  style={{
                                          width: 250,
                                          maxHeight: 400,
                                          minHeight: 400}} 
                                          hoverable>
                                            
              <img height={250} width={200} className='film-image' src={ actor?.headShotImage?.url ? actor?.headShotImage?.url : actorLogo} alt="movie-logo"/>
           </Card>
           </Link>
       
     </Col>
      ))}
    </Row>

    </div>
    </>
  )

}

export default SearchActors