import { useState } from 'react'
import React from 'react'

const ColorPicker = () => {

    const[color,setColor]=useState('#ffffff')

    function handleColorChange(e){
        setColor(e.target.value)
    }

  return (
    <div className='colorPickerContainer'>
        <h1>Color Picker</h1>
        <div className="colorDisplay" style={{backgroundColor:color}} >
            <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type='color' value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker