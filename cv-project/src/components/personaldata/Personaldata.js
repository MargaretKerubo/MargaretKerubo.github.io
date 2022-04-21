import React, { Component } from 'react'

export default class personaldata extends Component {
  render() {
    return (
      <div>
        <div className='card light-blue darken-4 z-depth-0'>
          <div className='card-content'>
            <h6 className='white-text'>
              <strong># PERSONAL DATA</strong>
            </h6>
            <hr />
            <p className='grey-text text-lighten-3 pt'>
              Address: Box 1398,San Francisco, USA
              <br />
              Tel: +1 234 567 890
              <br />
              Email: elpowers2@gmail.com
              <br />
              DoB: 4th May 1997
              <br />
              Marital Status: Single
            </p>
          </div>
        </div>
      </div>
    )
  }
}
