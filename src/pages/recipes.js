import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Card from 'react-bootstrap/Card'

const RecipePage = ({data}) => (
  <Layout>
    <Seo title="Recipes" />
    <h1>RECIPES</h1>

    {data.allMarkdownRemark.edges.map(post => (
      <div  key={post.node.id}>
        {/* <Link className="thumbnail-links" to={post.node.frontmatter.path}>
          <h3 className="thumbnail-links-txt" >{post.node.frontmatter.title}</h3>
        </Link> */}
      
      <Card style={{ width: '18rem', paddingTop:"15px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
          <Link className="thumbnail-links" to={post.node.frontmatter.path}>
            <h3 className="thumbnail-links-txt" >{post.node.frontmatter.title}</h3>
          </Link>
        </Card.Title>
        <Card.Text>
        {post.node.frontmatter.snippet}
        </Card.Text>
      </Card.Body>
      </Card>
  
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
            snippet
          }
          excerpt
        }
      }
    }
    
  }
`

export default RecipePage
