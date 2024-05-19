import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = (title, desc1, desc2, image, formtype, setIsLoggIn) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formtype === "Signup" ? 
            (<SignupForm/>) : (<LoginForm/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>Sign in with Goggle</button>
        </div>

        <div>
            <img src={frameImage} alt= "frame" width={558} height={584} loading='lazy'></img>
            <img src={image} alt= "student" width={358} height={584} loading='lazy'></img>

        </div>
    </div>
  )
}

export default Template