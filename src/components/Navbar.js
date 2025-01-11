'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Facebook, Linkedin, Twitter, Pin } from 'lucide-react'
import { Button } from "./ui/button";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "Faq" },
    { href: "/contact-us", label: "Contact" },
];

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    return (
        <>
            <section className={`absolute z-50 top-0 w-full ${isHomepage ? 'bg-black bg-opacity-10' : ''}`}>
                <nav className="z-60">
                    <div className="max-w-[90%] mx-auto flex items-center justify-between p-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={400}
                                height={400}
                                priority
                                className="h-14 w-auto"
                            />
                        </Link>

                        {/* Hamburger Menu Button */}
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <HamburgerIcon />
                        </button>

                        {/* Navigation Links */}
                        <div
                            className="hidden w-full md:flex md:w-auto"
                            id="navbar-default"
                            role="navigation"
                        >
                            <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 bg-gray-50 border rounded-lg md:border-none bg-transparent">
                                {navItems.map(({ href, label }) => {
                                    const isActive = pathname === href;
                                    return (
                                        <li key={label}>
                                            <Link
                                                href={href}
                                                className={`
                                                    block py-2 px-3 md:p-0 
                                                    text-[#fff] text-xl
                                                    relative
                                                    transition-all duration-300
                                                    ${isActive ?
                                                        "border-b-2 border-white font-semibold" :
                                                        `hover:text-rose-300
                                                        after:content-['']
                                                        after:absolute
                                                        after:w-0
                                                        after:h-0.5
                                                        after:bg-white
                                                        after:left-0
                                                        after:-bottom-1
                                                        after:transition-all
                                                        after:duration-300
                                                        hover:after:w-full`
                                                    }
                                                `}
                                                aria-current={isActive ? "page" : undefined}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <Link href={'/book-an-appointment'}>
                                <button className="rounded-lg text-white p-2 px-8 bg-rose-400 transition-all duration-300 hover:bg-rose-400">
                                    Book an Appointment
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};

const HamburgerIcon = () => (
    <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
        aria-hidden="true"
    >
        <path
            d="M1 1h15M1 7h15M1 13h15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        />
    </svg>
);

export default Navbar;