import React from 'react';

export default function Button({ task, removeToDo }) {
  return <button className='ListItem-Button' onClick = { () => { removeToDo( task )} }>x</button>
}