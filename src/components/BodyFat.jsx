import React, {useState} from 'react'
import { InputNumber, Typography } from 'antd'
import { useGetBodyFatQuery } from '../services/dietApi';
import { Button } from 'antd';

const BodyFat = () => {

    const {Title} = Typography;
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [neck, setNeck] = useState("");
    const [waist, setWaist] = useState("");
    const [hip, setHip] = useState("");
    const [showResult, setShowResult] = useState("false")
    const {data} = useGetBodyFatQuery({age: age, gender: gender, height: height, weight: weight, neck: neck, waist: waist, hip: hip});
    console.log(data)

    

  return (
    <div className='body-fat-container'>
      
        <Title level={2} style={{color: 'white'}}>Calculate Body Fat:</Title>

        <div className='input-group'>
        <div className='input'>
        <Title level={3} style={{color: 'white'}}>Age: </Title>
        <InputNumber onChange={(value) => {setAge(value); setShowResult(false)}} /> 
        </div>
        <div className='input'>
        <Title level={3} style={{color: 'white'}}>Gender: </Title>
        <div className='gender-button-container'>
            <div onClick={() => {setGender("male"); setShowResult(false)}} className={`gender-button ${gender === 'male' ? "gender-active" : null}`}>Male</div>
            <div  onClick={() => {setGender("female"); setShowResult(false)}} className={`gender-button ${gender === 'female' ? "gender-active" : null}`}>Female</div>
        </div>
        </div>  
        </div>
        <div className='input-group'>
          <div className='input'> 
        <Title level={3} style={{color: 'white'}}>Height: </Title>
        <InputNumber onChange={(value) => {setHeight(value); setShowResult(false)}} />    </div>
          <div className='input'>
          <Title level={3} style={{color: 'white'}}>Weight: </Title>
        <InputNumber onChange={(value) => {setWeight(value); setShowResult(false)}} /> 
          </div>
        </div>
        <div className='input-group'>
          <div className='input'>
          <Title level={3} style={{color: 'white'}}>Neck: </Title>
        <InputNumber onChange={(value) => {setNeck(value); setShowResult(false)}} />  
          </div>
          <div className='input'>
          <Title level={3} style={{color: 'white'}}>Waist: </Title>
        <InputNumber onChange={(value) => {setWaist(value); setShowResult(false)}} />  
          </div>
        </div><div className='input-group'>
          <div className='input'><
          Title level={3} style={{color: 'white'}}>Hip: </Title>
        <InputNumber onChange={(value) => {setHip(value); setShowResult(false)}} />   </div>
          <div className='input'>
          <Button style={{marginTop: "45px"}} onClick={() => setShowResult(true)} type="primary">Calculate</Button>
          </div>
        </div><div className='input-group'>
          <div className='input'></div>
          <div className='input'></div>
        </div>
  
        
        {showResult && data && (
        <div>
        <Title level={3} style={{color: "white"}}>Body Fat (BMI Method): {data?.data?.["Body Fat (BMI method)"]}</Title>
        <Title level={3} style={{color: "white"}}>Body Fat (U.S. Navy Method): {data?.data?.["Body Fat (U.S. Navy Method)"]}</Title>
        <Title level={3} style={{color: "white"}}>Body Fat Mass: {data?.data?.["Body Fat Mass"]}</Title>
        <Title level={3} style={{color: "white"}}>Lean Body Mass: {data?.data?.["Lean Body Mass"]}</Title>   
        </div>
        )}
    </div>
    
  )
}

export default BodyFat