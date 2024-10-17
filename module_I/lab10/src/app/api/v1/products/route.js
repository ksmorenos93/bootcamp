import {NextResponse} from 'next/server';
import data from 'lab10/mocks/data.json';

export async function GET() {
  return NextResponse.json(data);
}

export async function POST(req, res) {
  console.log(req, res);
  return NextResponse.json(data[0], {status: 201});
}