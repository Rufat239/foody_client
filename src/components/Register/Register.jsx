import React, { useState } from 'react';
import '../../style/register.css';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import image from '../../assets/loginimages/Register.png'
import { NavLink, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  
  const toggle = () => {
    setShowPass(!showPass)

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, username, email, password: pass };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/loginPage');
  };




  return (
    <div className='register-form-container'>
      <div className='register-image'>
        <img src={image}></img>
      </div>
      <div className='register-form'>
        <div className='register-buttons'>
          <NavLink to='/loginPage'><button className='login-box-btnSwitch'>Login</button></NavLink>
          <NavLink to='/registerPage'><button className='register-box-btnswitch'>Register</button></NavLink>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='fullName-container-register'>
            <label htmlFor='name'>Full Name</label>
            <div className='fullName-input-register'>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='Full name'
                id='name'
                name='name'
              />
            </div>
          </div>
          <div className='username-container-register'>
            <label htmlFor='username'>Username</label>
            <div className='username-input-register'>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type='text'
                placeholder='Write Your Username'
                id='username'
                name='username'
              />
            </div>
          </div>
          <div className='email-container-register'>
            <label htmlFor='email'>Email</label>
            <div className='email-input-register'>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='youremail@gmail.com'
                id='email'
                name='email'
              />
            </div>
          </div>
          <div className='password-container-register'>
            <label htmlFor="password">Password</label>
            <div className='register-password-input'>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type={showPass ? "text" : "password"}
                placeholder="********"
                id="password"
                name="password"
              />
              <div className='register-loginEye'>
              {
                (showPass === false) ? <FaRegEye onClick={toggle}  className='loginEye-icons'/> :
                  <FaRegEyeSlash onClick={toggle} className='loginEye-icons'/>
              }

            </div>
            </div>
           
          </div>
          <button type='submit' className='register-submit-button'>Register</button>
        </form>
      </div>

    </div>
  );
}

export default Register