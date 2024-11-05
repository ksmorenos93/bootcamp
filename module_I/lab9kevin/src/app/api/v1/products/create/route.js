import {NextResponse} from 'next/server';
import data from 'lab9kevin/mocks/data.json';

export async function POST() {
  return NextResponse.json(data[10], {status: 201});
}
