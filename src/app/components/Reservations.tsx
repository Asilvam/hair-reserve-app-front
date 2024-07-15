"use client";
import React, { useEffect, useState } from 'react';
// import mockReservations from "@/app/data/mockReservations";

type Reservation = {
    id: number;
    name: string;
    date: string;
    phoneNumber: string;
};

const Reservations: React.FC = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        async function fetchReservations() {
            const response = await fetch('/api/reservations');
            const data = await response.json();
            setReservations(data);
        }
        fetchReservations();
    }, []);

    // const reservations: Reservation[] = mockReservations;

    return (
        <div className="p-4">
            {reservations.length === 0 ? (
                <p>No hay reservas activas</p>
            ) : (
                <ul>
                    {reservations.map((reservation) => (
                        <li key={reservation.id} className="border-b py-2">
                            <p className="font-bold">{reservation.name}</p>
                            <p>{new Date(reservation.date).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Reservations;
