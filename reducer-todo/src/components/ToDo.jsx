// External imports
import React from 'react'

// Local imports
import TDForm from './TDForm'


function ToDo({ titleText, setTitleText, tdList, addTodo, toggleTodo, clearCompleted }) {

    return (
        <div>
            <TDForm titleText={titleText} setTitleText={setTitleText} addTodo={addTodo} />
            <ul>
                {tdList.todos.map(item => (
                    <li
                        id={item.id}
                        key={item.id}
                        className={`${item.completed ? "completed" : ""}`}
                        onClick={() => toggleTodo(item.id)}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
            <button onClick={() => clearCompleted()}>Clear Completed</button>
        </div>
    )
}

export default ToDo