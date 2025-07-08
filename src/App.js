import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";


function App(){

  const [todos,setTodos] = useState([
    {text :"Научи React", completed: false},
    {text :"Напиши To Do List", completed : false},
    {text: "Изпий кафе", completed: false}
  ]);

  const [newTodo, setNewTodo]= useState('');

  function addTodo(){
    if(newTodo.trim() === '') return;
    setTodos([...todos,{ text: newTodo.trim(), completed: false}]);
    setNewTodo('')
  }

  function deleteTodo(indexToDelete){

    setTodos(todos.filter((_, index) => index !== indexToDelete));
  }

  function toggleComplete(indexToToggle){

    const updatedTodos  = todos.map((todo, index) =>{
      if(index === indexToToggle){
        return {...todo, completed: !todo.completed};
      }

      return todo;
    })

    setTodos(updatedTodos);
  }

  useEffect(() => {

    const storedTodos = localStorage.getItem('dofos');
    if(storedTodos){
      setTodos(JSON.perse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
 
  return (

    <div style={{padding: '20px', maxWidth: '400px', margin: 'auto' }}>

      <h1>📝 Моите задачи</h1>
      {/* Поле за Въвеждане*/}
      <input
        type="text"
        value = {newTodo}
        onChange={ e => setNewTodo(e.target.value)}
        placeholder="Въведете нова задача"
        style={{width: '70%', padding: '8px'}}
      />

      <button onClick={addTodo} style={{padding: '8px',marginLeft: '8px'}}>
        Добави
      </button>

      {/*Списък с задачи*/}

      <div style={{marginTop: '20px'}}>
        {todos.map((todo,index) => (
          <TodoItem 
          key = {index} 
          text={todo.text}
          completed = {todo.completed}
          onDelete={() => deleteTodo(index)}
          onToggle={() => toggleComplete(index)}
          />
        ))}
      </div>

    </div>
  )
}

export default App;
