import React, {useState} from 'react'
import {  Typography } from 'antd';
import { useGetExerciseByNameQuery } from '../services/fitnessApi'
import Loader from './Loader';
import SearchExercise from './SearchExercise';
import Calculators from './Calculators';
import Diet from './Diet'
import ExerciseByTarget from './ExerciseByTarget'
import Food from './Food';

const Fitness = () => {

  const {Title} = Typography
  const [diet, setDiet] = useState(false);
  const [exercises, setExercises] = useState(false);
  const [searchExercise, setSearchExercise] = useState(false);
  const [byTarget, setByTarget] = useState(false);
  const [calculator, setCalculator] = useState(false);
  const [calorie, setCalorie] = useState(false);
  const [foodTable, setFoodTable] = useState(false);
  const [active, setActive] = useState("BMI");
  const options = ["Body Fat", "BMI", "Ideal Weight"];
  const { data } = useGetExerciseByNameQuery('chest')
  console.log(data)
  if(!data) return <Loader/>

  const scrollToContent = (id) => {
    setTimeout(() => {
        const contentElement = document.getElementById(id); // replace with the actual ID of your content section
        if (contentElement) {
            contentElement.scrollIntoView({ behavior: "smooth" });
        }
    }, 500); // 500 milliseconds (half a second) delay
};

  return (
    <>

<div class="hero-section">
    <div class="hero-content">
      <div class="hero-title"><Title level={1}style={{color: "white"}}>Unleash Your Potential</Title></div>
      <div class="hero-subtitle"><Title style={{color: "white"}} level={4}>Embark on a journey to a healthier you</Title></div>
      <div onClick={() => {setExercises(true); setDiet(false); scrollToContent('main-body');}} class="hero-button">Exercises</div>
      <div onClick={() => {setDiet(true); setExercises(false); scrollToContent('main-body');}} class="hero-button">Diet</div>
    </div>
  </div>
  <div id='main-body' className='main-body'>
    {exercises && (
      <>
      <div className="section-title">Discover Your Perfect Workout</div>
      <div className="section-description">
    Embark on a personalized fitness journey by exploring our comprehensive list. Whether you're searching for a specific workout, targeting a particular muscle group, or selecting equipment preferences, our intuitive tools make it effortless to find the ideal exercise for your fitness goals.
    </div>
    <div className='button-container'>
    <div className="filter-button" onClick={() => {setSearchExercise(true); setByTarget(false); scrollToContent('searchExercise')}}>
    Search for Exercise
    </div>
    <div className="filter-button" onClick={() => {setByTarget(true); setSearchExercise(false); scrollToContent('byTarget')}}>
    Explore by Muscle & Equipment
    </div>
    </div>

    
    {byTarget && (
    <div id="byTarget"><ExerciseByTarget/></div>)}

    {searchExercise && (
      <div id="searchExercise"><SearchExercise/></div>
    )}
  
      </>
    ) }

    {diet && (
       <>
       
       <div className='diet-title-container'>
      <div className="section-title">Fuel Your Journey with Nutrition</div>
      <div className="section-description">
    Elevate your fitness experience with our diet resources. From calculating your body fat percentage, ideal weight, and BMI to exploring calorie-burning activities and discovering nutrient-rich foods, we've got you covered. Empower yourself with the knowledge to make informed nutritional choices and optimize your health.
    </div>
    </div>
    <div className='button-container'>

    <div className="filter-button" onClick={() => { setCalculator(true); setCalorie(false); setFoodTable(false); scrollToContent('diet-filter')}}>
    Fitness Calculators
</div>
<div className="filter-button" onClick={() => { setCalorie(true); setCalculator(false); setFoodTable(false); scrollToContent('diet-filter') }}>
    Calorie-Burning Activities
</div>
<div className="filter-button" onClick={() => { setFoodTable(true); setCalculator(false); setCalorie(false); scrollToContent('diet-filter')}}>
    Nutrient-Rich Foods
</div>
</div>

<div id='diet-filter'>
{calculator && (<Calculators/>)}
{calorie && (<Diet min={1} max={9}/>)}
{foodTable && (<Food/>)}

</div>

       </>
    )}
 
  </div>
  
  
</>
  )
}

export default Fitness