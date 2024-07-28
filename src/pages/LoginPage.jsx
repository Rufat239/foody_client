import React , { useState } from 'react'
import '../style/loginPage.css'
import SubNavLogin from '../components/Login/SubNavLogin';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

function LoginPage() {
   const[currentForm, setCurrentForm] = useState('login');

   const toggleForm = (formName) => {
     setCurrentForm(formName);
   }
  return (
    <div>
        <SubNavLogin/>

        {
        currentForm ==="login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
        }

    </div>
  )
}

export default LoginPage