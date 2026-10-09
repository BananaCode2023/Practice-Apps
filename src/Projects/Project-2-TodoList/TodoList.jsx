import { useState } from "react";
import { AllTodo } from "./AllTodo";
import "./TodoList.css";

export function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      todoText: "practice react js",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      todoText: "eat lunch",
      completed: true,
    },
    {
      id: crypto.randomUUID(),
      todoText: "gym",
      completed: false,
    }
  ]);
  
  const [todoText, setTodoText] = useState('')
  const [filter, setFilter] = useState('all')

  let saveInputText = (event) => {
    setTodoText(event.target.value)
  }

  const addToList = () => {
    if (todoText.trim() === "") {
      return;
    }
    
    setTodos([
        ...todos,
        {
            id: crypto.randomUUID(),
            todoText: todoText,
            completed: false
        }
    ])

    setTodoText("")
  }

  let completedCount = todos.filter(todo => todo.completed).length;

  let incompletedCount = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <title>Todo List App</title>

      <section className="todolist-section">
        <div className="todolist-container">
          <p><strong>Project 2</strong></p>
          <h2>📝 My Todo List</h2>

          <div className="todolist-form" >
            <input type="text" placeholder="Add a new todo" value={todoText} onChange={saveInputText} />
            <button onClick={addToList}>Add</button>
          </div>

          <div className="todolist-status-buttons">
            <button 
                className={
                    `todolist-status-button ${filter === 'all' ? 'active' : ''}`
                }
                onClick={() => {
                  setFilter('all')
                }}
            >
                All
            </button>
            <button 
                className={
                    `todolist-status-button ${filter === 'active' ? 'active' : ''}`
                }
                onClick={() => {
                  setFilter('active')
                }}
            >
                Active
            </button>
            <button 
                className={
                    `todolist-status-button ${filter === 'completed' ? 'active' : ''}`
                }
                onClick={() => {
                  setFilter('completed')
                }}
            >
                Completed
            </button>
          </div>
          <div className="todolist-status">
            <p>{incompletedCount} active • {completedCount} Completed</p>
          </div>

          <AllTodo 
            todos={todos} 
            setTodos={setTodos}
            filter={filter}
          />

          <div className="todolist-instructions">
            <h5>How this works</h5>
            <ul>
              <li>.map() renders list items dynamically</li>
              <li>.filter() creates filtered views without mutating state</li>
              <li>key prop uses unique id, NOT index</li>
              <li>Spread operator (...todos) creates new array</li>
              <li>Reusable components (TodoItem, TodoList)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
