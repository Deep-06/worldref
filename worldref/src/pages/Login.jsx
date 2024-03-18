import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { login } from '../redux/Authentication/action.js'; 
import { set } from 'mongoose';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({ email, password });
        setEmail('');
        setPassword('');
    };
    const handleLogin = ({ email, password }) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
             dispatch(login());
             navigate('/home');
            alert('Login Success')
            
            // <Navigate to="/home"  />
        } else if (!user || user.email !== email) {
            alert('Please Signup')
        }
        else {
            alert("Wrong Credential")
        }
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', padding: '30px' }}>
            <div style={{ width: '40%', backgroundColor: 'lightblue', height: '300px', borderRadius: '10px' }}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}
                    style={{
                        display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px',
                        paddingLeft: '40px', paddingRight: '40px'
                    }}>
                    <label style={{ textAlign: 'left' }}>Enter email</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                        style={{ height: '25px' }} />
                    <label style={{ textAlign: 'left' }}>Enter Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                        style={{ height: '25px' }} />
                    <button type="submit" style={{
                        height: '30px', width: '20%', alignSelf: 'center',
                        borderRadius: '10px'
                    }}>Login</button>
                </form>
            </div>
        </div>
    )
}
