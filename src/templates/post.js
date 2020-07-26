import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const Post = ({ data }) => {
  const { title, body , tags } = data.contentfulPost;
  return (
    <Layout>
      <SEO title={title} />
      <div className="post">
        <h1>{title}</h1>
        <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag.title}
            </span>
          ))}
        </div>
        <p className="body-text">{body.body}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};
export default Post;
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      tags {
        title
      }
    }
  }
`;