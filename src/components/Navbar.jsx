import React from 'react'
import { useNavigate } from 'react-router-dom'




const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='navbar'>
      <div className='center-here'>
        <h1
        onClick={()=> navigate('/')}
        >ZZZ.</h1>
      </div>
    </div>
    </>
  )
}

export default Navbar




