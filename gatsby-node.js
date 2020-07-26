/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const slash = require(`slash`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors);
      }
      const postTemplate = path.resolve("./src/templates/post.js");
      result.data.allContentfulPost.edges.forEach(edge => {
        createPage({
          path: `/posts/${edge.node.slug}/`,
          component: slash(postTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};
