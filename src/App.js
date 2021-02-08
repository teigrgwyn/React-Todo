import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test1: '',
      test2: ''
    }
  }

  render() {
    return (
      <div id='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
