import React, { Component } from 'react';
import Profile from './profile/Profile';
import Personaldata from '../components/personaldata/Personaldata';
import Education from '../components/education/Education'; 
import Experience from '../components/experience/Experience';
import Interests from '../components/interests/Interests';
import Languages from '../components/languages/Languages';

export default class Home extends Component {
  render() {
    return (
        <section>
            <div className="row sameHeight">
                <div className="col s12 m12 l4 light-blue darken-4 sameHeight_child">
                    <Profile />
                    <Personaldata />
                    <Interests />
                    <Languages />

                </div>
                <div className="col s12 m12 l8 white sameHeight_child">
                    <Education />
                    <Experience />

                </div>

            </div>
        </section>
    )
  }
}
