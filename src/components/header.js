import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import "./GlobalLayout.css"
import "./HeaderLayout.css"


const MenuIcon = styled.button`
    background: transparent;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
   
    border: none;
    position: relative;
    top: 30%;
    left: 80%;
    padding: auto;
    
    z-index: 10;

    div{
        width: 1.5rem;
        height:0.2rem;
        background: black;
        border-radius: 5px;
        transform-origin: 1px;
    }
`

const MenuLinks = styled.nav`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    width: 100%;

    position: fixed;
    z-index: 5;

    top: 0;
    right: 0;

    transition: transform 200ms;
    transition-timing-function: ease-in-out;
    transform: ${({nav}) => nav ? "translateX(0%)" : "translateX(100%)"};

    
    a {
        color: black;
        text-decoration: none;
    }

    ul {
        list-style-type: none;
        flex-direction: column;
    }
    li {
        list-style: none;
        padding: 5px 0;
    }
`


const Header = ({siteTitle}) => {

    const [nav, showNav] = React.useState(false);

    return(
    <header>
        <StaticImage 
        src="../images/FFMF-LOGO.png"
        height={150}
        placeholder="blurred"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="FFMF-Logo"
        style={{ 
            margin: `3px`,
            gridArea: `logo`,
            width:`30%`
        }}
      /> 
        <nav>
            <ul className='nav-ul'>
                <li><Link to="/" className='navLinks'>HOME</Link> </li>
                <li><Link to="/recipes/" className='navLinks' >RECIPES</Link> </li>
                <li><Link to="/equipment/" className='navLinks'>EQUIPMENT</Link> </li>
            </ul>

            {/* For burger nav on smal display */}
            <MenuIcon id='hidden' onClick={() => showNav(!nav)}>
                <div />
                <div />
                <div />
            </MenuIcon>
            <MenuLinks nav={nav}>
                <ul>
                    <li><Link to="/" className='navLinks'>HOME</Link> </li>
                    <li><Link to="/recipes/" className='navLinks' >RECIPES</Link> </li>
                    <li><Link to="/equipment" className='navLinks'>EQUIPMENT</Link> </li>
            
                </ul>
            </MenuLinks>

        </nav>

    </header>
    )

}


    Header.propTypes = {
        siteTitle: PropTypes.string,
      }
      
      Header.defaultProps = {
        siteTitle: ``,
      }
      
      export default Header