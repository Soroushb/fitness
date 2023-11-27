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
  const {data} = useGetExerciseByNameQuery(searchValue);
  console.log(searchValue)

  return (
    <>
    <div className='search-actors'>
    <Title level={2} className="heading" >
      Search for an Exercise:
    </Title>
    <Col span={8} style={{marginRight: "25px"}}>
    <Search className='searchInput' placeholder="Search for an exercise" onSearch={onSearch} enterButton />
    </Col>

    <Row gutter={[32,32]}>
    {console.log(data)}
      {data?.map((exercise) => (
         <Col xs={24} sm={12} lg={6} key={exercise.id} align="center">  
            
           <Card title={`${exercise.name}`}  style={{
                                          width: 250,
                                          maxHeight: 400,
                                          minHeight: 400}} 
                                          hoverable>
                                            
              <img height={250} width={200} className='film-image' src={ exercise?.gifUrl} alt="exercise gif"/>
           </Card>
           
     </Col>
      ))}
    </Row>

    </div>
    </>
  )

}

export default SearchExercise