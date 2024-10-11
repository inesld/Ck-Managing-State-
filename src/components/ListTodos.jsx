import React from 'react'
import Todo from './Todo'

const ListTodos = ({todos,deleteTodo,doneTodo ,editTodo}) => {
  return (
    <div>
      
{
  todos.map(todo=>
  (<Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} doneTodo={doneTodo} editTodo={editTodo} />))
}

    </div>
  )
}

export default ListTodos