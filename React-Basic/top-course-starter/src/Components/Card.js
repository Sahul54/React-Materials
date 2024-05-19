
import React from 'react'
import { FcLike } from "react-icons/fc";

const Card = ({course}) => {
  return (
    <div>
        <div>
            <img src ={course.image.url}></img>
        </div>
        <div>
            <button>
               <FcLike fontSize= "1.75rem" />
            </button>


            {/* Description bacha hi hai */}

            
        </div>
    </div>
  )
}

export default Card