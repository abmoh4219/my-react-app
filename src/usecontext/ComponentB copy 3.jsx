/* 
   useContext()= React Hook that allows you to share values
                 between multiple levels of components
                 without passing props through each level
*/
import styles from './Component.module.css';
import ComponentC from './ComponentC copy 4';
import React from "react";
function ComponentB ()  {
    return (<div className={styles.box}>
        <h1>Component B</h1>
        <ComponentC />
    </div> );
}

 
export default ComponentB;