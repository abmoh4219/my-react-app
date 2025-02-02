/*
    useState()= Re-renders the component when the state
                value changes.
    
    useRef()="use-Reference" does not cause re-renders when value changes.
              when you want a component to "remember" some information,
              but you don't want that information to trigger new renders.

              1.Accessing/Interactiong with DOM elements
              2.Handling Focus,Animation and Transitions
              3.Managing Timer and Intervals

 */
import React,{useState,useEffect,useRef} from "react";
function MyComponent() {

    const ref=useRef("pizza");
    
    useEffect(() =>{
        console.log('COMPONENT RENDERED');
        
    })

    function handleClick(){
        ref.current++;
        console.log(ref);
        
    }

    return ( <div>
        <button onClick={handleClick}>Click me!</button>
    </div>);
}
 
export default MyComponent;