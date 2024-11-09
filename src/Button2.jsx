

//working with event parameters

import React from 'react'

const handleClick =(e)=>{
    e.target.textContent = 'OUCH 😮2'
}

const Button2 = () => {
  return (
    <div>
        <button onClick={(e)=>handleClick(e)}>i handle events</button>
    </div>
  )
}

export default Button2