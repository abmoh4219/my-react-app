/* 
    // codes from the App.jsx class
    import List from "./render_List/List.jsx";

function App() {
  const fruits=[
    {id:1 ,name:"apple" , calories:95},
    {id:2 ,name:"orange" , calories:45},
    {id:3 ,name:"banana" , calories:105},
    {id:4 ,name:"coconut" , calories:159},
    {id:5 ,name:"pineapple" , calories:37},
  ];

  const vegtables=[
    {id:6 ,name:"potatoes" , calories:110},
    {id:7 ,name:"celery" , calories:15},
    {id:8 ,name:"carrots" , calories:25},
    {id:9 ,name:"corn" , calories:63},
    {id:10 ,name:"broccoli" , calories:50},
  ];


  return(
    <>
       {fruits.length > 0 ?     <List items={fruits}  catagory="Fruits"/> : null }
       {vegtables.length > 0 ?  <List items={vegtables}  catagory="Vegtables"/> : null }
       <List/>


    
     </>
  
  );
}
 
export default App
   

*/

import styles from "./List.module.css";
import PropTypes from 'prop-types';

function List(props){
    const itemList=props.items;
    const catagory=props.catagory;
    const listItems=itemList.map(item => <li key={item.id}>
                                         {item.name}: &nbsp;
                                         <b>{item.calories}</b></li>);
    return ( 
        <>
            <h3 className={styles['list-category']}>{catagory}</h3>
            <ol className={styles['list-items']}>{listItems}</ol>
        </>  
                        
     );
}

List.defaultProps={
    catagory:"Catagory",
    items:[],
}

List.PropTypes={
    catagory: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))
}
 
export default List;  



