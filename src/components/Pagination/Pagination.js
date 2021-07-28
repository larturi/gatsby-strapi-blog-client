import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './Pagination.scss';

export default function Pagination(props) {
  const { pageContext } = props;
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <div className="pagination">
      {previousPagePath && (
        <Link to={previousPagePath} className="pagination__previous">
          Atras
        </Link>
      )}

      {nextPagePath && (
        <Link to={nextPagePath} className="pagination__previous">
          Siguiente
        </Link>
      )}
    </div>
  );
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
};
