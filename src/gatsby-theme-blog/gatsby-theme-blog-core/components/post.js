import React from "react"
import Post from "../../components/post"

const PostWrapper = ({ location, data }) => {
  const { contentfulPost, previous, next } = data

  return (
    <Post
      data={{ ...data, post: contentfulPost }}
      location={location}
      previous={previous}
      next={next}
    />
  )
}

export default PostWrapper
