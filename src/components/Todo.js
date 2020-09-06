import React from 'react'
import './App.css'

function Todo({ onClick, completed, text }) {
    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
            className="todo__list"
        >
            {text}
        </li>
    )
}

export default Todo
