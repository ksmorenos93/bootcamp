import {NextResponse} from 'next/server';
import data from 'lab4/mocks/data.json';

export async function GET() {
  return NextResponse.json(data);
}