import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// export async function GET() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await response.json();
//   return NextResponse.json(data);
// }

// export async function POST(request: NextRequest) {
//   const newTodo = await request.json();
//   console.log({newTodo}, 'NEW POST')
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newTodo),
//   });
//   const data = await response.json();
//   return NextResponse.json(data, { status: 201 });
// }

export async function GET() {
  try {
    const response = await axios.get(BASE_URL);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await axios.post(BASE_URL, body);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.error();
  }
}
