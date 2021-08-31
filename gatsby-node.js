/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
 const path = require(`path`)
 const slash = require(`slash`)
 
 exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions
   return graphql(
     `
       {
         allContentfulBlogPost {
           edges {
             node {
              id
              title
              slug
              heading
             }
           }
         }
       }
     `
   )
     .then(result => {
       if (result.errors) {
         console.log("Error retrieving contentful data", result.errors)
       }
 
       // Resolve the paths to our template
       const sitePostTemplate = path.resolve("./src/templates/siteposts.js")
 
       // Then for each result we can create a page
       result.data.allContentfulBlogPost.edges.forEach(edge => {
         createPage({
           path: `${edge.node.slug}`,
           component: slash(sitePostTemplate),
           context: {
             slug: edge.node.slug,
             id: edge.node.id,
           },
         })
       })
     })
     .catch(error => {
       console.log("Error cannot retrive contentful data", error)
     })
 }