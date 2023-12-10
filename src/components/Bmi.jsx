import React, {useState} from 'react'
import { InputNumber, Typography } from 'antd'
import { useGetBmiQuery } from '../services/dietApi';
import { Button, Flex } from 'antd';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const styles = {
  container: {
    perspective: '800px',
  },
  card: {
    width: '300px',
    height: 'auto',
    margin: '0 auto',
    position: 'relative',
  },
  title: {
    color: 'white',
    background: 'rgba(0, 0, 0, 0.8)',
    padding: '16px',
    margin: '16px 0',
    borderRadius: '8px',
  },
};


const Bmi = () => {

    const {Title} = Typography;
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [showResult, setShowResult] = useState(false)
    const {data} = useGetBmiQuery({age: age, height: height, weight: weight});
    console.log(data)

    

  return (
    <div className='bmi-container'>
        <div style={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
        <Title level={2} style={{color: '#FF4136'}}>BMI:</Title>
        </div>
        <div className="input-group">
        <div className='input'>
        <Title level={3} style={{color: 'white'}}>Age: </Title>
        <InputNumber onChange={(value) => {setAge(value); setShowResult(false)}} /> 
        </div>
        <div className='input'> 
        <Title level={3} style={{color: 'white'}}>Height: </Title>
        <InputNumber onChange={(value) => {setHeight(value); setShowResult(false)}} />
        </div> 
        </div>
        <div className='input-group'>
        <div className='input'>
        <Title level={3} style={{color: 'white'}}>Weight: </Title>
        <InputNumber onChange={(value) => {setWeight(value); setShowResult(false)}} />   
        </div>
        <div className='input'>
        <Button onClick={() => setShowResult(true)} style={{marginTop: "43px"}} type="primary">Calculate</Button>
        </div>
        </div>
          
        {!data && showResult && (
          <Title level={3} style={styles.title}>No Results! Please check your inputs.</Title>
        )}
        {showResult && data && (
        <div className='bmi-result-container'>
        <Title level={3} style={{color: "white"}}>BMI: {data?.data?.bmi}</Title>
        <Title level={3} style={{color: "white"}}>Health: {data?.data?.health}</Title>
        <Title level={3} style={{color: "white"}}>Healthy BMI Range: {data?.data?.healthy_bmi_range}</Title>

        </div>
        )}
    </div>
    
  )
}

export default Bmi