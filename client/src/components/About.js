import React from 'react';
import './about.css';
function About() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          className="sidebar_img"
          src=""
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad
          quae dolores necessitatibus reiciendis ab, laudantium beatae odio modi
          sequi fugiat quod, accusamus quaerat? Ea accusantium velit facilis
          optio vitae?
        </p>
      </div>
      <div>
        <div className="sidebarItem">
          <span className="sidebarTitle">SERVICES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Movie</li>
            <li className="sidebarListItem">Style</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About