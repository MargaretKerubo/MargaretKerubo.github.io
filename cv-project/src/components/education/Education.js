import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
        <div>
          <div className='card z-depth-0'>
            <div className='card-content'>
              <h6>
                <strong># EDUCATION</strong>
              </h6>
              <hr />
              <div className='row mt'>
              <div className='col s12'>
                <blockquote className='content-right'>
                  <h6 className='no-pad mt-bottom'>
                    <strong>BACHELOR OF SCIENCE</strong>
                    <span>2011 - 2014</span>
                  </h6>
                  <p>
                  Lorem ipsum dolor sit amet, enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugi.
                  </p>
                </blockquote>
              </div>
              </div>
              <div className='row mt'>
              <div className='col s12'>
                <blockquote className='content-right'>
                  <h6 className='no-pad mt-bottom'>
                    <strong>HIGH SCHOOL CERTIFICATE</strong>
                    <span>2007 - 2010</span>
                  </h6>
                  <p>
                  Lorem ipsum dolor sit amet, enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugi.
                  </p>
                </blockquote>
              </div>
              </div>
            </div>
          </div>  
        </div>  
    )
  }
}
