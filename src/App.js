import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar, Homepage, PopularMovies, Cryptocurrencies, CryptoDetails, News, Movies, TopMovies, MovieDetail, ActorDetail} from './components'
import './App.css'


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
                        <Route exact path='/' element={<Homepage/>} >
                        </Route>
                        <Route exact path='/popularmovies' element={<PopularMovies/>}>
                        </Route>
                        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}>
                        </Route>
                        <Route exact path='/crypto/:coinId' element={<CryptoDetails/>}>
                        </Route>
                        <Route exact path='/news' element={ <News/>}>
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