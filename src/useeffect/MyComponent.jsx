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
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);
    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTINER ADDED");

        return() => {
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTINER REMOVED");
            
        }
        
    },[]);

    useEffect(() => {
        document.title=`size: ${width} x ${height}`
    },[width,height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return ( <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </> );
}
 
export default MyComponent;