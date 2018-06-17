import React from 'react';
import is from 'prop-types';
import './TodoInput.scss';

export default class TodoInput extends React.Component {
  state = {
    inputValue: '',
  }

  render() {
    return <input
      type = "text"
      value = { this.state.inputValue }
      onChange = { this.handleSearchInput }
      placeholder = "Add Task"
      className = 'TaskInput'
      onKeyDown = { ev => this.handleKeyPressed(ev) }
    />;
  }

  handleSearchInput = (ev) => {
    this.setState({
      inputValue: ev.target.value,
    });
  }

  handleKeyPressed = (ev) => {
    const ENTER_KEY = 13;

    if (ev.keyCode !== ENTER_KEY) {
      return;
    }

    ev.preventDefault();

    const val = this.state.inputValue;

    if (val) {
      this.props.addTodo(val);

      this.setState({
        inputValue: '',
      });
    }
  }
}


TodoInput.propTypes = {
  addTodo: is.func,
};
