import React from 'react';
import Button from '../DeleteButton/DeleteButton';
import './toDoItem.scss';

export default function ToDoElement(props) {
  const { task, checkedToDo } = props;
  return <div className = 'ListItem'>
    <label>
      <input type="checkbox" className = 'ListItem-Checkbox'
        onClick = { (ev) => checkedToDo( task ) }
      />
      <p className = {task.checked ? 'ListItem-Text ListItem-Text_checked': 'ListItem-Text'}>
        { task.text }
      </p>
    </label>
    <Button className="ListItem-Button" {...props }/>
  </div>
}