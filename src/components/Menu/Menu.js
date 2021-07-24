import React from 'react';
import { Link } from 'gatsby';
import SocialMedia from '../SocialMedia';
import Courses from '../Courses';

import './Menu.scss';

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Blog</h2>
      </Link>
      <p>
        Blog sobre desarrollo web y programacion javascript, react, next, gatsby
        y mas.
      </p>
      <SocialMedia />
      <Courses />
    </div>
  );
};

export default Menu;
