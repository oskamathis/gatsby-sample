import { graphql } from "gatsby"
import PostsPage from "../components/posts"

export default PostsPage

export const query = graphql`
  query ContentfulPostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allContentfulPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      nodes {
        id
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags {
          id
          slug
          title
        }
      }
    }
  }
`
