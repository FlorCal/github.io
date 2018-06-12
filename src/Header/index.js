import React from 'react'
import portrait from '../app/img/portrait.jpg'

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className='HeaderComponent'>
        <div className="menu">
          <a className='active'>Skills</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
        <div className="portrait">
          <img src={portrait} />
        </div>
        <div className="name">
          <h1>Flor Calderon</h1>
          <h2>Developer, Designer & Customer Advocate</h2>
        </div>
        <div className="flower">
          tech flower
        </div>
        <div className="resume">
          download resume
        </div>
        <div className="info">
          <p className='p1'>
            <span>Current Location: </span>
            <span className='fBlack'>San Jose, CA</span>
          </p>
          <p className='p2'>
            <span>Work Authorization: </span>
            <span className='fBlack'>US Citizen</span>
          </p>
          <p className='p3'>
            <span>Job Status: </span>
            <span className='fBlack'>Looking for opportunities</span>
          </p>
        </div>
        <div className="slant">
          slant
        </div>
      </div>
    );
  }
}

export default HeaderComponent