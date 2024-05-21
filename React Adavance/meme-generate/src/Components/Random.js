import React, { useState } from 'react'

const Random = () => {

    const [gif, setgif] = useState('');

    function clickHandler() {

    }
  return (
    <div className='w-1/2 h-[450px] bg-green-500 rounded-lg mt-12 gap-y-5'>
        <h1 className='place-items-center'>Random Gif</h1>
        <img src={gif} width="450"></img>
        <button onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random