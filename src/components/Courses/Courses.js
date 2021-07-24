import React from 'react';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import dataCourses from './data';

import './Courses.scss';

const Courses = () => {
  return (
    <div className="courses">
      {map(dataCourses, (course, key) => (
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="courses__item"
          key={key}
        >
          <Image src={course.image} alt={course.title} />
        </a>
      ))}
    </div>
  );
};

export default Courses;
