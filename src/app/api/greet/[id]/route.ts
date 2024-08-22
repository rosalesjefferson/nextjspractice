import { NextRequest, NextResponse } from "next/server";

// Dynamic route
export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    console.log({params})
    return NextResponse.json({ message: `You requested data for ID: ${id}` });
  }
  