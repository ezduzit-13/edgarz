import React from 'react'
import * as icons from 'react-icons/fa'
import logo from '../images/eye-logo.png'
import { useNavOptions } from '../context/NavContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navOptions = useNavOptions()  
  const navigate = useNavigate()

  return (
    <>
    <div className='navbar'>
      <icons.FaBars size = {50}
      style = {{cursor:'pointer'}}
      onClick={
        ()=>navOptions.setMenu()
      }
      />
      <div>
      <img 
      onClick={()=>{
        window.location.href = ('/')
      }}
      src = {logo}
      style = {{height:'80px',width:'auto'}}
      />
      </div>
      <div></div>
    </div>
    {
      navOptions.navTrigger &&
      <div className='center-here'>
    <div className='nav-content'>
    <h3
    onClick={
      ()=>{
      navigate('/')
      navOptions.setMenu()
    }
    }   
    >Home</h3>
    <hr />
    <h3
    onClick={
      ()=>{
      navigate('/photos')
      navOptions.setMenu()
    }
    }
    >Photography</h3>
    <hr />
    <h3
    onClick={
      ()=>{
      navigate('/blog')
      navOptions.setMenu()
    }
    }
    >Blog</h3>
    <hr />
    <h3
    onClick = {
      ()=>{
      navigate('/about-me')
      navOptions.setMenu()
    }
    }
    >About</h3>
    </div>
    </div>
    }
    </>
  )
}

export default Navbar

