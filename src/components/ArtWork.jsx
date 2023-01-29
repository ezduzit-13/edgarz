import React from 'react'
import { useState } from 'react'

/**
 * Here is what needs to get done:
 *  - create the smiley face 
 *  - figure out how to make a grid of lets say just squares one red
 * and one green
 */
const ArtWork = () => {
  const [num] = useState(1)
  const handleChange = (n) => {
    const arr = []

    for (let i = 0; i < n; i++) {
      arr.push(<button>box</button>)
    }
    console.log(n,'n value')
    return arr
  } 

  return (
    <>
    <h1>Artwork Page</h1>
    <button>diamond</button>
    <button>circle</button>
    <button>square</button>
    <br />
    <button>3x3</button>
    <button>6x6</button>
    <button>9x9</button>
    <br />
    {
      handleChange(num)
    }
    <div className='center-here'>
      <div className='canvas'>
      </div>
    </div>
    
    </>
  )
}

export default ArtWork