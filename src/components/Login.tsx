import React from 'react'
import './Login.css';

export default function Login() {
    return (
        <form className='login-form'>
            <header className='login-form-header'>
                AnimalPulse - API
            </header>
            <body className='login-form-body'>
                <label> Username: </label> <input type="text" name="username"/> <br/>
                <label> Password: </label> <input type="password" name="password"/> <br/>
                <button type="button">Sign in</button>
            </body>
        </form>
    )
}