import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
      <h1 
      onClick={()=>{
        window.location.href = ('/')
      }}
     className= 'edgarz'
      >edgarz.</h1>
      </div>
    </div>
  )
}

export default Navbar