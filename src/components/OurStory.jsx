import React from 'react'
import Banner4 from '../assets/Happykids-Materials/Banner4-Ourstory.png'
import { Title } from '../styles/style'
import '../App.css'

function OurStory() {
  return (
    <div>
      <hr style={{opacity: '0.4'}}/>
      <img src={Banner4} width="100%" height="100%" alt=''></img>
      <div className="box"></div>
      <Title> Our Story </Title>
      <div className="box"></div>
      <div className="story">
        {/* <p>...<br/><br/></p> */}
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.<br/><br/><br/></p>
        <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
      </div>
      <div className="box"></div>
    </div>
  )
}

export default OurStory
