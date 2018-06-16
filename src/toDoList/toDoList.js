import React from 'react';
import './TodoList.scss';
import TodoCard from '../TodoCard/TodoCard';

export default function TodoList(props) {
  const { tasks, resolveTasks } = props;
  const todoCards = tasks.map(task => getTodoCardsView(task, props));
  const resolveTodoCards = resolveTasks.map(task => getTodoCardsView(task, props));

  return <ul className='List'>
    { todoCards }
    <h2 style={resolveTodoCards.length === 0 ? { display: 'none' } : {} }>Resolve tasks</h2>
    { resolveTodoCards }
  </ul>;
}

function getTodoCardsView(cardData, props) {
  return <li key = { cardData.id }>
    <TodoCard task = { cardData } {...props} />
  </li>;
}
