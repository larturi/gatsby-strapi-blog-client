/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const posts = await graphql(`
    query MyQuery {
      allStrapiPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          title
          url
          content
          createdAt
          miniature {
            url
          }
        }
      }
    }
  `);

  paginate({
    createPage,
    items: posts.data.allStrapiPost.nodes,
    itemsPerPage: 6,
    pathPrefix: '/',
    component: path.resolve(`src/templates/Blog.js`),
  });

  posts.data.allStrapiPost.nodes.forEach(post => {
    createPage({
      path: `/${post.url}`,
      component: path.resolve(`src/templates/Post/Post.js`),
      context: {
        data: post,
      },
    });
  });
};
