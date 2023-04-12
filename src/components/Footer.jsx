import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaPinterest, FaInstagram } from 'react-icons/fa';
import { Title } from '../styles/style';
import '../App.css'

function Footer() {
  return (
  <div className='footer'>
    <hr/>
    <div className="box"></div>
    <Title> happy kids </Title>  
    <div className="box"></div>
    <div className="footerlink">
      <div className="footerlinkobj">
        <Link to ="/" style={{textDecoration: 'none',color: 'black',opacity:'0.5'}}>Home</Link>
        <Link to ="/Shop" style={{textDecoration: 'none',color: 'black',opacity:'0.5'}}>Shop Collection</Link>
        <Link to ="/OurStory" style={{textDecoration: 'none',color: 'black',opacity:'0.5'}}>Our Story</Link>
        <Link to ="/Contact" style={{textDecoration: 'none',color: 'black',opacity:'0.5'}}>Contact</Link>
      </div>
      <div className='foot_icon'>
          <a href="https://www.facebook.com/"><FaFacebook style={{ color: "black" }}/></a>
          <a href="https://www.pinterest.com/"><FaPinterest style={{ color: "black" }}/></a>
          <a href="https://www.instagram.com/"><FaInstagram style={{ color: "black" }}/></a>
      </div>
      <div className="footerlinkobj">
      <Link to ="/Shipping" style={{textDecoration: 'none',color: 'black',opacity:'0.5'}}>Shipping & Returns</Link>
        <Link to ="/Storepolicy" style={{textDecoration: 'none',color: 'black',opacity:'0.5'}}>Store Policy</Link>
        <Link to ="/PaymentMet" style={{textDecoration: 'none',color: 'black',opacity:'0.5'}}>Payment Methods</Link>
        <Link to ="/FAQ" style={{textDecoration: 'none',color: 'black',opacity:'0.5'}}>FAQ</Link>
      </div>
    </div>
    <p style={{fontSize: '19px'}}>Join Our Mailing List</p>
    <div className='footer_mail'>
        <input type='text' placeholder='Enter your email here*'></input>
        <button>Subcribe Now</button> 
    </div>
    <div className="box"></div>
    <p>Copyright © 2023 by happy Kids.</p>
</div>
  )
}

export default Footer