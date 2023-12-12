import React, {useState, useEffect} from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, StarOutlined, BulbOutlined, MenuOutlined, ClockCircleOutlined, CrownOutlined } from '@ant-design/icons'
import { motion, useAnimation } from 'framer-motion';

const rotate3D = {
    hidden: { rotateX: 20, rotateY: 0 },
    visible: { rotateX: 0, rotateY: 360, transition: { duration: 5, ease: 'linear', repeat: Infinity } },
  };

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
            <motion.div  animate="visible" variants={rotate3D}>
                <Avatar className='avatar'  src={"https://t4.ftcdn.net/jpg/04/22/12/95/360_F_422129557_tBylYldzJ5KjVTEdRLMkQIaYizThV1PE.jpg"}  size={76}/>
            </motion.div>
            <Typography.Title level={2} className="logo">
            <Link to="/">FitFusion</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined/>
            </Button>
        </div>
        {activeMenu && (
            <div className='menu'>
            <Menu style={{backgroundColor: "#0A2472"}} theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link  to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/calculators">FITNESS CALCULATORS</Link>
            </Menu.Item>
            <Menu.Item icon={<StarOutlined />}>
                <Link to="/searchExercise">FIND EXERCISES</Link>
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
        </div>
        )}
    </div>
  )
}

export default Navbar