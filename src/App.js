import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar, Homepage, PopularMovies, News, Movies, TopMovies, MovieDetail, ActorDetail} from './components'
import './App.css'
import Fitness from './components/Fitness'
import SearchExercise from './components/SearchExercise'
import ExerciseDetail from './components/ExerciseDetail'


const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='main'>
            <Layout>
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
            </Layout>
        <div className='footer' level={5} style={{color:'white', textAlign:'center'}}>
            <Typography.Title style={{"color" : "white"}}>
                Cinephelia<br/>
                All Rights Reserved.
            </Typography.Title>
            <Space>
                <Link to="/">Home | </Link>
                <Link to="/popularmovies">Popular | </Link>
                <Link to="/top100">Top Movies | </Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
    </div>
    </div>
  )
}

export default App