import React from 'react'
import photo1 from '../images/santa-fe-newmexico/photo1.JPG'
import photo2 from '../images/santa-fe-newmexico/photo2.JPG'
import photo3 from '../images/santa-fe-newmexico/photo3.JPG'
import photo4 from '../images/santa-fe-newmexico/photo4.JPG'
import photo5 from '../images/santa-fe-newmexico/photo5.JPG'
import photo6 from '../images/santa-fe-newmexico/photo6.JPG'
import photo7 from '../images/santa-fe-newmexico/photo7.JPG'
import photo8 from '../images/santa-fe-newmexico/photo8.JPG'
import pf1 from '../images/florida-night/pf1.jpg'
import pf2 from '../images/florida-night/pf2.jpg'
import pf3 from '../images/florida-night/pf3.jpg'
import pf4 from '../images/florida-night/pf4.jpg'
import pf5 from '../images/florida-night/pf5.jpg'
import pf6 from '../images/florida-night/pf6.jpg'
import pf7 from '../images/florida-night/pf7.jpg'
import pf8 from '../images/florida-night/pf8.jpg'

const Photos = () => {
  return (
    <>
    <div className='new-mexico'>
    <div className='center-here'>
    <h1>New Mexico With Some Buddies</h1>
    </div>
    <div className='go-left'>
      <img src={photo1} className='photos-image'/>
    </div>
    <div className='go-right'>
    <img src={photo2} className='photos-image'/>
    </div>
    <div className='go-left'>
    <img src={photo3} className='photos-image'/>
    </div>
    <div className='go-right'>
    <img src={photo4} className='photos-image'/>
    </div>
    <div className='go-left'>
    <img src={photo5} className='photos-image'/>
    </div>
    <div className='go-right'>
    <img src={photo7} className='photos-image'/>
    </div>
    <div className='go-left'>
    <img src={photo8} className='photos-image'/>
    </div><br /><br />
    </div> 
    {/* here is where we split off and all */}
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

export default Photos