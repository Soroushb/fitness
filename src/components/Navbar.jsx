import React, {useState, useEffect} from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, StarOutlined, BulbOutlined, MenuOutlined, ClockCircleOutlined, CrownOutlined } from '@ant-design/icons'
import icon from '../images/cinema.jpg'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

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
            setActiveMenu(true)
        }
    }, screenSize)


  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size={86}/>
            <Typography.Title level={2} className="logo">
            <Link to="/">FitFusion</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined/>
            </Button>
        </div>
        {activeMenu && (
            <Menu style={{backgroundColor: "#592DD1"}} theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item icon={<StarOutlined />}>
                <Link to="/searchExercises">FIND EXERCISES</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/exerciseByTarget">TARGET A MUSCLE</Link>
            </Menu.Item>
            <Menu.Item icon={<ClockCircleOutlined/>}>
                <Link to="/activity">ACTIVITY</Link>
            </Menu.Item>
            <Menu.Item icon={<CrownOutlined />}>
                <Link to="/food">FOOD</Link>
            </Menu.Item>
        </Menu>
        )}
    </div>
  )
}

export default Navbar