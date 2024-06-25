import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    <Link href="/">StiLazO APP</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/reservation" className="text-white hover:text-gray-300">Agenda</Link>
                    </li>
                    <li>
                        <Link href="/reserve" className="text-white">Reservar</Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
