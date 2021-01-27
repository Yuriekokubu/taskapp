import React from 'react';
import Task from '../components/Task';
import PropTypes from 'prop-types';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        ></Task>
      ))}
    </>
  );
};

Tasks.propTypes = {};

export default Tasks;
