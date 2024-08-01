import React , {useState} from 'react';
import '../../style/register.css';
import Eye from '../../assets/loginimages/eye.svg';
import image from '../../assets/loginimages/Register.png'

function Register(props) {
  const[name, setName]= useState('');
  const[username, setUsername]= useState('');
  const[email, setEmail]= useState('');
  const[pass, setPass]= useState('');

  
  const [showPass,setShowPass] = useState(false);
  


  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(username);
}




return (
    <div className='register-form-container'>
      <div>
        <img src={image}></img>
      </div>
      <div>
        <button >Login</button>
        <button>Register</button>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Full name'
            id='name'
            name='name'
          />
          <label htmlFor='username'>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Write Your Username'
            id='username'
            name='username'
          />
          <label htmlFor='email'>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='youremail@gmail.com'
            id='email'
            name='email'
          />
           <div className='register-input-box'>
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
                    <img className='loginEye' src={Eye} onClick={() => setShowPass(!showPass)}/>
                </div>
            </div>
        <button type='submit'>Register</button>
        </form>
      </div>
        
    </div>
);
}

export default Register