// External imports
import React, { useState, useReducer } from 'react'

// Asset imports
import './App.css'

// Local imports
import ToDo from './components/ToDo'
import { reducer, initialState } from './reducers/reducer'



function App() {

    const [ tdList , dispatch] = useReducer(reducer, initialState)
    const [ titleText, setTitleText ] = useState("")

    const addTodo = item => {
        dispatch({ type: "ADD_ITEM", payload: item });
    }
    
    const toggleTodo = id => {
        dispatch({ type: "TOGGLE_COMPLETE", payload: id });
    }
    
    const clearCompleted = () => {
        dispatch({ type: "CLEAR_COMPLETE"});
    }

    return (
        <div className="App page-wrapper">
            <ToDo titleText={titleText} setTitleText={setTitleText} tdList={tdList} addTodo={addTodo} toggleTodo={toggleTodo} clearCompleted={clearCompleted} />
        </div>
    )
}

export default App