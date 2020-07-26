import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const Post = ({ data }) => {
  const { title, body, tags } = data.contentfulPost;
  return (
    <Layout>
      <SEO title={title} />
      <div className="post">
        <h1>{title}</h1>
        <h4 className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag.title}
            </span>
          ))}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
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
        childMarkdownRemark {
          html
        }
        body
      }
      tags {
        title
      }
    }
  }
`;