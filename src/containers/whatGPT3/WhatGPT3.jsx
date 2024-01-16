import React from 'react'
import './whatGPT3.css'
import Features from '../features/Features'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Features title="How does this project apply to me?"
        text="This project is being used to further my skills using React, while improving my Javascript knowledge and learning CSS simutaneously.
        the goal is to integrate the skills learned in this project, as well as a few others into a professional portfolio website that I can use to market myself.
        The other ideas for the portfolio are to integrate 3D animations, and fully interactive UI elements that will give the website a welcoming flow." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Here is a continuation of the learning project</h1>
        <p>Explore Further</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Features title="More About Me" text="I am determined to learn withn a company and to broaden my experiences within the workplace as well as well as my skillset"/>
        <Features  title="Knowledge" text="I have experience with React, CSharp, CSS, Java, JavaScript, and Python"/>
        <Features title="Education" text="I am currently a Second Year Software Engineering Student attending Lassonde at York University"/>
      </div>
    </div>
  )
}

export default WhatGPT3