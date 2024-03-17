import React from 'react'
import { useState } from 'react';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ username, email, password });
  };
  const handleRegister = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup success')
    console.log('User registered successfully:', user);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margib: '20px', padding: '30px' }}>
      <div style={{ width: '40%', backgroundColor: 'lightblue', height: '400px', borderRadius: '10px' }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} style={{
          display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px',
          paddingLeft: '40px', paddingRight: '40px'
        }}>
          <label style={{ textAlign: 'left' }}>Enter Username</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
            style={{ height: '25px' }}
          />
          <label style={{ textAlign: 'left' }}>Enter Email</label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            style={{ height: '25px' }} />
          <label style={{ textAlign: 'left' }}>Enter Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            style={{ height: '25px' }} />
          <button type="submit" style={{
            height: '30px', width: '20%', alignSelf: 'center',
            borderRadius: '10px'
          }}>Register</button>
        </form>
      </div>
    </div>
  )
}
