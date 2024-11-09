

//WORKING WTH USE STATE AND ONCLICK FUNCTIONS FOR EVENT LISTENERS.
import { useState } from 'react'

import React from 'react'

const MyComponent = () => {
    const [name,setName]=useState('Null')//working with strings
    const [age,setAge]=useState(0)//working with numbers

    const [isEmployed,setIsEmployed]=useState(true);//working with boolean

    const nameChange = (name)=>{setName(name)}
    const increaseAge=()=>{setAge(age+1)}
    const decreaseAge=()=>{setAge(age-1)}
    const toggleState=()=>{ setIsEmployed(!isEmployed)}
    


  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={()=>nameChange('Sammy')}>click for name change</button>

        <p>Age: {age}</p>
        <button onClick={increaseAge}>+</button>
        <button onClick={decreaseAge}>-</button>

        <p>Employment <br />Status: <br /> <b>{isEmployed? 'TRUE':'FALSE'}</b></p>
        <button onClick={toggleState}>Employment <br /> toggler</button>


    </div>
  )
}

export default MyComponent