import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from './firebase'
import { AuthContext } from './Auth'
import './Style.css'
import { Link } from 'react-router-dom'

function Login({ history }) {

    const handleLogin = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
            history.push("/")
        }catch (error) {
            alert(error)
        }
    }, [history])

    const {currentUser} = useContext(AuthContext)

    if(currentUser) 
    {
        return <Redirect to="/" />
    }
    

    return (
        <div className="login">
            <h1>Login page</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <br/>
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <br/>
                    <input name="password" type="password" placeholder="Password" />
                </label>

                <button type="submit">Log In</button>
                <Link to="/signup">
                    <p className="p">Dont have an account? signup</p>
                </Link>
            </form>
        </div>
    )
}

export default withRouter(Login)
