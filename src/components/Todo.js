import React from 'react';


function Todo({ todo, doneTodo, deleteTodo }) {
    function HandleDone() {
        doneTodo(todo.id);
    }
  
    function HandleDelete() {
        deleteTodo(todo.id);
    }


    return(
        <div>
            <div className="todo">
            <li className={todo.done?"alldone":""}>
                {todo.text}
            </li>
            <span>&#10003; <button onClick={HandleDone} className="done-button" >{todo.done?"Undo":"Done"}</button></span> 
            <button className="remove-button" onClick={HandleDelete}>Remove</button>
            </div>
        </div>
    );
}




export default Todo;
