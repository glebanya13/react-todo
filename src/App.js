import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    console.log(id);
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    console.log(todo);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name: name, complete: false },
    ]);
    todoNameRef.current.value = '';
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div className="input-container">
        <input ref={todoNameRef} type="text" className="input-field" />
        <div className="button-container">
          <button onClick={handleAddTodo} className="button">
            Add Todo
          </button>
          <button onClick={handleClearTodos} className="button">
            Clear Complete
          </button>
        </div>
      </div>
      <div className="todo-count">
        {todos.filter((todo) => !todo.complete).length} left to do
      </div>
    </div>
  )
}

export default App;
