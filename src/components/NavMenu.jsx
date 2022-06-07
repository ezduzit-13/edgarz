import React from 'react'
import { useNavigate } from 'react-router-dom'
const NavMenu = () => {
  
  const navigate = useNavigate()

  return (
    <div className='center-here'>
    <div className='nav-content'>
    <h3
    onClick={()=>navigate('/')}    
    >Home</h3>
    <hr />
    <h3
    onClick={()=>navigate('/photos')}
    >Photography</h3>
    <hr />
    <h3
    onClick={()=>navigate('/blog')}
    >Blog</h3>
    <hr />
    <h3
    onClick = {()=>navigate('/about-me')}
    >About</h3>
    </div>

    </div>
  )
}

export default NavMenu