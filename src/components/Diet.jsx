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
    const [activityMin, setActivityMin] = useState(50)
    const [weight, setWeight] = useState(75)
    const [result, setResult] = useState(false)

    const [open, setOpen] = useState(false);
    const [ResultOpen, setResultOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [confirmResultLoading, setConfirmResultLoading] = useState(false);
    const {data: calorie} = useGetBurnedCaloriesQuery(activity)

  const showModal = () => {
    setOpen(true);
  };

  const showResultModal = () => {
    setResultOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    setResultOpen(true)

  };

  const handleResultOk = () => {
    setConfirmResultLoading(true);
    setTimeout(() => {
      setResultOpen(false);
      setResult(true)
      setConfirmResultLoading(false);
    }, 2000);
  };


  const onChangeMin = (value) => {
    setActivityMin(value)
  };

  const onChangeWeight = (value) => {
    setWeight(value)
  };


  
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

    
  const handleResultCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const handleClick = (id) => {

    setActivity(id);
    showModal()

    
  }


    return (

      <>
       <div className='slider-container'>
        <div onClick={() => level > 1 ? setLevel(level - 1) : null} className='intensity-button'>-</div>
        <div className="icon-wrapper">
        <Slider {...props} onChange={setLevel} value={level} />
      </div>
      <div onClick={() => level < 9 ? setLevel(level + 1) : null} className='intensity-button'>+</div>
       </div> 

      
        <div className='activities-container'>
       {data?.data.slice(0, 20).map((activity) => (
        <div onClick={() => handleClick(activity?.id)} className='activity-container'>
              <p>{activity.description}</p>
        </div>
       ))}
       </div>

      <Modal
        title="Calculater"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
      <p>How Many Minutes:</p>
      <InputNumber min={1} max={10} defaultValue={25} onChange={onChangeMin} />
      <p>Weight(kg):</p>
      <InputNumber min={1} max={10} defaultValue={75} onChange={onChangeWeight} />


      </Modal>

      {ResultOpen && (
        <ResultModal activity={activity}/>
      )}
     
       

       </>
      
    );
}

export default Diet