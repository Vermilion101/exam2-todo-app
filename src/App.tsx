import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {id:1, text: "todo 1", done: false},
    {id:2, text: "todo 2", done: false},
    {id:3, text: "tofo 3", done: false}
  ]);
  const [draft, setDraft] = useState("");

  function addTodo(e) {
    e.preventDefault();
    const trimmed = draft.trim();
    if (trimmed === "") return;
    setTodo([
      ...todo,
      {id: Date.now(), text:trimmed, done: false},
    ]);
    setDraft("");
  }

  function removeTodo(id) {
    setTodo(todo.filter((t) => t.id !== id));
  }

  function toggleDone(id) {
    setTodo(todo.map(
      (t) => t.id === id ? {...t, done: !t.done } : t
    ));
  }

  return (
    <main className="app">
      <h1>To Do List</h1>

      <form className="input-row" onSubmit={addTodo}>
        <input
        value = {draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Add new task">
        </input>
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todo.map((t) => (
          <li className={t.done ? "todo done" : "todo"} key={t.id}>
            <button type="button" onClick={() => toggleDone(t.id)}>Done</button>
            {" "}{t.text}{" "}
            <button type="button" onClick={() => removeTodo(t.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
