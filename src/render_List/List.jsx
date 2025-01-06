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



