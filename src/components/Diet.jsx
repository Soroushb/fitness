import React, { useState } from 'react'
import { Slider, Typography } from 'antd';
import { useGetActivitiesQuery, useGetBurnedCaloriesQuery } from '../services/dietApi';



const Diet = (props) => {
    const { Title } = Typography;
    const [level, setLevel] = useState(5);
    const [selectedActivity, setSelectedActivity] = useState("")

    const [active, setActive] = useState(false)
    const {data} = useGetActivitiesQuery(level);
    const [activity, setActivity] = useState("");
    const {data: calorie} = useGetBurnedCaloriesQuery(activity);
 

  
    return (

      <>
        <div className='page-title-container'>
          <div className='page-title'>
          <Title style={{color: "white"}} level={2}>Activity Calorie Calculator</Title>
          </div>
          <div className='page-desc'>
          <Title style={{color: "#A9A9A9"}} level={4}>Find out the calorie burn for different activities. Click on an activity to see how many calories you can lose. Simple, informative, and tailored to your fitness journey.</Title>
          </div>

        </div>
        <div className='result-container'>
        {calorie && (<Title level={3} style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center"}}>Calories Burned (After 30 Minutes): <Title level={2} style={{fontWeight: "500", color: "white", backgroundColor: "#FF4136", padding: "10px", borderRadius: "25px", marginTop: "20px"}}>{calorie?.data?.burnedCalorie}</Title></Title>)}
        {!calorie && (<Title level={3} style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center"}}>Click on an activity.</Title>)}
        </div>
        <div className='control-container'>
        <div><Title level={3} style={{color: 'white', display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center"}}>Intensity Level: <Title level={2} style={{color: "#005194", borderRadius: "10px", padding: "10px", marginTop: "10px"}}>{level}</Title></Title></div>

        <div className='slider-container'>
        <div onClick={() => level > 1 ? setLevel(level - 1) : null} className='intensity-button-neg'>-</div>
        <div className="icon-wrapper">
        <Slider {...props} onChange={setLevel} value={level} />
      </div>
      <div onClick={() => level < 9 ? setLevel(level + 1) : null} className='intensity-button-pos'>+</div>
       </div> 
        </div>
      

      
        <div className='activities-container'>
       {data?.data.slice(0, 20).map((activity) => (
        <div key={activity.id} onClick={() => {setActivity(activity?.id); setSelectedActivity(activity?.id); setActive(true)}} style={active  && selectedActivity === activity.id ? { backgroundColor: "#005194", color: "white" } : null}  className={`activity-container ${active && selectedActivity === activity.id ? "active-activity" : ""}`}
        >
              <p>{activity.description}</p>
        </div>
       ))}
       </div>

       </>
      
    );
}

export default Diet