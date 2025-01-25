import React,{useState} from "react";
function MyComponent() {
    const [cars,setCar]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");

    function handleAddCar(){

        const newCar={ year: carYear, 
                       make: carMake, 
                       model: carModel};
        setCar(c => [...c,newCar]);

       

    }

    function handleRemoveAddCar(index){
        
        setCar(cars.filter((_,i) => i != index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value)   
    }

    function handleModelChange(event){
        setCarModel(event.target.value)
    }

    return (<div>
        <h2>List of Car objects</h2>
        <ul>
        {cars.map((car,index) => 
           <li key={index} onClick={() => handleRemoveAddCar(index)}>{car.year} {car.make} {car.model}</li> ) }

        </ul>
        <input type="number" value={carYear} 
        onChange={handleYearChange} /> <br />
        <input type="text" value={carMake} placeholder="Enter car make"
         onChange={handleMakeChange} /> <br />
        <input type="text" value={carModel} placeholder="Enter model make"
         onChange={handleModelChange} /> <br />
        <button onClick={handleAddCar}>Add Car</button>

    </div>);
}
 
export default MyComponent;