// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import Header from './Components/Header';
import Forms from './Components/forms';
import './App.css';
import Todolist from './Components/todoList';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState(" ");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className='container'>
      
      
      <div className='app-wrapper'>
        <div>
          <Header />

        </div>
        <div>

          <Forms input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />

        </div>
      </div>
    </div>
  );
}

export default App;
