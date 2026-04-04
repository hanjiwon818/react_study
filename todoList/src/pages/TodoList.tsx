import React, { useState } from 'react'
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';

export interface Todo {
    id: number;
    text:string;
    isDone:boolean;
}

export default function TodoList() {
    
    const [todoList, setTodoList] = useState<Todo[]>([]); //할일을 추가했을 때 저장되는 배열
    const addTodo = (inputText:string) => {
        const newTodo:Todo = {
            id: Date.now(),
            text:inputText,
            isDone:false
        }
        setTodoList([newTodo, ...todoList]);
        console.log(todoList);  
    }


    return (
        <div>
            <TodoInput addTodo={addTodo}></TodoInput>
            {todoList.map((todo)=> (
                <TodoItem key={todo.id} todo={todo}></TodoItem>
            ))}
        </div>
    )
}
