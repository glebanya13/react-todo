import React from 'react'
import styles from './TodoList.module.css'

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div className={styles.todo}>
      <span className={`${styles['todo-text']} ${todo.complete ? styles.todo.complete : ''}`}>{todo.name}</span>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
        className={styles['todo-checkbox']}
      />
    </div>
  )
}
