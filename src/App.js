import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      todoEntry: ''
    }
  }

  onInputChange = e => {
    this.setState({ todoEntry: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    this.state.todoList.push(this.state.todoEntry);
    this.setState({ todoEntry: '' });
  }

  render() {
    return (
      <div id='app'>
        <h1>Todo List: MVP</h1>
        <TodoList todoList={this.state.todoList} />
        <TodoForm todoEntry={this.state.todoEntry} onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
