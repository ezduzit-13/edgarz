import React from 'react'
import photo1 from '../images/santa-fe-newmexico/photo1.JPG'
import photo2 from '../images/santa-fe-newmexico/photo2.JPG'
import photo3 from '../images/santa-fe-newmexico/photo3.JPG'
import photo4 from '../images/santa-fe-newmexico/photo4.JPG'
import photo5 from '../images/santa-fe-newmexico/photo5.JPG'
import photo6 from '../images/santa-fe-newmexico/photo6.JPG'
import photo7 from '../images/santa-fe-newmexico/photo7.JPG'
import photo8 from '../images/santa-fe-newmexico/photo8.JPG'

const NewMexicoPhotos = () => {
  return (
    <>
    <div className='new-mexico'>
    <div className='center-here'>
    <h1>Santa Fe With Some Buddies</h1>
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
    </>
  )
}

export default NewMexicoPhotos