import { useState } from "react";

export function AllTodo({ todos, setTodos, filter }) {

 let activeTodos = todos.filter((todo) => {
  return todo.completed === false;
 })

 let completeTodos = todos.filter((todo) => {
  return todo.completed === true;
 })

  return (
    <>
      <ul className="todolist-compilation">
        {(filter === 'all' ? todos : filter === 'active' ? activeTodos : completeTodos).map((todo) => {
          return (

              <li key={todo.id} className="todo-list">
                <div className="todolist-text">
                  <input 
                    type="checkbox" 
                    id="task"
                    checked={todo.completed}
                    onChange={() => {
                      setTodos(todos.map(item =>
                        item.id === todo.id
                          ? { ...item, 
                            completed: !item.completed }
                          : item
                      ));
                    }}
                  />
                  <label>{todo.todoText}</label>
                </div>
                <button
                  className="todolist-btn"
                  onClick={() => {
                    setTodos(todos.filter((item) => item.id !== todo.id));
                  }}
                >
                  Delete
                </button>
              </li>
          );

          
        })}
      </ul>
    </>
  );
}
