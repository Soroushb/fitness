import React, {useState} from 'react'
import { InputNumber, Typography, Switch } from 'antd'
import { useGetBodyFatQuery, useGetDailyCalorieQuery, useGetMacrosQuery } from '../services/dietApi';
import { Button } from 'antd';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
};

const scrollToContent = (id) => {
    setTimeout(() => {
        const contentElement = document.getElementById(id); // replace with the actual ID of your content section
        if (contentElement) {
            contentElement.scrollIntoView({ behavior: "smooth" });
        }
    }, 300); // 500 milliseconds (half a second) delay
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
    textAlign: 'center',
    cursor: 'pointer'
  },
  title2: {
    color: 'white',
    background: '#005194',
    padding: '16px',
    margin: '16px 0',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'center'
  },
  title3: {
    color: '#FF4136',
    borderStyle: "solid",
    borderColor: '#FF4136',
    padding: '16px',
    margin: '16px 0',
    borderRadius: '8px',
    textAlign: 'center'
  },

};




const DailyCalorie = () => {

    const {Title} = Typography;
    const [selectedMacros, setSelectedMacros] = useState("balanced");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [activity, setActivity] = useState("");
    const [goal, setGoal] = useState("");
    const [showMacros, setShowMacros] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [activeMacros, setActiveMacros] = useState("balanced")
    const {data} = useGetDailyCalorieQuery({age: age, gender: gender, height: height, weight: weight, activity: "level_" + activity});
    const {data: macros} = useGetMacrosQuery({age: age, gender: gender, height: height, weight: weight, activity:  activity, goal: goal})
    console.log(macros)

    

  return (
    <div className='body-fat-container'>
      
        <Title level={2} style={{color: '#FF4136', marginTop: "30px", textAlign:"center"}}>Daily Calorie Requirements:</Title>

        <div className='input-group'>
        <div className='input'>
        <Title level={3} style={{color: 'white'}}>Age: </Title>
        <InputNumber min={5} max={120} onChange={(value) => {setAge(value); setShowResult(false)}} /> 
        </div>
        <div className='input'>
        <Title level={3} style={{color: 'white'}}>Gender: </Title>
        <div className='gender-button-container'>
            <div onClick={() => {setGender("male"); setShowResult(false)}} className={`gender-button ${gender === 'male' ? "gender-active" : null}`}>Male</div>
            <div  onClick={() => {setGender("female"); setShowResult(false)}} className={`gender-button ${gender === 'female' ? "gender-active" : null}`}>Female</div>
        </div>
        </div>  
        </div>
        <div className='input-group'>
          <div className='input'> 
        <Title level={3} style={{color: 'white'}}>Height: </Title>
        <InputNumber min={120} onChange={(value) => {setHeight(value); setShowResult(false)}} />    </div>
          <div className='input'>
          <Title level={3} style={{color: 'white'}}>Weight: </Title>
        <InputNumber min={30} onChange={(value) => {setWeight(value); setShowResult(false)}} /> 
          </div>
        </div>
        <div className='input-group'>
          <div className='input'>
          <Title level={3} style={{color: 'white', textAlign: "center"}}>Activity Level<br/>    (between 1 to 6): </Title>
        <InputNumber min={1} max={6} onChange={(value) => {setActivity(value); setShowResult(false)}} /> 
          </div>
        </div>
        <div className='input-group'>
          <div className='input'>
          <Button style={{marginTop: "45px"}} onClick={() => {setShowResult(true); scrollToContent("card")}} type="primary">Calculate</Button>
          </div>
        </div>
        
  
        {!data && showResult && (
          <Title level={3} style={styles.title}>No Results! Please check your inputs.</Title>
        )}
        {showResult && data && (
          <motion.div className='body-fat-results' style={styles.container}>
          <motion.div className='card' style={styles.card} initial="hidden" animate="visible" variants={fadeIn}>
            <motion.div variants={fadeIn}>
              <Title level={3} style={styles.title}>BMR: {data?.data?.BMR}</Title>
            </motion.div>
          </motion.div>
          <motion.div className='card' id="card" style={styles.card} initial="hidden" animate="visible" variants={fadeIn}>
          <motion.div variants={fadeIn}>
              <Title level={3} style={styles.title}>Goals: <br/>
              </Title>
              <motion.div onClick={() => {setGoal("maintain"); setShowMacros(true); scrollToContent("macros-result"); setActiveMacros("maintain")}} variants={fadeIn}>
              <Title level={3} style={styles.title}>Maintain Weight:<br/> {data?.data?.goals?.['maintain weight']} cal</Title>
              </motion.div>
              <motion.div onClick={() => {setGoal("extremegain"); setShowMacros(true); scrollToContent("macros-result");  setActiveMacros("extremegain")}} variants={fadeIn}>
              <Title level={3} style={styles.title}>Extreme Weight Gain: <br/> {data?.data?.goals?.['Extreme weight gain']?.calory} cal</Title>
              </motion.div> 
              <motion.div onClick={() => {setGoal("mildgain"); setShowMacros(true); scrollToContent("macros-result");  setActiveMacros("mildgain")}} variants={fadeIn}>
              <Title level={3} style={styles.title}>Mild Weight Gain: <br/> {data?.data?.goals?.['Mild weight gain']?.calory} cal</Title>
              </motion.div>
              <motion.div onClick={() => {setGoal("mildlose"); setShowMacros(true); scrollToContent("macros-result");  setActiveMacros("mildlose")}} variants={fadeIn}>
              <Title level={3} style={styles.title}>Mild Weight Loss: <br/> {data?.data?.goals?.['Mild weight loss']?.calory} cal</Title>
              </motion.div>
              <motion.div onClick={() => {setGoal("extremelose"); setShowMacros(true); scrollToContent("macros-result");  setActiveMacros("extremelose")}} variants={fadeIn}>
              <Title level={3} style={styles.title}>Extreme Weight Loss: <br/> {data?.data?.goals?.['Extreme weight loss']?.calory} cal </Title>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        )}

        {macros && showMacros && (
            <div id='macros-result'>
                <Title level={2} style={{color: "white", textAlign: "center"}}>
                    Click on a diet type:
                </Title>
            <motion.div className='card' id="card" style={styles.card} initial="hidden" animate="visible" variants={fadeIn}>
            <motion.div variants={fadeIn}>
              <Title level={3} style={styles.title2} onClick={() => {setSelectedMacros("balanced"); scrollToContent("macros-results")}}>Balanced <br/>
              </Title>
              <Title level={3} style={styles.title2} onClick={() =>{ setSelectedMacros("lowfat"); scrollToContent("macros-results")}}>Low Fat<br/>
              </Title>
              <Title level={3} style={styles.title2} onClick={() => {setSelectedMacros("lowcarbs"); scrollToContent("macros-results")}}>Low Carbs <br/>
              </Title>
              <Title level={3} style={styles.title2} onClick={() => {setSelectedMacros("highprotein"); scrollToContent("macros-results")}}>High Protein<br/>
              </Title>
              </motion.div>
              </motion.div>

            <motion.div className='card' id="macros-results" style={styles.card} initial="hidden" animate="visible" variants={fadeIn}>
            <motion.div variants={fadeIn}>
              <Title level={3} style={styles.title3}>Protein:  <br/> {Math.round(macros?.data?.[selectedMacros].protein) * 100 / 100} <br/>
              </Title>
              <Title level={3} style={styles.title3}>Fat: <br/> {Math.round(macros?.data?.[selectedMacros].fat) * 100 / 100}
              </Title>
              <Title level={3} style={styles.title3}>Carbs:  <br/> {Math.round(macros?.data?.[selectedMacros].carbs) * 100 / 100} <br/>
              </Title>
             
              </motion.div>
              </motion.div>
                
            </div>
        )}
    </div>
    
  )
}

export default DailyCalorie