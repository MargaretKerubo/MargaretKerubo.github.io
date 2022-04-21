import React, { Component } from 'react';
import ImgProfile from '../../images/profile.jpg';
import './pic.css'

export default class profile extends Component {
  render() {
    return (
    <div>  
      <div className='profilepic'>
        <img className='circle responsive-img'
        src={ImgProfile}
        alt='elena powers'
        />
      </div>
      <div className='card light-blue darken-4 z-depth-0'>
        <div className='card-content'>
          <h6 className='white-text'>
            <strong># PROFILE</strong>
          </h6>
          <hr />
          <h5 className='grey-text text-lighten-3 pt'>
            <strong>ELENA POWERS</strong>
          </h5>
          <h6 className='grey-text text-lighten-2 pt'>Full Stack Web Developer</h6> 
        </div>
      </div>
    </div>
    )
  }
}
