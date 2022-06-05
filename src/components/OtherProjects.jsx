import React from 'react'
import myPhotography from '../images/photos.jpg'
import blog from '../images/blog.jpg'
import { useNavigate } from 'react-router-dom'
const OtherProjects = () => {
  const navigate = useNavigate()
  return (
    <>
       <div className='center-here'>
         <h1>My Photography</h1>
       </div>
      <div className='center-here'>
        <img
        onClick={()=>navigate('/photos')} 
        src={myPhotography} className='image' />
      </div><br /><br />
      <div className='center-here'>
         <h1>My Blog</h1>
      </div>
      <div className='center-here'>
      <div className='center-here'>
        <img
        onClick={()=>navigate('/blog')} 
        src={blog} className='image' />
      </div>
      
      </div>
      <br /><br />
      
    </>
  )
}

export default OtherProjects