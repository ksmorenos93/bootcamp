import { NextResponse } from 'next/server';
import data from "lab4kevin/mocks/data.json"

export async function GET(){
    return NextResponse.json(data);
    
}