import React from 'react'
import pf1 from '../images/florida-night/pf1.jpg'
import pf2 from '../images/florida-night/pf2.jpg'
import pf3 from '../images/florida-night/pf3.jpg'
import pf4 from '../images/florida-night/pf4.jpg'
import pf5 from '../images/florida-night/pf5.jpg'
import pf6 from '../images/florida-night/pf6.jpg'
import pf7 from '../images/florida-night/pf7.jpg'
import pf8 from '../images/florida-night/pf8.jpg'


const FloridaNights = () => {
  return (
    <>
    <div className='florida-night'>
    <div className='center-here'>
      <h1>A Night in Florida</h1>
    </div>
    <div className='go-right'>
    <img src={pf1} className='photos-image'/>
    </div>
    <div className='go-left'>
    <img src={pf2} className='photos-image'/>
    </div>
    <div className='go-right'>
    <img src={pf3} className='photos-image'/>
    </div>
    <div className='go-left'>
    <img src={pf4} className='photos-image'/>
    </div>
    <div className='go-right'>
    <img src={pf5} className='photos-image'/>
    </div>
    <div className='go-left'>
    <img src={pf6} className='photos-image'/>
    </div>

    <div className='go-right'>
    <img src={pf7} className='photos-image'/>
    </div>
    <div className='go-left'>
    <img src={pf8} className='photos-image'/>
    </div><br /><br />   
    </div>
    </>
  )
}

export default FloridaNights