import React,{useContext, useState} from 'react'
import Navbar from './Navbar'
import './main.css'
import aboutMe from '../images/about-me.JPG'
import myInterest from '../images/myInterest.JPG'
import { useNavigate } from 'react-router-dom'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import linkedIn from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import otherProjects from '../images/otherProjects.png'
import { NavContext, useNavOptions } from '../context/NavContext'
import myPhotography from '../images/photos.jpg'
import blog from '../images/blog.jpg'

const Home = () => {
  const navigate = useNavigate()
  const navOptions = useNavOptions()

  return (
    <>
    {/* Here we need to add the home section */}

      <div className='home-content'>
       <div className='center-here'>
         <h1>About Me</h1>
       </div>
      <div className='center-here'>
        <img 
        onClick={()=>navigate('/about-me')}
        src={aboutMe} className='image' />
      </div>
      <br /><br />
      {/* Photography */}
      <div className='center-here'>
         <h1>My Photography</h1>
       </div>
      <div className='center-here'>
        <img
        onClick={()=>navigate('/photos')} 
        src={myPhotography} className='image' />
      </div><br /><br />
    {/* My interest */}
      {/* <div className='center-here'>
        <h1>My Interest</h1>
      </div>
      <div className='center-here'>
        <div className='image'>
          <img 
          onClick={()=>navigate('/my-interest')}
          src={myInterest} className='image' />
        </div>
    </div> */}
          
          {/* Other Projects */}

    {/* <div className='center-here'>
      <h1>Other Projects</h1>
    </div>
    <div className='center-here'>
      <div className='image'>
        <img 
        onClick={()=>navigate('/other-projects')}
        src={otherProjects} className='image' />
      </div>
    </div> */}
    <br /><br />
    {/* My Blog */}
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
      

    {/* My socials */}
    <div className='center-here'>      
    <h1>My Socials</h1>
    </div>
    <br />
    <div style={{
      display:'flex',
      justifyContent:'center',
    }}>
      {/* Icons */}
      <div style={{width:'50vw', display:'flex', justifyContent:'space-evenly',gap: '40px'}}>
        <img 
        onClick={()=>window.location.href = ('https://twitter.com/urie_ez')}
        src={twitter} className='social-logo'/>
        <img 
         onClick={()=>window.location.href = ('https://www.linkedin.com/in/edgar-zatarain-0b2b57224/')}
        src={linkedIn} className='social-logo'/>
        <div style={{backgroundColor:'white',borderRadius:'10px'}}>
        <img 
         onClick={()=>window.location.href = ('https://github.com/ezduzit-13')}
        src={github} className='social-logo'/>
        </div>
        <div >
        <img 
         onClick={()=>window.location.href = ('https://www.instagram.com/edgar.zata/')}
        src={instagram} className='social-logo'/>
        </div>
      </div>
    
    </div>
    <br /><br />
    
    </div>


    </>
  )
}

export default Home