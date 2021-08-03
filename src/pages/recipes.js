import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const RecipePage = ({data}) => (
  <Layout>
    <Seo title="Recipes" />

    {data.allMarkdownRemark.edges.map(post => (
      <div className='homepage-thumbnails' key={post.node.id}>
        <Link className="thumbnail-links" to={post.node.frontmatter.path}>
          <h3 className="thumbnail-links-txt" >{post.node.frontmatter.title}</h3>
        </Link>
      </div>
    ))}

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

export default RecipePage
