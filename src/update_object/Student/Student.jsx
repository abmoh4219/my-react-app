/*
    What Are Props in React?
    Props (short for properties) are a mechanism for passing data from a parent component to a child component in React. They allow components to be reusable and dynamic by customizing their behavior and content.

    Key Features of Props
    Read-Only: Props are immutable, meaning they cannot be modified by the child component that receives them.
    Unidirectional Data Flow: Props flow down from parent to child.
    Customizable Components: Props make components reusable by allowing you to pass different data each time.

    here is another use of props 
    function ChildComponent({ name, age }) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
        </div>
    );
}


*/
import PropTypes from 'prop-types';
import styles from "./Student.module.css";
function Student(props)  {
    return ( 
        <div className={styles.Student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
     );
};

Student.prototype={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}
Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,
}
 
export default Student;