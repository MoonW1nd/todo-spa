import React from 'react';

export default function Button({ task, removeTodo }) {
  return <button className='ListItem-Button' onClick = { () => { removeTodo(task); } }>x</button>;
}
