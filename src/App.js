import React from 'react';
import TodoList from './TodoList/TodoList';
import TodoInput from './TodoInput/TodoInput';
import './App.scss';

export default class App extends React.Component {
  state = {
    tasks: [{ checked: false, text: 'Create Todo SPA', id: 0 }],
    resolveTasks: [],
    todoCount: 1,
  };

  addTodo = (text) => {
    const todo = {
      checked: false,
      text,
      id: this.state.todoCount + 1,
    };
    this.setState({
      tasks: this.state.tasks.concat(todo).sort(reverseSortById),
      todoCount: this.state.todoCount + 1,
    });
  }

  removeTodo = (todo) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== todo.id),
      resolveTasks: this.state.resolveTasks.filter(task => task.id !== todo.id),
    });
  }

  checkedTodo = (todo) => {
    todo.checked = !todo.checked;
    if (todo.checked) {
      this.setState({
        tasks: this.state.tasks.filter(task => task.id !== todo.id).sort(reverseSortById),
        resolveTasks: [todo].concat(this.state.resolveTasks),
      });
    } else {
      this.setState({
        resolveTasks: this.state.resolveTasks.filter(task => task.id !== todo.id),
        tasks: this.state.tasks.concat(todo).sort(reverseSortById),
      });
    }
  }

  render() {
    return <section>
      <TodoInput
        addTodo = { this.addTodo }
        />
      <TodoList
        { ...this.state }
        removeTodo = { this.removeTodo }
        checkedTodo = { this.checkedTodo }
      />
    </section>;
  }
}

function reverseSortById(previousTask, currentTask) {
  return currentTask.id - previousTask.id;
}
