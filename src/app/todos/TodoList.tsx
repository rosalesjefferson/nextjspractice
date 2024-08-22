import { getTodos } from '@/lib/api';
import ClientTodoList from './ClientTodoList';

export default async function TodoList() {
  const { data: todos } = await getTodos();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <ClientTodoList todos={todos} />
    </div>
  );
}
