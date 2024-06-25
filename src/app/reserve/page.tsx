import React from 'react';
import ReservationForm from '../components/ReservationForm';
import Navbar from "@/app/components/NavBar";

const ReservePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <ReservationForm />
        </div>
    );
};

export default ReservePage;
