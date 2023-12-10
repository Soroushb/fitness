import React, {useState} from 'react'
import {  Typography } from 'antd';
import { useGetExerciseByNameQuery } from '../services/fitnessApi'
import Loader from './Loader';
import BodyFat from './BodyFat';
import Bmi from './Bmi';
import IdealWeight from './IdealWeight'

const Calculators = () => {


    const {Title} = Typography
    const [active, setActive] = useState("BMI");
    const options = ["Body Fat", "BMI", "Ideal Weight"];
    const { data } = useGetExerciseByNameQuery('chest')
    console.log(data)
    if(!data) return <Loader/>

  return (
    <div className='calculators'>
    <Title level={2} style={{color: "white"}}>Our Calculators</Title>
    <div className='calculator-options'>
      {options.map((option) => (
              <div className={`calculator-option ${active === option ? "active-calc" : ""}`} onClick={() => setActive(option)}>{option}</div>
      ))}
    </div>
    {active === "Body Fat" && (<BodyFat/>)}
    {active === "BMI" && (<Bmi/>)}
    {active === "Ideal Weight" && (<IdealWeight/>)}

  </div>
  )
}

export default Calculators