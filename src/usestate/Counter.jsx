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