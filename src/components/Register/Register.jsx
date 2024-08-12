
import React, { useState } from 'react';
import '../../style/register.css';
import image from '../../assets/loginimages/Register.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useFormik } from 'formik';
import { registerSchema } from '../Schema/schema';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


function Register() {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const toggle = () => {
    setShowPass(!showPass)
  }
  const { values, touched, handleBlur, handleSubmit, handleChange, resetForm, errors, isSubmitting } = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: ""
    },
    validationSchema: registerSchema,
    onSubmit,
  })
  function onSubmit(values) {
    setTimeout(() => {
      console.log(values);
      const newUser = { fullname: values.fullname, username: values.username, email: values.email, password: values.password };
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existUsers = users.some(user => user.email === newUser.email || user.username === newUser.username);
      if (existUsers) {
        setError('This account already exists!');
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
          resetForm();
        }, 2000);
        return;
      }
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/loginPage');
      resetForm();
    }, 2000);
  }
  const handleClose = (x) => {
    if (x === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className='register-form-container'>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }} style={{ top: "18vh" }}>
        <MuiAlert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </MuiAlert>
      </Snackbar>
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
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder='Full name'
                id='fullname'
                name='fullname'
                className={
                  errors.fullname && touched.fullname
                    ? "register-error-input"
                    : !errors.fullname && touched.fullname
                      ? "register-success-input"
                      : ""
                }
              />
            </div>
            {errors.fullname && (<p className='fullname-error-register'>{errors.fullname}</p>)}
          </div>
          <div className='username-container-register'>
            <label htmlFor='username'>Username</label>
            <div className='username-input-register'>
              <input
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                placeholder='Write Your Username'
                id='username'
                name='username'
                className={
                  errors.username && touched.username
                    ? "register-error-input"
                    : !errors.username && touched.username
                      ? "register-success-input"
                      : ""
                }
              />
            </div>
            {errors.username && (<p className='username-error-register'>{errors.username}</p>)}
          </div>
          <div className='email-container-register'>
            <label htmlFor='email'>Email</label>
            <div className='email-input-register'>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type='email'
                placeholder='youremail@gmail.com'
                id='email'
                name='email'
                className={
                  errors.email && touched.email
                    ? "register-error-input"
                    : !errors.email && touched.email
                      ? "register-success-input"
                      : ""
                }
              />
            </div>
            {errors.email && (<p className='email-error-register'>{errors.email}</p>)}
          </div>
          <div className='password-container-register'>
            <label htmlFor="password">Password</label>
            <div className='register-password-input'>
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showPass ? "text" : "password"}
                placeholder="********"
                id="password"
                name="password"
                className={
                  errors.password && touched.password
                    ? "register-error-input"
                    : !errors.password && touched.password
                      ? "register-success-input"
                      : ""
                }
              />
                 <div className='register-loginEye'>
              {
                (showPass === false) ? <FaRegEye onClick={toggle}  className='loginEye-icons'/> :
                  <FaRegEyeSlash onClick={toggle} className='loginEye-icons'/>
              }
            </div>
            </div>
            {errors.password && (<p className='password-error-register'>{errors.password}</p>)}
          </div>
          <input className='register-submit-button' type="submit" value={'Register'} disabled={isSubmitting} />
        </form>
      </div>
    </div>
  );
}
export default Register