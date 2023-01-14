import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, Movies, Upcoming} from './components'
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
                        <Route exact path='/exchanges' element={<Exchanges/>}>
                        </Route>
                        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}>
                        </Route>
                        <Route exact path='/crypto/:coinId' element={<CryptoDetails/>}>
                        </Route>
                        <Route exact path='/news' element={ <News/>}>
                        </Route>
                        <Route exact path='/movies' element={ <Movies/>}>
                        </Route>
                        <Route exact path='/upcoming' element={ <Upcoming/>}>
                        </Route>
                    </Routes>
                </div>
            </Layout>
        <div className='footer' level={5} style={{color:'white', textAlign:'center'}}>
            <Typography.Title>
                CryptoVerse<br/>
                All Rights Reserved.
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
    </div>
    </div>
  )
}

export default App