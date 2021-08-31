// import * as React from "react"
// import { graphql, Link } from "gatsby"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

// import Card from 'react-bootstrap/Card'

// const RecipePage = ({data}) => (

//   <Layout>
//     <Seo title="Recipes" />
//     <h1>RECIPES</h1>

//     {data.allMarkdownRemark.edges.map(post => (
//       <div  key={post.node.id}>
//         {/* <Link className="thumbnail-links" to={post.node.frontmatter.path}>
//           <h3 className="thumbnail-links-txt" >{post.node.frontmatter.title}</h3>
//         </Link> */}
      
//       <Card style={{ width: '18rem', marginTop:"20px", border:`1px solid black`}}>
//       {/* <Card.Img variant="top"> */}
//         <Card.Img  variant="top"
//           alt={post.node.frontmatter.altFeaturedImage}
//           as={GatsbyImage} 
//           image={getImage(post.node.frontmatter.featuredImage.childImageSharp)}
//         />
        
//         <Card.Body>
//           <Card.Title>
//             <Link className="thumbnail-links" to={post.node.frontmatter.path}>
//               <h3 className="thumbnail-links-txt" >{post.node.frontmatter.title}</h3>
//             </Link>
//           </Card.Title>

//           <Card.Text>
//             {post.node.frontmatter.snippet}
//           </Card.Text>

//         </Card.Body>
//       </Card>
  
//       </div>
//     ))}

//   </Layout>
// )

// export const pageQuery = graphql `
//   query HomePageQuery{
  
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             date
//             author
//             snippet
//             altFeaturedImage
//             featuredImage {
//               relativePath
//               childImageSharp {
//                 gatsbyImageData(layout: FULL_WIDTH)
//               }
//             }
//           }
//           excerpt
//         }
//       }
//     }
    
//   }
// `

// export default RecipePage
// --------------------------------------------------------------------

import React from "react"
import { Link, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

import Card from 'react-bootstrap/Card'


const SitePosts = ({ data }) => (
  
  <Layout>
    <Seo title="Recipes" />
    <h1>RECIPES</h1>

    {data.allContentfulBlogPost.edges.map(({ node: post }) => (
      <div key={post.id}>
        <Card style={{ width: '18rem', marginTop:"20px", border:`1px solid black`}}>
          {/* <Card.Img  variant="top"
            alt={post.node.frontmatter.altFeaturedImage}
            as={GatsbyImage} 
            image={getImage(post.node.frontmatter.featuredImage.childImageSharp)}
          /> */}
          
          <Card.Body>
            <Card.Title>
              <Link className="thumbnail-links" to={`/${post.slug}`}>
                <h3 className="thumbnail-links-txt" >{post.heading}</h3>
              </Link>
            </Card.Title>

            <Card.Text>
              {post.heading}
            </Card.Text>

          </Card.Body>
        </Card>
    
      </div>
      ))}

    </Layout>
  )

export default SitePosts

export const query = graphql`
  query SitePostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
        edges {
            node {
            id
            slug
            heading
            }
        }
    }
}`