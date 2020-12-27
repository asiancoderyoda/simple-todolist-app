import React from 'react'
import "./Form.css";

const Form = (props) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        props.setInput(e.target.value);
    };
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        props.setTodos([...props.todos, {text: props.input, completed: false, id: Math.random()*1000000}]);
        props.setInput("");
    };
    const statuasHandler = (e) => {
        props.setStatus(e.target.value)
    }

    return (
        <form>
            <div>
                <input value={props.input} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit" >
                <i className="fas fa-plus-square"></i>
            </button>
            </div>
            <div className="select">
                <select onChange={statuasHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
