import React, { useState } from 'react'
import { Slider, Typography } from 'antd';
import { useGetActivitiesQuery, useGetBurnedCaloriesQuery } from '../services/dietApi';



const Diet = (props) => {
    const { Title } = Typography;
    const [level, setLevel] = useState(5);
   

    const {data} = useGetActivitiesQuery(level);
    const [activity, setActivity] = useState("");
    const {data: calorie} = useGetBurnedCaloriesQuery(activity);
 

  
    return (

      <>

        <div className='result-container'>
        {calorie && (<Title level={3} style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center"}}>Calories Burned (After 30 Minutes): <Title level={2} style={{fontWeight: "500", color: "white"}}>{calorie?.data?.burnedCalorie}</Title></Title>)}
        {!calorie && (<Title level={3} style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center"}}>Click on an activity.</Title>)}
        </div>
       <div className='slider-container'>
        <div onClick={() => level > 1 ? setLevel(level - 1) : null} className='intensity-button'>-</div>
        <div className="icon-wrapper">
        <Slider {...props} onChange={setLevel} value={level} />
      </div>
      <div onClick={() => level < 9 ? setLevel(level + 1) : null} className='intensity-button'>+</div>
       </div> 

        <div><Title level={3} style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center"}}>Intensity Level: {level}</Title></div>
      
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