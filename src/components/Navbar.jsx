import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
      <h1 
      onClick={()=>{
        window.location.href = ('/')
      }}
      style={{
        margin:'5px'
      }}>ZZZ.</h1>
      </div>
    </div>
  )
}

export default Navbar