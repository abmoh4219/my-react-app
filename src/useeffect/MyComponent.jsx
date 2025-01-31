/*
      useEffect= React hook that tells React do some code when(pick one):
                 this component re-renders
                 this component mounts
                 the state of a value

      useEffect(function,[depemdemcies])
      useEffect is a hook that allows you to perform side effects in functional components. Side effects can include things like:

       Fetching data from an API.

       Updating the DOM.

       Setting up subscriptions or timers.

       Cleaning up resources when the component unmounts

       //BASIC SYNTAX
             useEffect(() => {
             // Side effect logic here

                return () => {
                     // Cleanup logic (optional)
                };
             }, [dependencies]);
*/ 
import React,{useState,useEffect} from "react";
function  MyComponent () {
    const [count,setCount]=useState(0);

    function addCount(){
        setCount(c => count+1);
    }

    return ( <>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
    </> );
}
 
export default MyComponent;