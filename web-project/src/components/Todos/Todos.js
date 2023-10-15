import styles from "./todos.module.scss";
import React, {useEffect, useRef, useState} from "react";
import * as PropTypes from "prop-types";
import InputButton from "../InputButton/InputButton";



InputButton.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

function Todos(props)  {

    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => setInputValue(e.target.value);

    const deleteTodo = (index) => {
        const newTodos = [...props.todos.slice(0, index), ...props.todos.slice(index + 1)];
        props.setTodos(newTodos);
    }

    const addTodo = () => {
        if (inputValue.length > 0) {
            let newTodos = [...props.todos, inputValue];
            setInputValue("");
            props.setTodos(newTodos);
        }
    }



    return <div className={styles.UpcomingToday}>
        <div>
            <h2 className={styles.h2}>My Todos</h2>
            <ul className={styles.scroll}>
                {
                    props.todos.map((el, index) => {
                        return <div className={styles.todo}>
                            <div className={styles.text}>
                                <div>{index + 1}.</div>
                                <div>{el}</div>
                            </div>
                            <button className={styles.button} onClick={() => {
                                deleteTodo(index)
                            }}>done
                            </button>
                        </div>
                    })
                }
            </ul>
        </div>

        <InputButton value={inputValue} onChange={handleChange} onClick={() => {
            addTodo();
        }} buttonText={"Add Event"}/>

    </div>;
}

export default Todos;