import React, {useState, useEffect} from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, StarOutlined, BulbOutlined, MenuOutlined, ClockCircleOutlined, CrownOutlined } from '@ant-design/icons'
import icon from '../images/cinema.jpg'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const [activeLink, setActiveLink] = useState("HOME")

    useEffect(()=> {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if(screenSize < 768){
            setActiveMenu(false)
        }else{
            setActiveMenu(false)
        }
    }, screenSize)


  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size={86}/>
            <Typography.Title level={2} className="logo">
            <Link to="/">FitFusion</Link>
            </Typography.Title>
            <div className='link-container'>
            <div onClick={() => setActiveLink("HOME")} className='single-link-container'>
            <div className={`dot ${activeLink === "HOME" ? "active-dot" : ""}`}/>
            <Link className='link' to="/">HOME</Link>
            </div>
            <div onClick={() => setActiveLink("FIND")} className='single-link-container'>
            <div className={`dot ${activeLink === "FIND" ? "active-dot" : ""}`}/>
            <Link className='link' to="/searchExercise">FIND EXERCISES</Link>
            </div>
            <div onClick={() => setActiveLink("MUSCLE")} className='single-link-container'>
            <div className={`dot ${activeLink === "MUSCLE" ? "active-dot" : ""}`}/>
            <Link className='link' to="/exerciseByTarget">TARGET A MUSCLE</Link>
            </div>
            <div onClick={() => setActiveLink("BODY")} className='single-link-container'>
            <div className={`dot ${activeLink === "BODY" ? "active-dot" : ""}`}/>
            <Link className='link' to="/exerciseByBodyPart">TARGET A BODY PART</Link>
            </div>
            </div>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined/>
            </Button>
        </div>

        {activeMenu && (
            <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            
            <Menu.Item icon={<ClockCircleOutlined/>}>
                <Link to="/searchExercise">Find Exercise</Link>
            </Menu.Item>
            <Menu.Item icon={<ClockCircleOutlined/>}>
                <Link to="/exerciseByTarget">Target a Muscle</Link>
            </Menu.Item>
            <Menu.Item icon={<ClockCircleOutlined/>}>
                <Link to="/exerciseByBodyPart">Target a Muscle</Link>
            </Menu.Item>
        </Menu>
        )}

    </div>
  )
}

export default Navbar