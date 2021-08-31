// import React from "react"
// import { graphql } from "gatsby"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"

// import HomeLayout from "../components/homeLayout"
// import Seo from "../components/seo.js";

// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds our post data
//   const { frontmatter, html } = markdownRemark
//   const image = getImage(frontmatter.featuredImage)

//   return (
//     <HomeLayout>
//       <Seo
//         description={frontmatter.snippet}
//       />

//     <div className="blog-post-container">
//       <div className="blog-post">
//         <h1>{frontmatter.title}</h1>
//         <h2>{frontmatter.date}</h2>

//         <GatsbyImage image={image}/>
//         <div
//           className="blog-post-content"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//     </div>
//     </HomeLayout>
//   )
// }

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//         snippet
//         featuredImage {
//           childImageSharp {
//             gatsbyImageData(layout: FULL_WIDTH)
//           }
//         }
//       }
//     }
//   }
// `
