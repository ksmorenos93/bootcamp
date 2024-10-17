import {NextResponse} from 'next/server';
import data from 'lab10/mocks/data.json';

export async function GET(req, {params}) {
  const item = data.find(product => product.id === parseInt(params.item)) || {};
  return NextResponse.json(item);
}

export async function POST(req, res) {
  console.log(req);
  return NextResponse.json(data[0]);
}