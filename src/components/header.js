import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


import "./Layout.css"


const Header = ({siteTitle}) => (

    <header>

        <h1>FOOD FROM MY FLAT</h1>
        <nav>
            <ul>
                <li><Link to="/" className='navLinks'>HOME</Link> </li>
                <li><Link to="/about/" className='navLinks' >ABOUT</Link> </li>
                <li><Link to="/equipment" className='navLinks'>EQUIPMENT</Link> </li>
         
            </ul>

        </nav>

    </header>

)


    Header.propTypes = {
        siteTitle: PropTypes.string,
      }
      
      Header.defaultProps = {
        siteTitle: ``,
      }
      
      export default Header