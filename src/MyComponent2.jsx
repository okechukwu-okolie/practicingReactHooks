

import { useState } from 'react'
import React from 'react'

const MyComponent2 = () => {
    const [name,setName]=useState('')//for string
    const [quantity, setQuantity] = useState()

    function displayName(e){
        setName(e.target.value)
    }
    function quantityChange(e){
        setQuantity(e.target.value)
    }



  return (
    <div>
        <input type="text" onChange={displayName} value={name} />
        <p>Name: {name}</p>

        <input type='number' value={quantity} onChange={quantityChange} />
        <p>qunatity change: {quantity}</p>
    </div>
  )
}

export default MyComponent2