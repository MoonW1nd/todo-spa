import React from 'react';
import is from 'prop-types';
import Button from '../DeleteButton/DeleteButton';
import './TodoCard.scss';

export default function TodoCard(props) {
  const { task, checkedTodo } = props;
  return <div className = 'ListItem'>
    <label>
      <input type="checkbox" className = 'ListItem-Checkbox'
        checked = { task.checked }
        onChange = { () => checkedTodo(task) }
      />
      <p className = {task.checked ? 'ListItem-Text ListItem-Text_checked' : 'ListItem-Text'}>
        { task.text }
      </p>
    </label>
    <Button className="ListItem-Button" {...props }/>
  </div>;
}

TodoCard.propTypes = {
  task: is.object,
  checkedTodo: is.func,
};
