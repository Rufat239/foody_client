import React, { useState, useEffect } from 'react';
import '../../style/login.css';
import Eye from '../../assets/loginimages/eye.svg';
import image from '../../assets/loginimages/Login.png'
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/profilePage');
    }
  }, [navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === pass);
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/profilePage');
    } else {
      setError('Invalid username or password');
    }
  };




  return (
    <div className='login-form-container'>
      <div className='login-image'>
        <img src={image}></img>
      </div>
      <div className='login-form'>
        <div className='login-buttons'>
          <NavLink to='/loginPage' ><button className='login-btnSwitch'>Login</button></NavLink>
          <NavLink to='/registerPage'><button className='register-btnswitch'>Register</button></NavLink>
        </div>
        <form onSubmit={handleSubmit}>
        {error && <p className='error-message'>{error}</p>}
          <div className='username-container-login'>
            <label htmlFor="username">Username</label>
            <div className='login-username-input'>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Write Your Username"
                id="username"
                name="username"
              />
            </div>
          </div>
          <div className='password-container-login'>
            <label htmlFor="password">Password</label>
            <div className='login-password-input'>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type={showPass ? "text" : "password"}
                placeholder="********"
                id="password"
                name="password"
              />
              <div className='login-eye-box'>
                <img className='loginEye' src={Eye} onClick={() => setShowPass(!showPass)} />
              </div>

            </div>
          </div>
           <button type="submit" className='login-submit-button'>Log in</button>
         
        </form>
      </div>

    </div>
  );



}

export default Login