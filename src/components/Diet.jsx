import React, { useState, useEffect } from 'react'
import { Slider, InputNumber } from 'antd';
import { useGetActivitiesQuery, useGetBurnedCaloriesQuery } from '../services/dietApi';
import { Button, Modal } from 'antd';
import ResultModal from './ResultModal';


const Diet = (props) => {
    const { max, min } = props;
    const [level, setLevel] = useState(0);
    const mid = Number(((max - min) / 2).toFixed(5));
    const preColorCls = level >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = level >= mid ? 'icon-wrapper-active' : '';
    const {data} = useGetActivitiesQuery(level);
    const [activity, setActivity] = useState("")
    const {data: calorie} = useGetBurnedCaloriesQuery(activity)
    console.log(calorie?.burnedCalorie)
 



    return (

      <>
       <div className='slider-container'>
        <div onClick={() => level > 1 ? setLevel(level - 1) : null} className='intensity-button'>-</div>
        <div className="icon-wrapper">
        <div>Result:{calorie?.data?.burnedCalorie}</div>

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