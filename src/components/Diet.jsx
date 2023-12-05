import React, { useState, useEffect } from 'react'
import { Slider, InputNumber, Typography } from 'antd';
import { useGetActivitiesQuery, useGetBurnedCaloriesQuery } from '../services/dietApi';
import { Button, Modal } from 'antd';
import ResultModal from './ResultModal';


const Diet = (props) => {
    const { max, min } = props;
    const { Title } = Typography;
    const [level, setLevel] = useState(5);
    const mid = Number(((max - min) / 2).toFixed(5));
    const preColorCls = level >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = level >= mid ? 'icon-wrapper-active' : '';
   

    const {data} = useGetActivitiesQuery(level);
    const [activity, setActivity] = useState("")
    const {data: calorie} = useGetBurnedCaloriesQuery(activity)
 

    

    return (

      <>
        <div className='result-container'>
        <Title level={3} style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center"}}>Calories Burned (After 30 Minutes): <Title level={2} style={{fontWeight: "500", color: "white"}}>{calorie?.data?.burnedCalorie}</Title></Title>
        </div>
       <div className='slider-container'>
        <div onClick={() => level > 1 ? setLevel(level - 1) : null} className='intensity-button'>-</div>
        <div className="icon-wrapper">
        <Slider {...props} onChange={setLevel} value={level} />
      </div>

      <div onClick={() => level < 9 ? setLevel(level + 1) : null} className='intensity-button'>+</div>
       </div> 

      
        <div className='activities-container'>
       {data?.data.slice(0, 20).map((activity) => (
        <div onClick={() => setActivity(activity?.id)} className='activity-container'>
              <p>{activity.description}</p>
        </div>
       ))}
       </div>

       </>
      
    );
}

export default Diet