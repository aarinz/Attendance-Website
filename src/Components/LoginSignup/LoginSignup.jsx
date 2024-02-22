import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (username === 'your_username' && password === 'your_password') {
      console.log('Login successful');
      window.location.href = '/home';
    } else {
      console.error('Login failed: Invalid credentials');
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={user_icon} alt='' />
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='input'>
          <img src={password_icon} alt='' />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className='submit-container'>
        <div className="submit" onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
