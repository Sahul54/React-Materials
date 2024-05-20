import React, { useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        CreatePassword:"",
        confirmPassword:""
    })

    function changeHandler(event){
        setFormData( (prevData) =>({
            ...prevData,
            [event.target.name]: event.target.value
        }) 
      )
    }

    const [showPassword, setShowPassword] = useState(false);


  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form>
            <div>
            <label>
                <p>First Name <sup>*</sup></p>
                <input
                required
                type='text'
                name='firstName'
                placeholder='First Name'
                onChange={changeHandler}
                value={formData.firstName}

                ></input>
            </label>

            <label>
                <p>Last Name <sup>*</sup></p>
                <input
                required
                type='text'
                name='lastName'
                placeholder='Last Name'
                onChange={changeHandler}
                value={formData.lastName}

                ></input>
            </label>
            </div>

            <label>
                <p>Email id <sup>*</sup></p>
                <input
                required
                type='email'
                name='email'
                placeholder='enter Email id'
                onChange={changeHandler}
                value={formData.email}

                ></input>
            </label>
   
            <div>
            <label>
                <p>Create Password <sup>*</sup></p>
                <input
                required
                type={showPassword ?("text") : ("password")}
                name='createPassword'
                placeholder='Create Password'
                onChange={changeHandler}
                value={formData.CreatePassword}

                ></input>
                <span onClick={() => setShowPassword((prev) => (!prev))}>
                   {showPassword ? (<IoEyeSharp />) : (<FaEyeSlash />)}
                </span>
            </label>

            <label>
                <p>Confirm Password <sup>*</sup></p>
                <input
                required
                type={showPassword ?("text") : ("password")}
                name='confirmPassword'
                placeholder='Enter Confirm Password'
                onChange={changeHandler}
                value={formData.confirmPassword}

                ></input>
                <span onClick={() => setShowPassword((prev) => (!prev))}>
                     {showPassword ? (<IoEyeSharp />) : (<FaEyeSlash />)}
                </span>
            </label>
            </div>
            <button>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm;