import React, { useState } from 'react';
import '../../style/login.css';
import Eye from '../../assets/loginimages/eye.svg'

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
        <button>Login</button>
        <button onClick={() => props.onFormSwitch('register')}>Register</button>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                type="text" 
                placeholder="Write Your Username" 
                id="username" 
                name="username"
            />
            <div className='input-box'>
                <label htmlFor="password">Password</label>
                <div className='password-input'>
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
  );


  
}

export default Login