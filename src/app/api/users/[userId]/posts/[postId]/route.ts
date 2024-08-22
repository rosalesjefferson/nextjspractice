import { NextRequest, NextResponse } from 'next/server';

interface IParams {
    params: { 
        userId: string, 
        postId: string 
    }
}

export async function GET(_request: NextRequest, { params }: IParams ) {
  const { userId, postId } = params;
  console.log({params}, 'params')
  return NextResponse.json({ message: `User ID: ${userId}, Post ID: ${postId}` });
}
