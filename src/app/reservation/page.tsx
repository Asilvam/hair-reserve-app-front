import Reservations from "@/app/components/Reservations";
import Navbar from "@/app/components/NavBar";

export default function ReservationPage() {
    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <Reservations />
        </div>
    );
}
