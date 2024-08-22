import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://api.example.com/data');
  console.log({response}, 'RESPONSE')
  const data = await response.json();
  console.log({data}, 'data')

  return NextResponse.json({ data });
}
