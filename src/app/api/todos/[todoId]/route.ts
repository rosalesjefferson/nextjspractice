import axios from 'axios';
import { NextResponse } from 'next/server';
// import axios from 'axios';

// const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// export async function GET(request: Request, { params }: { params: { todoId: string } }) {
//   try {
//     const { todoId } = params;
//     const response = await axios.get(`${API_URL}/${todoId}`);
//     return NextResponse.json(response.data);
//   } catch (error) {
//     return NextResponse.error();
//   }
// }

// export async function PUT(request: Request, { params }: { params: { todoId: string } }) {
//   try {
//     const { todoId } = params;
//     const updates = await request.json();
//     const response = await axios.put(`${API_URL}/${todoId}`, updates);
//     return NextResponse.json(response.data);
//   } catch (error) {
//     return NextResponse.error();
//   }
// }

// export async function DELETE(request: Request, { params }: { params: { todoId: string } }) {
//   try {
//     const { todoId } = params;
//     await axios.delete(`${API_URL}/${todoId}`);
//     return NextResponse.json({ message: 'Todo deleted' });
//   } catch (error) {
//     return NextResponse.error();
//   }
// }

const BASE_URL = 'http://localhost:3000//todos';

interface IParams {
  params: {
    todoId: string
  }
}

let todos = [
  { id: '1', title: 'Learn Next.js', completed: false },
  { id: '2', title: 'Learn Tailwind CSS', completed: false },
];

export async function GET(req: Request, { params }: IParams) {
  console.log({req}, 'TODOSSSS')
  const todo = todos.find((todo) => todo.id === params.todoId);
  if (!todo) return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
  return NextResponse.json(todo);
}

export async function PUT(request: Request, { params }: IParams) {
  try {
    const body = await request.json();
    console.log({body, request}, 'body')
    const response = await axios.put(`${BASE_URL}/${params.todoId}`, body);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log({error})
    return NextResponse.error();
  }
}

export async function DELETE(_request: Request, { params }: IParams) {
  try {
    await axios.delete(`${BASE_URL}/${params.todoId}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.error();
  }
}

