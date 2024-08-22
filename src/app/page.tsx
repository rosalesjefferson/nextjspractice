import TodoListWrapper from "./todos/TodoList";

export default function HomePage() {
  return (
    <div className='flex flex-col gap-10'>
      Welcome to the homepage!

      <TodoListWrapper />
    </div>
  );
}