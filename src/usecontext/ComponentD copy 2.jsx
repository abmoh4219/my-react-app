/* 
   useContext()= React Hook that allows you to share values
                 between multiple levels of components
                 without passing props through each level
*/
import styles from './Component.module.css';
import React from "react";
function ComponentD (props)  {
    return (<div className={styles.box}>
        <h1>Component D</h1>
        <h2>{`Bye ${props.user}`}</h2>
    </div> );
}

 
export default ComponentD;