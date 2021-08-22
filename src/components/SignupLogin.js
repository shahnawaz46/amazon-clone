import React, { useState } from 'react';
import './SignupLogin.css';
import { Firebase } from '../firebase/Firebase';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignupLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()

    const history = useHistory()

    const formData = (e) => {
        e.preventDefault()
    }

    const loginUser = () => {
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
            }).catch((error) => {
                alert(error)
            })
    }

    const signpUser = () => {
        Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
            }).catch((error) => {
                alert(error)
            })
    }

    return (
        <div className="signup-login-div">
            <Link to="/"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="signup-amazon-logo" alt="error" /></Link>

            <div className="signup-login-form">
                <h1>Sign-In/Sign-Up</h1>

                <form onSubmit={formData} className="form">
                    <span>Email</span>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                    <span>Password</span>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                    <button onClick={loginUser}>Login</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button onClick={signpUser}>Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default SignupLogin;
