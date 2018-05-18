import React from 'react';
import ToDoList from './toDoList/toDoList';
import TaskInput from './taskInput/taskInput';
import './App.scss';

export default class App extends React.Component {
  state = {
    tasks: [{ checked: false, text: 'Create ToDo SPA' , id: 0}],
    resolveTasks: [],
    toDoCount: 1
  };

  addToDo = (text) => {
    const toDo = {
      checked: false,
      text,
      id: this.state.toDoCount + 1
    }
    this.setState({
      tasks: this.state.tasks.concat(toDo),
      toDoCount: this.state.toDoCount + 1
    })
  }

  removeToDo = (todo) => {
    this.setState({
      tasks: this.state.tasks.filter( task => task.id !== todo.id ),
      resolveTasks: this.state.resolveTasks.filter( task => task.id !== todo.id )
    })
  }

  checkedToDo = (todo) => {
    todo.checked = !todo.checked
    if (todo.checked) {
      this.setState({
        tasks: this.state.tasks.filter( task => task.id !== todo.id ).sort(sortById),
        resolveTasks: this.state.resolveTasks.concat(todo).sort(sortById)
      })
    } else {
      this.setState({
        resolveTasks: this.state.resolveTasks.filter( task => task.id !== todo.id ).sort(sortById),
        tasks: this.state.tasks.concat(todo).sort(sortById)
      })
    }
  }

  render () {
    return <section>
      <TaskInput
        addToDo = { this.addToDo }
        />
      <ToDoList
        { ...this.state }
        removeToDo = { this.removeToDo }
        checkedToDo = { this.checkedToDo }
      />
    </section>
  }
};

function sortById(previousTask, currentTask) {
  return previousTask.id - currentTask.id
}