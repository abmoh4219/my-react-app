/*
Key Points for Updating Objects in State
State is immutable:

You should never modify the state object directly.
Instead, create a new object and update the state with it.
Spread operator:

Use the spread operator (...) to copy the existing properties of the object while updating specific fields.


*/

import React, {useState} from "react";

function UpdateCar()  {
    const [car,setCar]=useState({
        year:2025,
        make:"Ford",
        model:"Endeavour"
    });

    const handleYearChange= (event) =>{

        setCar(c => ({...c,year:event.target.value}));
    }
    const handleMakeChange= (event) =>{

        setCar(c => ({...c,make:event.target.value})); 
    }
    const handleModelChange= (event) =>{

        setCar(c => ({...c,model:event.target.value}));
    }

    return (  
        <div>
            <p>Your favourite car is : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} /> <br />
            <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
            <input type="text" value={car.model} onChange={handleModelChange} />
        </div>
    );
}
 
export default UpdateCar;