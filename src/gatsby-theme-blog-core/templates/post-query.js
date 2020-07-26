import { graphql } from "gatsby"
import PostPage from "gatsby-theme-blog/src/components/post"

export default PostPage

export const query = graphql`
  query ContentfulPostPageQuery(
    $id: String!
    $previousId: String
    $nextId: String
  ) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    contentfulPost(id: { eq: $id }) {
      id
      body {
        body
      }
      slug
      title
      tags {
        slug
        title
      }
      date(formatString: "MMMM DD, YYYY")
    }
    previous: contentfulPost(id: { eq: $previousId }) {
      id
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: contentfulPost(id: { eq: $nextId }) {
      id
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
