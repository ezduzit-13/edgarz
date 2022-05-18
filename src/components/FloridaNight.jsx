import React from 'react'
import twentyone from '../images/2021.jpg'
import love from '../images/love.jpg'
import Navbar from './Navbar'
import g from '../images/graffiti.jpg'
import down from '../images/down.jpg'
import flag from '../images/flag.jpg'
import rocks from '../images/rocks.jpg'
import sign from '../images/sign.jpg'
import train from '../images/train-tracks.jpg'
const FloridaNight = () => {
  return (
    <>
    <div className='center-div'>
    <h1>A Night In Florida Below</h1>
    </div>
   
    <div 
    style={{
      marginRight:'30vw',
      marginLeft:'30vw'
    }}
    >
      <img src={twentyone} className='image'/>
    <br /><br />
    <div className='right-div'>
    <img src={love} className='image' />
    </div>
   
    <br /><br />
    <img src={g} className='image' />

      <h3>
        I was stationed at Hurlburt Field,Fl from May-December of 2021. While stationed there, I would spend a lot of time going out for a drive with nothing but a camera. I would take pictures of things I found to be pretty cool, as well as thinking about life in various of ways. 
      </h3>
    <br /><br />
    <div className='right-div'>
    <img src={down} className='image' />
    </div>
   
<br /><br />
<img src={flag} className='image' />
<br /><br />
<div className='right-div'>
<img src={sign} className='image' />
</div>
<br /><br />
<img src={train} className='image' />
<br /><br />

    </div>
    



    </>
  )
}

export default FloridaNight