import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

  </Layout>

)

export default IndexPage