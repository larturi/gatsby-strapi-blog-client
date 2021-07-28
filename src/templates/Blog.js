import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../layouts/BlogLayout';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import Seo from '../components/seo';

export default function Blog(props) {
  const { data, pageContext } = props;
  const posts = data.allStrapiPost.nodes;

  return (
    <BlogLayout>
      <Seo
        title="Blog sobre programción"
        description="Web sobre Desarrollo Web, programación JavaScript, React, Node, Electron, Next, Gatsby, Angular..."
      />
      <PostList posts={posts} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  );
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
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
`;
