/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

import "./GlobalLayout.css"

const Circle1 = styled.div`
  position: absolute;
  top: 20vh;
  left: -30vw;
  z-index: -5;

  border-radius: 50%;
  width: 71vw;
  height: 71vw;
  min-height: 250px;
  min-width: 250px;

  background-color: #505050;
  box-shadow: 1px 1px 5px black;
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <div className='container'>
        <Circle1/>
        <main className='mainContent'>{children}</main>

      <Sidebar />
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
