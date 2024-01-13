import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section_padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>This is a basic website to use for learning as a basis for future projects</h1>
        <p>ReactJS tutorial being followed to learn the basics of the framework, being being put to use to create my own portfolio website. Why don't margins work :/</p>
        <div className='gpt3__header-content_input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src= {people} alt='people'/>
          <p>420 people requested access in the last 24 hours</p>
        </div>
        
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header