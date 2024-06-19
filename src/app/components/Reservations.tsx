// components/Reservations.tsx
"use client";
import React, { useEffect, useState } from 'react';
import {mockReservations} from "@/app/data/mockReservations";

type Reservation = {
    id: number;
    name: string;
    date: string;
    service: string;
};

const Reservations: React.FC = () => {

    const reservations: Reservation[] = mockReservations;

    return (
        <div className="p-4">
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id} className="border-b py-2">
                        <p className="font-bold">{reservation.name}</p>
                        <p>{new Date(reservation.date).toLocaleString()}</p>
                        <p>{reservation.service}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reservations;
