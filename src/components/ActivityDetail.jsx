import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {InputNumber } from 'antd';
import { useGetBurnedCaloriesQuery } from '../services/dietApi';



const ActivityDetail = () => {

const [activityMin, setActivityMin] = useState(23);
const [weight, setWeight] = useState(50);
const {id} = useParams();

console.log(weight, activityMin)
const {data} = useGetBurnedCaloriesQuery(id, 50, 75)
console.log(useGetBurnedCaloriesQuery)

console.log(data)


const onChangeMin = (value) => {
    setActivityMin(value)
  };

  const onChangeWeight = (value) => {
    setWeight(value)
  };




  return (

    <>    
    
    <div>{id}</div>

    <p>How Many Minutes:</p>
    <InputNumber min={1} max={10} defaultValue={25} onChange={onChangeMin} />
    <p>Weight(kg):</p>
    <InputNumber min={1} max={10} defaultValue={75} onChange={onChangeWeight} />
    {data ? data : "nni "}
    
    </>

  )
}

export default ActivityDetail