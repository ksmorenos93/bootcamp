import {NextResponse} from 'next/server';
import data from 'lab9/mocks/data.json';

export async function GET() {
  return NextResponse.json(data);
}