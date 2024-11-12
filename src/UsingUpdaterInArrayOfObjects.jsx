import { useState } from "react";



import React from 'react'

function UsingUpdaterInArrayOfObjects(){


    const [cars,setCars]=useState([])
    const [carYear,setCarYear]=useState(new Date().getFullYear())
    const [carMake,setCarMake]=useState('')
    const [carModel,setCarModel]=useState('')

    function handleAddCar(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};

        setCars(cars => [...cars, newCar]);
        
    }

    function handleRemoveCar(index){
        
    }

    function handleYearChange(event){
        setCarYear(event.target.value)
    }

    function handleMakeChange(event){
        setCarMake(event.target.value)
    }

    function handleModelChange(event){
        setCarModel(event.target.value)
    }



  return (
    <div>
        <h2>List of Objects</h2>
        <ul>
            {cars.map((car,index)=>{
                return <li key={index}>
                            {car.year}{car.make}{car.model}
                        </li>
            })}
            
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} /> <br /><br />
        <input type="text" value={carMake} onChange={handleMakeChange} /> <br /><br />
        <input type="text" value={carModel} onChange={handleModelChange} /><br /><br />
        <button onClick={handleAddCar}>Add Car</button>

    </div>
  )
}

export default UsingUpdaterInArrayOfObjects