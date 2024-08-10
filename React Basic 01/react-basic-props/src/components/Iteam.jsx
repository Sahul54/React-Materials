import React from 'react'

const Iteam = (props) => {
    // const name = "Rahul Kumar";
    const name = props.name;

  return (
    <div>
        <h2>{name}</h2>
    </div>
  )
}

export default Iteam