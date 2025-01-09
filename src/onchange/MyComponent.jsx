/*
  What is onChange in React?
   It's a  fundamental event handler used for handling changes in form inputs like 
   text fields, checkboxes, radio buttons, and more.
   The onChange event in React is triggered whenever the value of an input element changes.
   It's commonly used to update state with the latest value entered by the user.

*/

import React, {useState} from "react";
function MyComponent() {
    const [name,setName]=useState("");
    const [comment,setComment]=useState("");
    const [payment,setPayment]=useState('');
    const [shipping,setShipping]=useState('');

    const handleNameChange= (event) =>{
        setName(event.target.value);
    }

    const handleCommentChange= (event) =>{
        setComment(event.target.value);
    }

    const handlePaymentChange= (event) =>{
        setPayment(event.target.value);
    }

    const handleShippingChange= (event) => {
        setShipping(event.target.value);
    }

    return ( 
        <div>
           <input
             type="text"
             value={name}
             onChange={handleNameChange} // Attach the onChange handler
             placeholder="Type your name..."
           />
           <p>Name: {name}</p>

           <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery instruction....."></textarea>
           <p>comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master card">Master card</option>
                <option value="Gift card">Gift card</option>

            </select>
            <p>Payment: {payment}</p>

            <label >
                <input type="radio" value="Pick Up" 
                       checked={shipping=== 'Pick Up'}
                       onChange={handleShippingChange}
                />
                Pick Up
            </label>
            <br />
            <label >
                <input type="radio" value="Delivery" 
                       checked={shipping=== 'Delivery'}
                       onChange={handleShippingChange}
                />
                Delivery
            </label>
            <p>shipping: {shipping}</p>

        </div>
     );
}
 
export default MyComponent;