import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const { edges } = data.allContentfulPost;
  return (
    <Layout>
      <SEO title="Home" />
      {edges.map(edge => (
        <div className="post" key={edge}>
          <Link to={"/posts/"+edge.node.slug}>{edge.node.title}</Link>
        </div>
      ))}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  );
};

export default IndexPage;
export const postsQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          id
          slug
          title
          date
        }
      }
    }
  }
`;