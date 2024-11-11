//updater function is a function passed as an arguement to setState() usually as i.e. setYear(arrow function). Allows for safe updates based on the previous state used with multple states updates and asynchronous functions. Its good practice to use updater functions.





import { useState } from 'react'

import React from 'react'

const Updater = () => {

    const [count,setCount] = useState(0)
     //takes the pending state to calculate the NEXT state
        //react puts your updater function in a queue (waiting in line)
        //during the next render, it will call them in the same order.
    function increment(){
       setCount(c=>c+1)//its good practice to use the first letter of the current state to define the updater function.
       setCount(c=>c+1)

       function decrement(){
        setCount(c=>c-1)
        setCount(c=>c-1)
       }

       function reset(){
        setCount(0) //in this situation an updater function wont be neccessary.
       }
    }
  return (
    <div>

    </div>
  )
}

export default Updater