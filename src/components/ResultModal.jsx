import React, {useState, useEffect} from 'react'
import { useGetActivitiesQuery, useGetBurnedCaloriesQuery } from '../services/dietApi';
import { Button, Modal } from 'antd';




const ResultModal = ({activity}) => {

    const [open, setOpen] = useState(false);
    const [ResultOpen, setResultOpen] = useState(true);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [confirmResultLoading, setConfirmResultLoading] = useState(false);
    const {data} = useGetBurnedCaloriesQuery(activity)
    
  const showResultModal = () => {
    setResultOpen(true);
  };


  const handleResultOk = () => {
    setConfirmResultLoading(true);
    setTimeout(() => {
      setResultOpen(false);
      setConfirmResultLoading(false);
    }, 2000);
  };


    
  const handleResultCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };




  return (
    <>
     <Modal
        title="Result"
        open={ResultOpen}
        onOk={handleResultOk}
        confirmLoading={confirmResultLoading}
        onCancel={handleResultCancel}
      >
      {data ? data?.data?.burnedCalorie : "hello"}
      
      </Modal>
    </>
  )
}

export default ResultModal