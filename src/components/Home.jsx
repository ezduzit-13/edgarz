import React,{useState} from 'react'
import Navbar from './Navbar'
import About from './About'
import Interest from './Interest'
import Projects from './Projects'
import Socials from './Socials'
import './main.css'
const Home = () => {

  const [aboutTrigger,setAbout] = useState(false)
  const [interestTrigger,setInterest] = useState(false)
  const [projectsTrigger,setProjects] = useState(false)
  const [socialsTrigger,setSocials] = useState(false)
  
  return (
    <>
     <div className='home-section'>
       <div className='home-box'>
         <div className='word-right'>
           About
         </div>
         <div className='word-right'>
           Me

         </div>

       </div>
       <div className='home-box'>

       </div>

     </div>
     <div className='home-section'>
       <div className='home-box'>

       </div>
       <div className='home-box'>

       </div>

     </div>
    </>
  )
}

export default Home