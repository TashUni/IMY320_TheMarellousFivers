import styles from "../Todos/todos.module.scss";
import React from "react";

function InputButton(props) {
    return <div className={styles.input}>
        <input type="text" value={props.value} onChange={props.onChange}/>
        <button className={styles.button} onClick={props.onClick}>{props.buttonText}</button>
    </div>;
}

export default InputButton;