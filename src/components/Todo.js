import React from 'react';

const Todo = props => {
  return (
    <div onClick={() => props.onClickTask(props.todo)}>
      {props.todo.task}
    </div>
  )
}

export default Todo;