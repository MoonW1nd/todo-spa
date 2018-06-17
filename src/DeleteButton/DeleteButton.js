import React from 'react';
import is from 'prop-types';

export default function Button({ task, removeTodo }) {
  return <button className='ListItem-Button' onClick = { () => { removeTodo(task); } }>x</button>;
}

Button.propTypes = {
  task: is.object,
  removeTodo: is.func,
};
