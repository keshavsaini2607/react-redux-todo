import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from './firebase'
import { AuthContext } from './Auth'

function Login({ history }) {

    const handleLogin = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
            history.push("/create/todo")
        }catch (error) {
            alert(error)
        }
    }, [history])

    const {currentUser} = useContext(AuthContext)

    if(currentUser) 
    {
        return <Redirect to="/create/todo" />
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default withRouter(Login)
