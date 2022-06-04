import React from 'react'


const MyInterest = () => {
  return (
    <>

      <div className='center-here'>
    <h1>My Story</h1>
    </div>
    <div className='center-here'>
    <div style={textStyle}>
      <div style={{width:'75vw'}}>
      <p>While in the military, I worked as an avionics technician. Meaning I got to work with all of the electronics on the aircraft. Specifically, I worked on the MC-130J and the MC-130H. I also got to work on many other types of tech such as 3D Printers and Laser Engravers. I noticed that what made all of these devices really cool was the fact that they had software that made them do really cool things. That was when I decided to get out of the military to give all of my attention towards getting my Computer Science Degree </p>
      </div>
    </div>
    </div>
    <br /><br />
    <div className='center-here'>
    <h1>My Interest</h1>
    </div>
    <div className='center-here'>
    <div style={textStyle}>
      <div style={{width:'75vw'}}>
      <h3>Chess</h3>
      <p>When I was stationed in the military there was a time in which I was stationed in Okinawa Japan. While living in Japan, my friends and I watched this really cool Netflix show called The Queens Gambit. After watching the show, we all got really into chess. We would hold mini tournaments between each other. During our tournaments, it was never too competitive of an environment. Rather, we would all help each other get better by talking about different openings or analyzing our games to see where the loser went wrong. Today, I spend some time still studying chess openings and playing on Chess.com.</p>
      <h3>Coding</h3>
      <p> I took some a couple of Udemy courses on coding when I was quarantined.  I never took it too serious but I really enjoyed learning about the Python programming language.  A couple of months later my contract was about to end, and I wanted to take advantage of this program called SkillBridge.  I googled python, for I knew it was something I already kinda knew and wanted to learn more of. I found this coding bootcamp named Code Platoon, where they taught Python and Javascript. I went through the program and had a lot of fun learning about the Django and React frameworks, but what I loved the most was building. We had our final projects and that was pretty much just 10 days of you trying to build a website. I fell in love with coding from that point on. </p>
      
      <h3>Reading</h3>
      <p>
        I remember feeling very homesick at some point in my life. At that same point in time, I ran into a YouTube video on the book titled The courage to be disliked. I found the video interesting and decided to download audible so I could listen to the book while going for walks. I listened to this book along with The Happiness Advantage. The two books gave me a new perspective on life and explained to me exactly why I was sad. With this new perspective and understanding, I found myself feeling less upset about my whole situation. 
      </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default MyInterest


const textStyle = {
  borderStyle:'solid',
  borderColor:'white',
  borderRadius:'20px',
  height:'auto',
  width:'85vw',
  textAlign:'justify',
  justifyContent:'center',
  display:'flex',
  lineHeight:2,
}