import React from 'react';
import is from 'prop-types';
import './DeleteButton.scss';

export default function Button({ task, removeTodo }) {
  return <button className='ListItem-Button' onClick = { () => { removeTodo(task); } }></button>;
}

Button.propTypes = {
  task: is.object,
  removeTodo: is.func,
};
