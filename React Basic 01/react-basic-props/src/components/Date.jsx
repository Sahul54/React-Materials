import React from 'react'

const Date = (props) => {
    // let date = '22 dec 2000';

    const date = props.date;
  return (
    <div>
        <span>{date}</span>
    </div>
  )
}

export default Date