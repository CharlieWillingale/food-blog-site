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

// const Circle1 = styled.div`
//   position: absolute;
//   top: 20vh;
//   left: -30vw;
//   z-index: -5;

//   border-radius: 50%;
//   width: 71vw;
//   height: 71vw;
//   min-height: 250px;
//   min-width: 250px;

//   background-color: #505050;
//   box-shadow: 1px 1px 5px black;
// `

const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 70% 20% 5%;
  grid-template-rows: auto;
  grid-template-areas: 
  '. content sidebar .';
  margin-top: 1rem;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 5% auto 5%;
    grid-template-areas: 
    '. content .'; 
  }
`
const MainContent = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 100vh;
  margin: 10px 0;
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
      <div id="overflowX">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <Container>
        <MainContent>{children}</MainContent>
        <Sidebar />
      </Container>

      <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
