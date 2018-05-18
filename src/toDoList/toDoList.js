import React from 'react';
import ToDoElement from '../toDoItem/toDoItem'
import './toDoList.scss'

export default function ToDoList( props ) {
  const { tasks, resolveTasks, removeToDo, resolveToDo } = props;
  const ToDoElements = tasks.concat(resolveTasks).map(( task ) => {
    return <li key = { task.id }>
      <ToDoElement task = { task } {...props} />
    </li>
  })

  return <ul className='List'>
    { ToDoElements }
  </ul>
}

function sortById(previousTask, currentTask) {
  return previousTask.id - currentTask.id
}