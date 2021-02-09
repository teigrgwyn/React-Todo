import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      task: ''
    }
  }

  onInputChange = e => {
    this.setState({ task: e.target.value });
  }

  onClickTask = (clickedTask) => {
    console.log(clickedTask);
    clickedTask.toggleClass('done');

    this.state.todoList.forEach(todo => {
      if (todo.id === clickedTask.id) {
        todo.completed = !todo.completed;
      }
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.state.todoList.push({
      task: this.state.task,
      id: Date.now(),
      completed: false
    });
    this.setState({ task: '' }); // doesn't trigger refresh?
  }

  onClickClear = e => {
    this.setState({ todoList: [] });
  }

  render() {
    return (
      <div id='app'>
        <h1>Todo List: MVP</h1>
        <TodoList todoList={this.state.todoList} onClickTask={this.onClickTask} />
        <TodoForm task={this.state.task} onInputChange={this.onInputChange} onSubmit={this.onSubmit} onClickClear={this.onClickClear} />
      </div>
    );
  }
}

export default App;
