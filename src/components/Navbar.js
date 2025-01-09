'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/", label: "Gallary" },
    { href: "/contact-us", label: "Contact" },
];

const Navbar = () => {
    const router = useRouter(); // Get the current route

    return (
        <>
            <section className="absolute z-50 top-0 w-full">
                <nav>
                    <div className="max-w-[90%] mx-auto flex items-center justify-between p-4 ">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={100}
                                height={100}
                                priority
                                className="h-16 w-auto"
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
                                {navItems.map(({ href, label }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className={`block py-2 px-3 rounded md:p-0 ${router.pathname === href
                                                ? "text-[#fea6a4] text-xl font-semibold border-b border-[#fea6a4]"
                                                : "text-[#fea6a4] text-xl"
                                                }`}
                                            aria-current={router.pathname === href ? "page" : undefined}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
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
