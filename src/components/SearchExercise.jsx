import React, {useState} from 'react'
import { Input, Col, Row, Card, Typography } from 'antd';
import actorLogo from '../images/user.jpg'
import { Link } from 'react-router-dom';
import { useGetExerciseByNameQuery } from '../services/fitnessApi';

const SearchExercise = () => {

  const {Search} = Input
  const {Title} = Typography
  const [searchValue, setSearchValue] = useState("")
  const onSearch = (value) => setSearchValue(value);
  const {data} = useGetExerciseByNameQuery(searchValue ? searchValue.toLowerCase() : "body");
  console.log(searchValue)

 

  return (
    <>
    <div className='search-exercises'>
    <div className='title-search'>
    <Title level={2} className="heading" style={{color: 'white'}}>
      Search for an Exercise:
    </Title>
    <Col span={8} style={{marginBottom: "45px", marginRight: "40px"}}>
    <Search className='searchInput' placeholder="Search for an exercise" onSearch={onSearch} enterButton />
    </Col>
    </div>
    <Row className="card-container" gutter={[32,32]}>
    {console.log(data)}
      {data?.map((exercise) => (
         <Col xs={24} sm={12} lg={8} key={exercise.id} align="center">  
            <Link to={`/exerciseDetails/${exercise.id}`}>
           <Card title={`${exercise.name.toUpperCase()}`}  style={{
                                          width: 250,
                                          borderRadius: "50px",
                                          maxHeight: 400,
                                          minHeight: 400}} 
                                          hoverable>
                                            
              <img height={250} width={200} className='film-image' src={ exercise?.gifUrl} alt="exercise gif"/>
           </Card>
           </Link>
     </Col>
      ))}
      {data?.length === 0 && (<Title style={{color: "white", marginBottom: "200px"}}>No Results Found.<br/></Title>)}
    </Row>
    </div>
    </>
  )

}

export default SearchExercise