import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Reservation from '@/models/Reservation';

export async function GET() {
    await connectToDatabase();
    const now = new Date(); // Get current date and time
    const currentDate = now.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const currentHour = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`; // Get current hour and minute in HH:mm format


    const reservations = await Reservation.find({
        $or: [
            { date: { $gt: currentDate } },
            { date: currentDate, hour: { $gte: currentHour } }
        ]
    }).sort({ date: 1, name: 1 });
    return NextResponse.json(reservations);
}

export async function POST(request: Request) {
    const { id, name, date, phoneNumber } = await request.json();
    await connectToDatabase();
    const reservation = new Reservation({ id, name, date, phoneNumber });
    await reservation.save();
    return NextResponse.json(reservation);
}
