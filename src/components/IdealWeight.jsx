import React, {useState} from 'react'
import { InputNumber, Typography } from 'antd'
import { useGetIdealWeightQuery } from '../services/dietApi';
import { Button,  } from 'antd';
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

const scrollToContent = () => {

  setTimeout(() => {
    const element = document.getElementById('result');
    if(element){
      element.scrollIntoView({behavior: "smooth"})
    }
  }, 500);
}


const IdealWeight = () => {

    const {Title} = Typography;
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState("");
    const [showResult, setShowResult] = useState(false)
    const {data} = useGetIdealWeightQuery({gender: gender, height: height});
    console.log(data)

    const onChange = (value) => {
        setShowResult(false)
        setHeight(value);
    }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Title level={2} style={{color: '#FF4136', marginTop: "30px"}}>Ideal Weight:</Title>
        <div className='input-group'>
          <div className='input'>
          <Title level={3} style={{color: 'white'}}>Gender: </Title>
        <div className='gender-button-container'>
            <div onClick={() => {setGender("male"); setShowResult(false)}} className={`gender-button ${gender === 'male' ? "gender-active" : null}`}>Male</div>
            <div  onClick={() => {setGender("female"); setShowResult(false)}} className={`gender-button ${gender === 'female' ? "gender-active" : null}`}>Female</div>
        </div>
          </div>
          <div className='input'>
          <Title level={3} style={{color: 'white'}}>Height: </Title>
          <InputNumber onChange={onChange} /> 
          </div>
        </div>
        <Button style={{marginTop: "20px"}} onClick={() => {setShowResult(true); scrollToContent()}} type="primary">Calculate</Button>
        {!data && showResult && (
          <Title level={3} style={styles.title}>No Results! Please check your inputs.</Title>
        )}
        {showResult && data && (
        <motion.div id='result' variants={fadeIn}>
        <Title level={3} style={styles.title}>Result: {data?.data?.Devine}</Title>
        </motion.div>
        )}
    </div>
    
  )
}

export default IdealWeight