import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, updateTodo, deleteTodo }) => {

    console.log("todos",todos);
    console.log("updateTodo",updateTodo);
    console.log("deleteTodo",deleteTodo);
    
  return(
    <ul>
        { todos.map(todo => {

            return (
        <Todo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}/> 
            )
        }
        )}
    </ul>
  )
}


export default TodoList