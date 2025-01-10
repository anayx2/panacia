'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { Facebook, Linkedin, Twitter, Pin } from 'lucide-react'
import { Button } from "./ui/button";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact" },
];

const Navbar = () => {
    const router = useRouter(); // Get the current route

    return (
        <>
            <section className="absolute z-50 top-0 w-full">
                <div className="w-full border-b py-2">
                    <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 text-sm text-white">
                        {/* Contact Information */}
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                            <a href="tel:000-123-456789" className="hover:text-gray-900">
                                07388869697                            </a>
                            <a href="mailto:info@panacea-clinic.co.uk" className="hover:text-gray-900">
                                info@panacea-clinic.co.uk                            </a>
                            <address className="not-italic">
                                Pharmacentre Pharmacy,149 Edgware Rd,
                                Tyburnia, London W2 2HU                            </address>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 ">
                            <Link href="#" className="hover:text-gray-900 bg-[#D59395] rounded-full p-1">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-gray-900  bg-[#D59395] rounded-full p-1">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-gray-900  bg-[#D59395] rounded-full p-1">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="hover:text-gray-900 bg-[#D59395] rounded-full p-1">
                                <Pin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="max-w-[90%] mx-auto flex items-center justify-between p-4 ">
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
                                {navItems.map(({ href, label }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className={`block py-2 px-3 rounded md:p-0 ${router.pathname === href
                                                ? "text-[#fff] text-xl font-semibold border-b border-[#fea6a4]"
                                                : "text-[#fff] text-xl"
                                                }`}
                                            aria-current={router.pathname === href ? "page" : undefined}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Link href={'/book-an-appointment'}>
                                <button className=" rounded-lg text-white p-2 px-8 bg-[#D59395]">
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
