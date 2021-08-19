import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

import "./GlobalLayout.css"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 5% auto 5%;
  grid-template-rows: auto;
  grid-template-areas: 
  '. content .';
  margin-top: 1rem;

  main{
    grid-area: content;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
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

const HomeLayout = ({ children }) => {


  return (
    <>
      <div id="overflowX">
        <Header siteTitle={`Food From My Flat` || `Title`} />
        
        <Container>

          <MainContent>{children}</MainContent>
          
        </Container>
      
        <Footer />
      </div>
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
