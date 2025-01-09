/* 
     What is useState?
     useState is a React Hook that lets you add state to functional components.
     State is data that changes over time, like a counter, form input, or toggle.
    How to Use useState?
    Import useState:
      import React, { useState } from "react";
     Declare State: Use the useState function to declare a state variable and its updater function:
   const [state, setState] = useState(initialValue);
   state: The current value of the state.
   setState: A function to update the state.
   initialValue: The starting value of the state (e.g., 0, "", false).
*/

import React, {useState} from "react";
import styles from "./Counter.module.css";
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
         <div className={styles['count-container']}>
            <h1 className={styles['count-display']}>{count}</h1>
            <button className={styles['count-button']} onClick={increament}>Increment</button>
            <button className={styles['count-button']} onClick={decreament}>Decrement</button>
            <button className={styles['count-button']} onClick={reset}>reset</button>
         </div>
        </>
     );
}
 
export default Counter;