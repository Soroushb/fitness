import React, {useState} from 'react'
import { InputNumber, Typography } from 'antd'
import { useGetBmiQuery } from '../services/dietApi';
import { Button, Flex } from 'antd';

const Bmi = () => {

    const {Title} = Typography;
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [showResult, setShowResult] = useState("false")
    const {data} = useGetBmiQuery({age: age, height: height, weight: weight});
    console.log(data)

    

  return (
    <div>
        <Title level={2} style={{color: 'white'}}>BMI:</Title>
        <Title level={3} style={{color: 'white'}}>Age: </Title>
        <InputNumber onChange={(value) => {setAge(value); setShowResult(false)}} />        
        <Title level={3} style={{color: 'white'}}>Height: </Title>
        <InputNumber onChange={(value) => {setHeight(value); setShowResult(false)}} />    
        <Title level={3} style={{color: 'white'}}>Weight: </Title>
        <InputNumber onChange={(value) => {setWeight(value); setShowResult(false)}} />     
        <Button onClick={() => setShowResult(true)} type="primary">Calculate</Button>
        {showResult && (
        <div>
        <Title level={3} style={{color: "white"}}>BMI: {data?.data?.bmi}</Title>
        <Title level={3} style={{color: "white"}}>Health: {data?.data?.health}</Title>
        <Title level={3} style={{color: "white"}}>Healthy BMI Range: {data?.data?.healthy_bmi_range}</Title>

        </div>
        )}
    </div>
    
  )
}

export default Bmi