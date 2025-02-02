/* 
   useContext()= React Hook that allows you to share values
                 between multiple levels of components
                 without passing props through each level
    

    //PROVIDER COMPONENT
    1.import {createContext} from 'react';
    2.export const MyContext=crateContext();
    3.<MyContext.provider value={value}>
          <child/>
      </MyContext.provider>
  
    //CONSUMER COMPONENTS
    1.import React,{useContext} from 'react'
       import {MyContext} from "./Component";
    2. const value=useContext{MyContext};

 */
import styles from './Component.module.css';
import ComponentB from './ComponentB copy 3';
import React,{useState,createContext} from "react";

export const userContext=createContext();

function ComponentA ()  {
    const [user,setUser]=useState("abmoh");
    return (<div className={styles.box}>
        <h1>Component A</h1>
        <h2>{`hello ${user}`}</h2>
        <userContext.Provider value={user}>
              <ComponentB user={user}  />
        </userContext.Provider>
      
    </div> );
}

 
export default ComponentA;