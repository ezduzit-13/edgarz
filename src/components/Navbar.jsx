import React from 'react'
import * as icons from 'react-icons/fa'
import { useNavOptions } from '../context/NavContext'
import NavMenu from './NavMenu'

const Navbar = () => {
  const navOptions = useNavOptions()

  return (
    <>
    <div className='navbar'>
      <icons.FaBars size = {30}
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
      <NavMenu/>


    }
    </>
  )
}

export default Navbar

