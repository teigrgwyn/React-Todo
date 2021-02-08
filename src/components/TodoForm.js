import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        name = 'formEntry'
        value = {props.todoEntry}
        onChange = {props.onInputChange}
        placeholder = '...todo'
      />
      <input type = 'submit'
        value = 'Add'
      />
    </form>
  )
}

export default TodoForm;