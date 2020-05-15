import React from 'react'

const Todo = ({ todo, updateTodo, deleteTodo }) => {
    console.log("Todo todos",todo);
    console.log("Todo updateTodo",updateTodo);
    console.log("Todo deleteTodo",deleteTodo);
    return(
        <li>
            <input
            type='checkbox'
            checked={todo.checked}
            onChange={() => {
                updateTodo(todo)
            }}
            />
            <button onClick={() => {
                deleteTodo(todo)
                }}>
                X
            </button>

            { todo.text }
        </li>
    )
}

export default Todo