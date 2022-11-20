import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';



function Form  ({addTodo}){
	const [inputText, setInputText]=useState("");

//this is set to on the on chnage which is being used everytime the value of the input is being changed
	function inputTextHandler (e){

		setInputText(e.target.value)
	}

//the sumbittodohandler i called, when the sumbit is pressed in the form. and also checking it is not an empty todo 
function submitTodoHandler(e){
	e.preventDefault();
	if(inputText){
		addTodo({text:inputText, done:false, id:uuidv4()});
	}

	setInputText("");

}

return(

	<form onSubmit={submitTodoHandler}>
	<input type = "text" value={inputText} placeholder="What To Do?" onChange={inputTextHandler}/>
	<button type="submit" className="add-btn">
     Save or Press enter
    </button>
	</form>

	);
};


export default Form;