import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Sidebar = () => (
    <aside className='sideMenu' >

        <h3 style={{borderBottom:`dotted 2px black`, margin:`10px 20px`}} >MENU</h3>
        <Link to="/test1" className='navLinks'>TEST1</Link> 

    </aside>


)

      
      export default Sidebar