import React,{useState} from 'react';
import './App.css';
import List from './mytodo/List'
import Form from './mytodo/Form'


const App=()=>{

/*useState hooks is being used so i can create the todos state,
 and in this case is an array of my todos*/

  const [todos, setTodos]=useState([]);
// this function is used to a new todo, and is being used by using the method setTodos and there for update it
function addTodo(todo) {
    const newTodos = [todo,...todos];
// and i use this function to replace with new value
    setTodos(newTodos);
  }

  return (

    <div >
    <h1  style={{ padding: 50 }} >WhatToDo</h1>
    <Form addTodo={addTodo}/>
    <List todos={todos} setTodos={setTodos}/>
    </div>

  );
}

export default App;
