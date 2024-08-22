'use client';

import { useState } from 'react';
import { updateTodo, deleteTodo } from '@/lib/api';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type ClientTodoListProps = {
  todos: Todo[];
};

export default function ClientTodoList({ todos }: ClientTodoListProps) {
  const [todoList, setTodoList] = useState<Todo[]>(todos);

  const handleToggle = async (id: string) => {
    const todo = todoList.find((t) => t.id === id);
    if (!todo) return;

    const updatedTodo = { ...todo, completed: !todo.completed };

    try {
      await updateTodo(id, updatedTodo);
      setTodoList((prev) =>
        prev.map((t) => (t.id === id ? updatedTodo : t))
      );
    } catch (error) {
      console.error('Failed to update todo', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodoList((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Failed to delete todo', error);
    }
  };

  return (
    <ul className="space-y-2">
      {todoList.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center p-2 border border-gray-300 rounded">
          <span className={`${todo.completed ? 'line-through' : ''}`}>
            {todo.title}
          </span>
          <div className="flex space-x-2">
            <button
              className="text-sm text-blue-600"
              onClick={() => handleToggle(todo.id)}
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              className="text-sm text-red-600"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
