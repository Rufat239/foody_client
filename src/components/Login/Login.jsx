import React, { useState } from 'react';
import '../../style/login.css';
import Eye from '../../assets/loginimages/eye.svg';
import image from '../../assets/loginimages/Login.png'
import { Link } from 'react-router-dom';

function Login(props) {
    const[username, setUsername]= useState('');
    const[pass, setPass]= useState('');

    
    const [showPass,setShowPass] = useState(false);
  

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(username);
    };


    
return (
    <div className='login-form-container'>
        <div className='login-image'>
            <img src={image}></img>
        </div>
        <div className='login-form'>
           <button className='login-btnSwitch'>Login</button>
           <button className='register-btnswitch' onClick={() => props.onFormSwitch('register')}>Register</button>
           <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="username">Username</label>
               <div>
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
            <div className='logInput-box'>
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
                  <img className='loginEye' src={Eye} onClick={() => setShowPass(!showPass)}/>
                </div>
            </div>
            <button type="submit">Log in</button>
            </form>
        </div>
              
    </div>
  );


  
}

export default Login