import React, { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "", 
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <p>Email Address<sup>*</sup></p>
          <input
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Email id'
            name='email'
          />
        </label>

        <label>
          <p>Password<sup>*</sup></p>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name='password'
          />
          <span onClick={() => setShowPassword((prev) => (!prev))}>
            {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
          </span>
        </label>

        <Link to='#'>
          <p>Forget Password</p>
        </Link>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
