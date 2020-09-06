import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'
import './App.css'
import firebase from 'firebase'

function App() {


    return (
        <div className="app">
            <div className="header">
                <img 
                className="header__image"
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="header_image" />

                <h1>Your React-Redux Todo App</h1>

            </div>
            <Footer />
            <AddTodo />
            <VisibleTodoList />
            <button className="home__logout" onClick={() => firebase.auth().signOut() } >Logout</button>
        </div>
    )
}

export default App
