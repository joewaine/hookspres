import React, { useState } from 'react';
import './App.css';

function Todo({todo, index, completeTodo, removeTodo}) {
return(
  <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
    {todo.text}
    <div>
     <button onClick={()=> completeTodo(index)}>Complete</button>
     <button onClick={()=> removeTodo(index)}>Delete</button>
        </div>
    </div>
)
}

function TodoForm({addTodo}){
const [value, setValue] = useState('');

const handleSubmit = e => {

e.preventDefault();
if(!value) return;
addTodo(value);
setValue('');
}

return(
    <div>

    <div>
      
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    className="input"
    placeholder="Add Todo..."
    value={value} onChange={e => setValue(e.target.value)} />
  </form>
  </div>
  </div>
)
}


function ToDoWithHooks() {

const [todos, setTodos] = useState([
  {
    text: 'learn about react',
    isCompleted: false
  },
  {
    text: 'meet friend',
    isCompleted: false
  },
  {
    text: 'go to town hall',
    isCompleted: false
  }
]);

const addTodo = text => {
  const newTodos = [...todos, {text}];
  setTodos(newTodos);
}

const completeTodo = index => {
const newTodos = [...todos];
newTodos[index].isCompleted = true;
setTodos(newTodos);
}

const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index)
  setTodos(newTodos);
  }

  return(
    <div className="app">
            <div>
        <h1>To Do List With Hooks</h1>
        <br />  
        <img src="https://i.imgur.com/Fnr4Aho.jpg" style={{width: '800px'}} />
    </div>
        <div className="todo-list">
          {todos.map((todo,index)=>(
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))}
          <TodoForm addTodo={addTodo} />

    </div>
    </div>
  )

}

export default ToDoWithHooks;
