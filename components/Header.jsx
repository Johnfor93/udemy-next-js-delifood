"use client"

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

const Header = () => {
    const path = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="shadow-md absolute w-full top-0">
            <nav
                className="container mx-auto px-4 py-6 flex items-center md:justify-evenly justify-between font-inter font-semibold text-lg">
                <Link href="/">
                    <div className="flex items-center justify-between gap-3">
                        <Image src={"/images/logo.png"} alt={"DeliFood Logo"} height={48} width={48} loading="eager" priority />
                        <h1 className={"text-gray-50 font-montserrat"}>DELIFOOD</h1>
                    </div>
                </Link>

                {/* Navigation Links */}
                <Link href="/meals" className={path.startsWith('/meals') ? "text-amber-400 hidden md:flex" : "text-gray-50 hover:text-gray-200 hidden md:flex"}>Browse Meals</Link>
                <Link href="/community" className={path === '/community' ? "text-amber-400 hidden md:flex" : "text-gray-50 hover:text-gray-200 hidden md:flex"}>Delifood Community</Link>
                <Link href="#" className="text-gray-50 hover:text-gray-200 hidden md:flex">Contact</Link>
                {/* Decorative Element */}

                {/* Hamburger Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="#f9fafb"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Navigation Links for Mobile */}
                <div
                    className={`md:hidden absolute top-24 left-0 w-full h-fit bg-[#282c34] shadow-lg ${
                        isOpen ? 'block' : 'hidden'
                    }`}
                >
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <Link href="/" className="text-gray-50 hover:text-gray-200 flex">Home</Link>
                        <Link href="/meals" className="text-gray-50 hover:text-gray-200 flex">Meals</Link>
                        <Link href="/community" className="text-gray-50 hover:text-gray-200 flex">Community</Link>
                        <Link href="#" className="text-gray-50 hover:text-gray-200 flex">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
