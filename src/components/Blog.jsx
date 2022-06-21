import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate()
  return (
    <>
  <br /><br /><br /><br />
      <div className="center-here">
      <div className='blog-container'>
      <div className='center-here'>
      <h1
      onClick={() => navigate('/blog/whyMeditate')}
      >Why I Meditate</h1>
      </div>
      <div 
      className='center-here'>
      <h3>Stories about how and why I started meditating</h3>
      </div>
      <hr />
      </div>

      </div>
     
    
    <br /><br />
    <div className="center-here">
      <div className='blog-container'>
      <div className='center-here'>
      <h1
      onClick={() => navigate('/my-interest')}
      >My Interest</h1>
      </div>
      <div 
      className='center-here'>
      <h3>All my hobbies and such </h3>
      </div>
      <hr />
      </div>

      </div>
    {/* <div className='center-here'>
    <div className='blog-container'>
      <div className='center-here'>
      <h1>Tiny Grains of Sand in The End</h1>
      </div>
      <div className='center-here'>
      <h3>Stories on how small we are in comparison to the universe</h3>
      </div>
    </div>

    </div> */}
    
    </>
  )
}

export default Blog