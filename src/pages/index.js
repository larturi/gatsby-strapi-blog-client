import React from 'react';
import { Button } from 'semantic-ui-react';
import BlogLayout from '../layouts/BlogLayout';

const Home = () => {
  return (
    <BlogLayout>
      <h1>Home</h1>
      <p>Parrafo</p>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </BlogLayout>
  );
};

export default Home;
