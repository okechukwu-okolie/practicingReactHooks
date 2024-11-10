

import { useState } from 'react'
import React from 'react'

const OnChange = () => {
    const [name,setName]=useState('')//for string input
    const [quantity, setQuantity] = useState()// for number input
    const [textArea, setTextArea] = useState('')//  for text area input
    const [select,setSelect]=useState('')//for selecting options
    const [radioButton, setRadioButton]=useState('')

    function displayName(e){
        setName(e.target.value)
    }
    function quantityChange(e){
        setQuantity(e.target.value)
    }
    const textContent = (e)=>{
      setTextArea(e.target.value)
    }
    const selectArea = (e)=>{
      setSelect(e.target.value)
    }
    const Radio =(e)=>{
      setRadioButton(e.target.value)
    }


  return (
    <div>
        <input type="text" onChange={displayName} value={name} />
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={quantityChange} />
        <p>qunatity change: {quantity}</p>

         <textArea value={textArea} onChange={textContent} placeholder='enter delivery instructions......' />
         <p>{textArea}</p>

         <select value={select} onChange={selectArea} >
              <option value="">Select an option</option>
              <option value="visa">Visa</option>
              <option value="mastercard">Mastercard</option>
              <option value="giftcard">Giftcard</option>
        </select>
        <p>Payment: {select}</p>

        <label htmlFor="">
          pick up
          <input type="radio" value='action' checked={radioButton === 'action'} />
        </label>
    </div>
  )
}

export default OnChange