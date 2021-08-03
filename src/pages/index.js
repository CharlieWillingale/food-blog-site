import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />

    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <Link className="" to={post.node.frontmatter.path}>
          <h3>{post.node.frontmatter.title}</h3>
        </Link>
      </div>
    ))}





    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <br /><br /><br /><br />
    </p>
  </Layout>
)

export const pageQuery = graphql `
  query HomePageQuery{
  
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
    
  }
`

export default IndexPage
