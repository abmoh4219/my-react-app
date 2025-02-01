/* 
   useContext()= React Hook that allows you to share values
                 between multiple levels of components
                 without passing props through each level
*/
import styles from './Component.module.css';
import ComponentB from './ComponentB copy 3';
import React,{useState} from "react";
function ComponentA ()  {
    const [user,setUser]=useState("abmoh");
    return (<div className={styles.box}>
        <h1>Component A</h1>
        <h2>{`hello ${user}`}</h2>
        <ComponentB user={user} />
    </div> );
}

 
export default ComponentA;