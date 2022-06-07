import React from 'react'
import * as icons from 'react-icons/fa'
import { useNavOptions } from '../context/NavContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navOptions = useNavOptions()  
  const navigate = useNavigate()

  return (
    <>
    <div className='navbar'>
      <icons.FaBars size = {30}
      style = {{cursor:'pointer'}}
      onClick={
        ()=>navOptions.setMenu()
      }
      />
      <div>
      <h1 
      onClick={()=>{
        window.location.href = ('/')
      }}
     className= 'edgarz'
      >edgarz.</h1>
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

