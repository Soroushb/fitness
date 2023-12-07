import React, {useState} from 'react'
import { InputNumber, Typography } from 'antd'
import { useGetIdealWeightQuery } from '../services/dietApi';
import { Button, Flex } from 'antd';

const IdealWeight = () => {

    const {Title} = Typography;
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState("");
    const [showResult, setShowResult] = useState("false")
    const {data} = useGetIdealWeightQuery({gender: gender, height: height});
    console.log(data)

    const onChange = (value) => {
        setShowResult(false)
        setHeight(value);
    }

  return (
    <div>
        <Title level={2} style={{color: 'white'}}>Ideal Weight</Title>
        <Title level={3} style={{color: 'white'}}>Gender: </Title>
        <div className='gender-button-container'>
            <div onClick={() => {setGender("male"); setShowResult(false)}} className={`gender-button ${gender === 'male' ? "gender-active" : null}`}>Male</div>
            <div  onClick={() => {setGender("female"); setShowResult(false)}} className={`gender-button ${gender === 'female' ? "gender-active" : null}`}>Female</div>
        </div>
        <Title level={3} style={{color: 'white'}}>Height: </Title>
        <InputNumber onChange={onChange} />        
        <Button onClick={() => setShowResult(true)} type="primary">Calculate</Button>
        {showResult && (<Title level={3} style={{color: "white"}}>{data?.data?.Devine}</Title>)}
    </div>
    
  )
}

export default IdealWeight