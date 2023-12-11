import React, {useState, useEffect} from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Typography, Space } from 'antd'
import {Navbar, Homepage, PopularMovies, News, Movies, TopMovies, MovieDetail, ActorDetail} from './components'
import './App.css'
import Fitness from './components/Fitness'
import SearchExercise from './components/SearchExercise'
import ExerciseDetail from './components/ExerciseDetail'
import ExerciseByTarget from './components/ExerciseByTarget'
import ExercisesByBodyPart from './components/ExercisesByBodyPart'
import ActivityDetail from './components/ActivityDetail'
import Diet from './components/Diet'
import Food from './components/Food'
import Calculators from './components/Calculators'

const App = () => {

    const [active, setActive] = useState("")

    useEffect(() => {
        // Dynamically set the background color based on your preference
        document.body.style.backgroundColor = '#000'; // Change this to your desired dark background color
        document.body.style.color = '#fff'; // Change this to your desired text color
        return () => {
          document.body.style.backgroundColor = ''; // Reset background color on unmount
          document.body.style.color = ''; // Reset text color on unmount
        };
      }, []);

  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='main'>
                <div className='routes'>
                    <Routes>
                        <Route exact path='/' element={<Fitness/>} >
                        </Route>
                        <Route exact path='/popularmovies' element={<PopularMovies/>}>
                        </Route>
                        <Route exact path='/news' element={ <News/>}>
                        </Route>
                        <Route exact path='/fitness' element={ <Fitness/>}>
                        </Route>
                        <Route exact path='/searchExercise' element={ <SearchExercise/>}>
                        </Route>
                        <Route exact path='/exerciseDetails/:id' element={ <ExerciseDetail/>}>
                        </Route>
                        <Route exact path='/activityDetails/:id' element={ <ActivityDetail/>}>
                        </Route>
                        <Route exact path='/exerciseByTarget' element={<ExerciseByTarget/>}>
                        </Route>
                        <Route exact path='/activity' element={<Diet max={9} min={1}/>}>
                        </Route>
                        <Route exact path='/calculators' element={<Calculators/>}>
                        </Route>
                        <Route exact path='/food' element={<Food/>}>
                        </Route>
                        <Route exact path='/exerciseByBodyPart' element={<ExercisesByBodyPart/>}>
                        </Route>
                        <Route exact path='/movies' element={ <Movies/>}>
                        </Route>
                        <Route exact path='/top100' element={ <TopMovies/>}>
                        </Route>
                        <Route exact path="/movie/:movieId" element={<MovieDetail/>}>
                        </Route>
                        <Route exact path="/actor/:actorId" element={<ActorDetail/>}>
                        </Route>
                    </Routes>
                </div>
                <div className='footer' style={{ color: 'white', textAlign: 'center', padding: '20px', backgroundColor: '#001529' }}>
      <Typography.Title level={3} style={{ color: 'white', marginBottom: '10px' }}>
        FitFusion
      </Typography.Title>
      <Space>
        <Link to="/" onClick={() => setActive("home")} style={{ color: 'white' }}>Home</Link> | 
        <Link to="/searchExercise" className={`${active === "search" ? "active-footer" : ""}`} onClick={() => setActive("search")} style={{ color: 'white' }}>Find Exercise</Link> | 
        <Link to="/exerciseByTarget" className={`${active === "target" ? "active-footer" : ""}`} onClick={() => setActive("target")} style={{ color: 'white' }}>Exercise By Target</Link>| 
        <Link to="/activity" className={`${active === "activity" ? "active-footer" : ""}`} onClick={() => setActive("activity")} style={{ color: 'white' }}>Activity</Link>|
        <Link to="/calculators" className={`${active === "calculators" ? "active-footer" : ""}`} onClick={() => setActive("calculators")} style={{ color: 'white' }}>Calculators</Link>
      </Space>
      <Typography.Text style={{ display: 'block', marginTop: '20px', color: '#bfbfbf' }}>
        © 2023 FitFusion. All Rights Reserved.
      </Typography.Text>
    </div>
    </div>
    </div>
  )
}

export default App