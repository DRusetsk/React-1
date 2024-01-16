import React from 'react'
import './brand.css'
import {cs, css, java, js, python, react} from "./imports"


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <p className='gradient__text'>My Experience:</p>
      <div>
        <img src={react} alt="react" />
      </div>
      <div>
        <img src={cs} alt="cs" />
      </div>
      <div>
        <img src={css} alt="css" />
      </div>
      <div>
        <img src={java} alt="java" />
      </div>
      <div>
        <img src={js} alt="js" />
      </div>
      <div>
        <img src={python} alt="python" />
      </div>
    </div>
  )
}

export default Brand