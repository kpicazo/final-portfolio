import React from "react"
import styled from "styled-components"
import { Link } from 'react-scroll'

const NavBar = styled.nav`
  margin-bottom: 0;
  width: 100vw;

  position: fixed;
  z-index: 200;

  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-bottom: 1px solid #37f1ee;
`

const NavList = styled.ul`
  padding-top: 15px;
  padding-bottom: 15px;

  display: flex;
  justify-content: center;
  
  list-style-type: none;
  
  a {
    font-family: Montserrat, sans-serif;
    padding: 10px;
    cursor: pointer;
  }
`

// ref: https://stackoverflow.com/questions/54715462/how-to-scroll-to-a-specific-targeted-component-when-clicking-on-navbar-link

const Navigation = () => (
  <NavBar>
    <NavList>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        About
      </Link>
      
      <Link
        to="projects"
        offset={-70}
        spy={true}
        smooth={true}
        duration={500}
      >
        Projects
      </Link>
      <Link
        to="contact"
        offset={-70}
        spy={true}
        smooth={true}
        duration={500}
      >
        Contact
      </Link>
    </NavList>
  </NavBar>
)

export default Navigation;