import React from 'react'
import { useNavigate } from 'react-router-dom'
const AboutMe = () => {
  const navigate = useNavigate()


  return (
    <>
    <div className='center-here'>
    <h1>About Me</h1>
    </div>
    <div className='center-here'>
    <div style={textStyle}>
      <div style={{width:'60vw'}}>
      <h3>My name is Edgar Zatarain. I am a Mexican-American who grew up in Vista, California. When I was 18, just 5 days after graduating High School, I went off to basic training for the United States Air Force. It was during my time in the service that I fell in love with technology. Learn more about that story <span
      style={{fontStyle:'italic'}}
      onClick = {() => navigate('/my-interest')}
      > here.</span> Today, I am going to college to try and get my Bachelors in Computer Science, while still working on little side projects here and there. </h3>
      </div>
    </div>
    </div>
    <br /><br />
    <div className='center-here'>
    <h1>My Values</h1>
    </div>
    <div className='center-here'>
    <div style={textStyle}>
      <div style={{width:'60vw'}}>
        <h2>Presence</h2>
      <h3>&emsp; Even in uncomfortable situations— one must remain present— and that is what it means to have patience. Everything in life no matter how seemingly terrible holds a learning oppertunity. Also, many of the most beautiful things in life take time. That is why patience holds such beauty. </h3>
      <h3>&emsp; It is important to remain present— for you never know when a beautiful moment will end— and that is gratitude. Many of the best things in this life will come to an end. Actually, everything will come to an end. That is why it is important to be grateful.</h3>

      <h2>Family</h2>
      <h3>&emsp; When someone experiences suffering— you are there to help— and they are there for you. Meaning you have compassion for them, and they have compassion for you. Family helps to promote the virtue of compassion.  </h3>
      <h3>&emsp; One should never just be worried of their own success. Rather, they should also be worried of others success, and others will be worried for your success as well. That is what it means to be selfless. Family teaches selflessness</h3>

      </div>
    </div>
    </div>
    

    


    </>
  )
}

export default AboutMe

const textStyle = {
  borderStyle:'solid',
  borderColor:'white',
  borderRadius:'20px',
  height:'auto',
  width:'70vw',
  textAlign:'justify',
  justifyContent:'center',
  display:'flex',
  lineHeight:2,
}