import React, { useState } from 'react'
import { Slider } from 'antd';
import { useGetActivitiesQuery } from '../services/dietApi';


const Diet = (props) => {
    const { max, min } = props;
    const [value, setValue] = useState(0);
    const mid = Number(((max - min) / 2).toFixed(5));
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    const {data} = useGetActivitiesQuery()

    console.log(data)

    return (

      <>
       <div className='slider-container'>
        <div className='intensity-button'>-</div>
        <div className="icon-wrapper">
        <Slider {...props} onChange={setValue} value={value} />
      </div>
      <div className='intensity-button'>+</div>
       </div> 

      
       {data?.data.slice(0, 20).map((activity) => (
        <p>{activity.description}</p>
       ))}
       

       </>
      
    );
}

export default Diet