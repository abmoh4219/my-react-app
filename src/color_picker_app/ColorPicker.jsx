import styles from "./ColorPicker.module.css";
import React,{useState} from "react";
function ColorPicker()  {
    const [color,setColor]=useState("#FFFFFF");

    const handleColorChange=(event) => {
        setColor(event.target.value);
    }

    return ( <div className={styles["color-picker-container"]}>
        <h1>Color Picker</h1>
        <div className={styles["color-display"]} style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label >Select a color</label>
        <input type="color" onChange={handleColorChange} />
    </div> );
}
 
export default ColorPicker;