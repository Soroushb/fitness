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
            <Link to="/">FitFind</Link>
            </Typography.Title>

            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined/>
            </Button>
        </div>

        {activeMenu && (
            <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<StarOutlined />}>
                <Link to="/popularmovies">Popular New Movies</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">Recent News</Link>
            </Menu.Item>
            <Menu.Item icon={<ClockCircleOutlined/>}>
                <Link to="/movies">Movies by Year</Link>
            </Menu.Item>
            <Menu.Item icon={<CrownOutlined />}>
                <Link to="/Top100">Top 100 Movies</Link>
            </Menu.Item>
            <Menu.Item icon={<ClockCircleOutlined/>}>
                <Link to="/fitness">Fitness</Link>
            </Menu.Item>
            <Menu.Item icon={<ClockCircleOutlined/>}>
                <Link to="/searchExercise">Find Exercise</Link>
            </Menu.Item>
        </Menu>
        )}
    </div>
  )
}

export default Navbar