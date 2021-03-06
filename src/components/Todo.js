import React from 'react';
import './Todo.css';

const Todo = ({todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    
    //This comment is for test
    //This has nothing to do with the code

    return (
        <div>
            <div className="todo">
                <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.text}</li>
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default Todo
