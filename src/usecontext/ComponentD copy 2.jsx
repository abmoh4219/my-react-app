/* 
   useContext()= React Hook that allows you to share values
                 between multiple levels of components
                 without passing props through each level


  
  //PROVIDER COMPONENT
    1.import {createContent} from 'react';
    2.export const MyContext=crateContext();
    3.MyContext.provider value={value}>
          <child/>
          <MyContext.provider>
  
    //CONSUMER COMPONENTS
    1.import React,{useContext} from 'react'
       import {MyContext} from "./Component";
    2. const value=useContext(MyContext);

*/
import styles from './Component.module.css';
import React,{useContext} from "react";
import { userContext } from './ComponentA';
function ComponentD ()  {
    const user=useContext(userContext);
    return (<div className={styles.box}>
        <h1>Component D</h1>
        <h2>{`Bye ${user}`}</h2>
    </div> );
}

 
export default ComponentD;