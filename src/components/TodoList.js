import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    props.todoList.map((todo, index) => (
      <Todo id={index} todo={todo} />
    ))
  )
}

export default TodoList;