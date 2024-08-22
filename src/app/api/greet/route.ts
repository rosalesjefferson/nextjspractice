
import { NextRequest, NextResponse } from 'next/server';

// starting
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'Guest';
  console.log({searchParams}, "GET")
  return NextResponse.json({ message: `Hello, ${name}!` });
}

// key
// export async function GET(request: NextRequest) {
//   const apiKey = request.headers.get('x-api-key');
//   if (apiKey !== 'my-secret-key') {
//     return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
//   }
//   return NextResponse.json({ message: 'Hello from a protected route!' });
// }

// handling error
// export async function GET() {
//   try {
//     // Simulate an error
//     throw new Error('Something went wrong!');
//   } catch (error: any) {
//     console.log({error})
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }





export async function POST(request: NextRequest) {
  const data = await request.json();

  console.log(data, "POST")
  return NextResponse.json({ message: 'Data received!', data });
}