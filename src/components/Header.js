import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { useLocation } from 'react-router-dom';

function Header({ title, onAdd, showTasks }) {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          onClick={onAdd}
          color={showTasks ? 'red' : 'green'}
          text={showTasks ? 'Close' : 'Add'}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
