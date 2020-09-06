import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../components/App.css'

function AddTodo({ dispatch }) {
    let input

    return (
        <div className="add__todo">
            <form
                onSubmit={
                    e => {
                        e.preventDefault()
                        if(!input.value.trim())
                        {
                            return 
                        }
                        else {
                            dispatch(addTodo(input.value))
                            input.value=''
                        }
                    } 
                }
            >
                <input type="text" ref={element => (input = element)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
