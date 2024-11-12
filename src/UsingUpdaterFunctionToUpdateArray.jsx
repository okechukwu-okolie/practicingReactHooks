import { useState } from 'react'


import React from 'react'

const UsingUpdaterFunctionToUpdateArray = () => {

    const[food,setFood]=useState(['apple','banana','orange'])

    function handleAddFood(){
        const newfood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value=''

        setFood(f=>[...f,newfood])
    }

    function handleRemoveFood(index){
        setFood(food.filter((element,i)=>i !==index))
    }
  return (
    <div>
        <p>click on item to remove</p>
        {food.map((foods,index)=>{
            return (<ul>
                
                <li key={index} onClick={()=>handleRemoveFood(index)}>{foods}</li>
            </ul>)
        })
        }
        <input type="text" id='foodInput' placeholder='Enter food name here' />
        <button onClick={handleAddFood}>Add food</button>
        


    </div>
  )
}

export default UsingUpdaterFunctionToUpdateArray