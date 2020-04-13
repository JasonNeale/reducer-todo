// External imports
import React from 'react'


function TDForm({ titleText, setTitleText, addTodo }) {

    return (
        <div className="form-div">
            <form onSubmit={e => {
                console.log("titleText: ", titleText)
                e.preventDefault()
                addTodo(titleText)
                setTitleText("")
            }}>
                <input type="text" name="task" id="task" placeholder="Enter New Task" value={titleText} onChange={e => setTitleText(e.target.value)} required />
                <button type="submit">Add Todo</button> <button>Cancel</button>
            </form>
        </div>
    )
}

export default TDForm