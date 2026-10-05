import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {id:1, text: "todo 1", done: false},
    {id:2, text: "todo 2", done: false},
    {id:3, text: "tofo 3", done: false}
  ])
  return (
    <main className="app">
      <h1>To Do List</h1>

      <ul className="todo-list">
        {todo.map((t) => (
          <li key={t.id}>
            {t.text}{" "}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
