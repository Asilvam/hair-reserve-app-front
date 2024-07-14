import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Reservation from '@/models/Reservation';

export async function GET() {
    await connectToDatabase();
    const reservations = await Reservation.find();
    return NextResponse.json(reservations);
}

export async function POST(request: Request) {
    const { id, name, date, phoneNumber } = await request.json();
    await connectToDatabase();
    const reservation = new Reservation({ id, name, date, phoneNumber });
    await reservation.save();
    return NextResponse.json(reservation);
}
