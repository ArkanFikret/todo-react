import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: "Научи React", completed: false, createdAt: new Date().toLocaleString() },
    { text: "Напиши To Do List", completed: false, createdAt: new Date().toLocaleString() },
    { text: "Изпий кафе", completed: false, createdAt: new Date().toLocaleString() }
  ]);

  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    if (newTodo.trim() === '') return;
    setTodos([
      ...todos,
      {
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toLocaleString()
      }
    ]);
    setNewTodo('');
  }

  function deleteTodo(indexToDelete) {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  }

  function toggleComplete(indexToToggle) {
    const updatedTodos = todos.map((todo, index) => {
      if (index === indexToToggle) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app-container">
      <h2>📝 Моите задачи</h2>

      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Въведете нова задача"
          className="todo-input"
        />
        <button onClick={addTodo} className="add-button">
          Добави
        </button>
      </div>

      <div className="todos-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            createdAt={todo.createdAt}
            onDelete={() => deleteTodo(index)}
            onToggle={() => toggleComplete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
