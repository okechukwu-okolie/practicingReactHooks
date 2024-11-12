//UPDATING THE STATE OF AN OBJECT USING REACT

import { useState } from "react"

const UsingUpdaterFunctionToUpdateObject = ()=>{
      const [car,setCar] = useState({year: 2024,
                                    make: "Toyota",
                                    model: "Camry"  
      })

      function handleYearChange(e){
        setCar(car=>({...car,year:e.target.value}))
      }
      function handleMakeChange(e){
        setCar(car=>({...car,make:e.target.value}))
      }
      function handleModelChange(e){
        setCar(car=>({...car,model:e.target.value}))
      }

    return( <div>
        <p>
            your favourite car is: {car.year} {car.make} {car.model}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br />
    </div>)
}
export default UsingUpdaterFunctionToUpdateObject