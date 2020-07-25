import React from "react"
import Posts from "gatsby-theme-blog/src/components/posts"

const PostsWrapper = ({ location, data }) => {
  const { site, allContentfulPost } = data
  return (
    <Posts
      location={location}
      posts={allContentfulPost.nodes}
      siteTitle={site.siteMetadata.title}
      socialLinks={site.siteMetadata.social}
    />
  )
}

export default PostsWrapper
