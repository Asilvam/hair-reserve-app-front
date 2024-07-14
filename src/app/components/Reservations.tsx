"use client";
import React, { useEffect, useState } from 'react';
import mockReservations from "@/app/data/mockReservations";

type Reservation = {
    id: number;
    name: string;
    date: string;
    phoneNumber: string;
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reservations;
