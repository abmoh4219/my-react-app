/* 
   useContext()= React Hook that allows you to share values
                 between multiple levels of components
                 without passing props through each level
*/
import styles from './Component.module.css';
import ComponentD from './ComponentD copy 2';
import React from "react";
function ComponentC ()  {
    return (<div className={styles.box}>
        <h1>Component C</h1>
        <ComponentD />
    </div> );
}

 
export default ComponentC;