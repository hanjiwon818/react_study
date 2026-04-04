import React from 'react'
import  type {Todo} from '../pages/TodoList';

interface TodoItemProps {
    todo: Todo;

}

export default function TodoItem({todo}: TodoItemProps) {
  return (
    <div>
        <input type="checkbox" 
        
        />
        <span>{todo.text}</span>
        <span></span>
        <button>삭제</button>
    </div>
  )
}
