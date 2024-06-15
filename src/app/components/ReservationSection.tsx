// components/ReservationSection.tsx
"use client"; // This directive marks the component as a client component

import React from 'react';
import styles from '../styles/Reservation.module.css'; // Import the CSS module

const ReservationSection: React.FC = () => {
    const handleReservationClick = () => {
        alert('Reserva realizada con éxito!');
    };

    return (
        <section className={styles.reservation}>
            <h2>Reserva tu Cita</h2>
            <p>Evita la espera y asegura tu lugar con nuestro sistema de reservas en línea. ¡Es fácil y rápido!</p>
            <button className={styles.button} onClick={handleReservationClick}>
                Reserva Ahora
            </button>
        </section>
    );
};

export default ReservationSection;
