import React, { useState } from 'react';
import { FaEyeSlash, IoEyeSharp  } from "react-icons/fa";
import { Link } from 'react-router-dom';


const LoginForm = () => {
    const [formData, setFormData] = useState( {
        email: "", 
        password: ""
    })

const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) =>({
            ...prevData,
            [event.target.name]: event.target.value
        }) 
      )
    }
  return (
    <div>
        <form>
            <lable>
                <p>Email Address<sup>*</sup></p>
            <input
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Email id'
            name='email'
            
            ></input>
            </lable>

            <lable>
                <p>Password<sup>*</sup></p>
            <input
            required
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name='password'
            ></input>
            <span onClick={() => setShowPassword((prev) => (!prev))}>
                {showPassword ? (<IoEyeSharp />) : (<FaEyeSlash />)}
            </span>

            <Link to='#'>
                <p>Forget Password</p>
            </Link>
            </lable>

            <button>Sign In</button>
        </form>
    </div>
  )
}

export default LoginForm;