import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div className={styles['todo-list']}>
      {todos.length === 0 ? (
        <p>List is empty</p>
      ) : (
        todos.map((todo) => (
          <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        ))
      )}
    </div>
  )
}
