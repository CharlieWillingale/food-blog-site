import React from "react"
import { Link, graphql } from "gatsby"

import HomeLayout from "../components/homeLayout"
import SEO from "../components/seo"

export default function SitePosts ({ data }) {
  // const ourPosts = data.contentfulBlogPost.edges
  // const image = getImage(frontmatter.featuredImage)
  const { title, slug, heading } = data.contentfulBlogPost
  return (
    <HomeLayout>
      <SEO title={title} />

      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{heading}</h1>

          {/* <GatsbyImage image={image}/> */}
          {/* <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          /> */}
        </div>
      </div>
    </HomeLayout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      heading
    }
  }
`