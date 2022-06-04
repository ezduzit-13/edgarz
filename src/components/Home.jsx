import React,{useState} from 'react'
import Navbar from './Navbar'
import './main.css'
import aboutMe from '../images/about-me.JPG'
import myInterest from '../images/myInterest.JPG'
import { useNavigate } from 'react-router-dom'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import chess from '../images/chess.png'
import linkedIn from '../images/linkedin.png'
const Home = () => {
  const navigate = useNavigate()
  
  return (
    <>
     <div className='home-section'>
       <div className='center-here'>
         <h1>About Me</h1>
       </div>
      <div className='main-content'>
        
        <img 
        onClick={()=>navigate('/about-me')}
        src={aboutMe} className='image' />
      </div>
      <br /><br />
      <div className='center-here'>
        <h1>My Interest</h1>
      </div>
      <div className='main-content'>
        <div className='image'>
          <img 
          onClick={()=>navigate('/my-interest')}
          src={myInterest} className='image' />
        </div>
      </div>
    </div>
    <br /><br />
    <div className='center-here'>      
    <h1>My Socials</h1>
    </div>
    <br />
    <div style={{
      display:'flex',
      justifyContent:'center',


    }}>
      <div style={{width:'50vw', display:'flex', justifyContent:'space-evenly',gap: '40px'}}>
        <img 
        onClick={()=>window.location.href = ('https://twitter.com/urie_ez')}
        src={twitter} className='social-logo'/>
        <img 
         onClick={()=>window.location.href = ('https://www.linkedin.com/in/edgar-zatarain-0b2b57224/')}
        src={linkedIn} className='social-logo'/>
        <img 
         onClick={()=>window.location.href = ('https://www.chess.com/member/ezduzit13')}
        src={chess} className='social-logo'/>
        <div style={{backgroundColor:'white',borderRadius:'10px'}}>
        <img 
         onClick={()=>window.location.href = ('https://github.com/ezduzit-13')}
        src={github} className='social-logo'/>


        </div>
      </div>
    
    </div>
    <br /><br />
    
    </>
  )
}

export default Home