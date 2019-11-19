import React from 'react';
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

function TodoForm({addTodo,setFormData, currentValue}){
  const handleSubmit = e => {
  e.preventDefault();
    addTodo();
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      className="input"
      placeholder="Add Todo..."
      // value={currentValue}
      onChange={e => setFormData(e.target.value)} 
      />
    </form>
  )
  }
  
class ToDoWithoutHooks extends React.Component {
constructor(props){
  super(props);
  this.removeTodo = this.removeTodo.bind(this);
  this.addTodo = this.addTodo.bind(this);
  this.completeTodo = this.completeTodo.bind(this);
  this.setFormData = this.setFormData.bind(this);
  this.currentValue = this.currentValue.bind(this);
  this.state = {
    statecontent: [
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
  ],
  formData: ''
}
}


currentValue(){
  return this.state.formData;
}

removeTodo(id){
  this.setState(state => {
    const statecontent = [...state.statecontent].filter(function(value,index){
        return index !== id
  });
    return {
      statecontent
    };
  });
};


setFormData(targetValue){
  this.setState({formData: targetValue});
}


 



addTodo(){

  this.setState({
    statecontent: this.state.statecontent.concat({
      text: this.state.formData,
      isCompleted: false
    })
  })
  this.setState({formData: ''})




}

completeTodo(id){
  this.setState(state => {
    const statecontent = [...state.statecontent].filter(function(value,index){
     if(id === index) value.isCompleted = true 
      return value
  });
    return {
      statecontent
    };
  });


}

render(){
  return(
    <div className="app">
        <div><h1>To Do Without Hooks</h1>
        <br />  
        <img src="https://i.imgur.com/EeZL7fg.jpg" style={{width: '800px'}} /></div>  
        <div className="todo-list">
          {this.state.statecontent.map((todo,index)=>(
            <Todo key={index} index={index} todo={todo} completeTodo={this.completeTodo} removeTodo={this.removeTodo} />
          ))}
          <TodoForm state={this.state} currentValue={this.currentValue} addTodo={this.addTodo}  setFormData={this.setFormData}  />
    </div>
    </div>
  )
          }
}

export default ToDoWithoutHooks;
