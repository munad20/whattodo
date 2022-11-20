import React from "react";
import Todo from "./Todo";


function List ({todos, setTodos}) {

	function doneTodo (id) {
		let updatedTodos=todos.map(todo=>{
			if(todo.id===id){
				todo.done=!todo.done;
			}

			return todo;
		})
setTodos(updatedTodos);
	}

function deleteTodo(id){
	setTodos(todos.filter(todo=>todo.id!==id));
}

return (
<div className="todo-container">
<ul className="todo-list">
{todos.map((todo)=> (
	<Todo key={todo.id} todo={todo} doneTodo={doneTodo}deleteTodo={deleteTodo}/>
	))}
</ul>
</div>
);
};

export default List;


