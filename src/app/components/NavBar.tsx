import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    <Link href="/">Hair Reserve App</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link href="/reservation" className="text-white hover:text-gray-300">Lista de Reservas</Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
