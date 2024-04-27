import React from 'react'

const Navbar = () => {
  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a href="#Home" className="nav_items nav_items">
            Home
          </a>
          <a href="#Fresher" className="nav_items nav_items">
            Experience
          </a>
          <a href="#skills" className="nav_items nav_items">
            Skills
          </a>
          <a href="#projects" className="nav_items nav_items">
            Projects
          </a>
          <a href="#contact" className="nav_items nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar
