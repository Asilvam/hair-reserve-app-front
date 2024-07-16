"use client";
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { format } from 'date-fns';
// import mockReservations from "@/app/data/mockReservations";

type Reservation = {
    id: number;
    name: string;
    date: string;
    phoneNumber: string;
};

const Reservations: React.FC = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        async function fetchReservations() {
            setLoading(true);
            try{
                const response = await fetch('/api/reservations');
                const data = await response.json();
                setReservations(data);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            } finally {
                setLoading(false);
            }

        }
        fetchReservations();
    }, []);

    const formatDateTime = (dateString: string) => {
        return format(new Date(dateString), 'dd-MM-yy, hh:mm a');
    };

    // const reservations: Reservation[] = mockReservations;

    return (
        <div className="p-4">
            {loading ? (
                <div className="flex justify-center items-center">
                    <FaSpinner className="animate-spin text-4xl" />
                </div>
            ) : (
                <ul>
                    {reservations.length === 0 ? (
                        <p>No hay reservas activas</p>
                    ) : (
                        <ul>
                            {reservations.map((reservation) => (
                                <li key={reservation.id} className="border-b py-2">
                                    <p className="font-bold">{reservation.name}</p>
                                    <p>{formatDateTime(reservation.date)}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Reservations;
