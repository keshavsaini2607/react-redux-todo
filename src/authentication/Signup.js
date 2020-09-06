import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import app from './firebase'

function Signup({ history }) {

    const handleSignup = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value )
            history.push("/")
        }catch (error) {
            alert(error)
        }
    }, [history])

    return (
        <div className="signup">
            <h1>SignUp</h1>
            <form onSubmit={handleSignup}>
                <label>
                    Email
                    <br/>
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <br/>
                    <input type="password" name="password" placeholder="Password" />
                </label>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(Signup)
