import React, {useState} from "react";
function Counter (){
    const [count,setCount]=useState(0);
    
    const increament=() =>{
        setCount(count+1);
    }

    const decreament=() => {
        setCount(count-1);
    }

    const reset=() => {
        setCount(0);
    }

    return ( 
        <>
         <div>
            <h1>Count: {count}</h1>
            <button onClick={increament}>Increment</button>
            <button onClick={decreament}>Decrement</button>
            <button onClick={reset}>reset</button>
         </div>
        </>
     );
}
 
export default Counter;