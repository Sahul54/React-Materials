import React from 'react';
import Template from '../Components/Template';
import loginImg from '../assets/login.png'

const Login = (setIsLoggedIn) => {
  return (
    <div className='flex justify-center item-center'>
    <Template
    title="Welcome Back"
    description1="Build skills for today, tomorrow, and beyond."
    description2="Education to future-proof your career."
    image={loginImg}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
    />    
    </div>
  )
}

export default Login;