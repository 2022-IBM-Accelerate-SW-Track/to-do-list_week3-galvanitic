import React, { Component } from 'react';
import './About.css';
import ProfilePicture from '../assets/profile.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={ProfilePicture}
              alt="Profile Pic"
              >
            </img>
          </div>
        </div>
      <div className="split right">
      <div className="centered">
        <div className="name_title">Rodolfo J. Galván Martínez</div>
        <div className="brief_description">
          <p>
            Born in León Guanajuato, México and raised in Austin, TX, Rodolfo is a post-traditional computer science and computer engineering student at Texas State University. 
            He is passionate about equitable technology and empowering others in his community. 
          </p>
          <p>
            Rodolfo serves on the board of directors of Explore Austin, a nonprofit that empowers historically underserved youth to reach their full potential through outdoor adventure.
            He helps out PelotonU, a nonprofit that provides post-traditional students the pathway and support through college. In 2018 he also co-founded and lead a 501(c)3 organization, Código Austin:
            that promotes STEM fields to students from historically underserved communities.
          </p>
          <p>
            Rodolfo specializes in equitable and accessible cloud-based full-stack software development. Apart from his leadership and entrepreneurial experience, he also has technical knowledge in hardware-level computer architecture/design and computer science principles.
          </p>

        </div>
      </div>
    </div>
      </div>
    )
  }
}