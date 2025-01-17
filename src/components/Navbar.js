'use client'
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Card } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion"


const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "Faq" },
    { href: "/contact-us", label: "Contact" },
];

const dropdownItems = [
    { href: "/services/#", label: "Anti-Wrinkle Treatments" },
    { href: "/services/#", label: "Mesotherapy" },
    { href: "/services/#", label: "Fat Dissolving" },
];

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isHomepage = pathname === "/";
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const navAnimation = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const dropdownAnimation = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2
            }
        }
    }

    const sideDrawerAnimation = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    }

    const overlayAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    }
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className={`absolute z-50 top-0 w-full ${isHomepage ? 'bg-black bg-opacity-10' : ''}`}>
            <nav className="z-60">
                <div className="max-w-[90%] mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <Link href="/" className="relative flex items-center">
                        {/* Soft shadow blending with background */}
                        {/* <div className="absolute inset-0 translate-x-0 translate-y-1 bg-white rounded-full blur-2xl opacity-60"></div> */}

                        {isHomepage ?
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={400}
                                height={400}
                                priority
                                className="h-auto w-[130px] relative"
                            /> : <Image
                                src="/Logo_white.png"
                                alt="Logo"
                                width={400}
                                height={400}
                                priority
                                className="h-auto w-[130px] relative"
                            />
                        }
                    </Link>


                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <Menu className="text-white" />
                    </button>

                    {/* Navigation Links */}
                    <div className="hidden w-full md:flex md:w-auto" id="navbar-default" role="navigation">
                        <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 bg-gray-50 border rounded-lg md:border-none bg-transparent">
                            {navItems.map(({ href, label }) => {
                                const isActive = pathname === href;

                                if (label === "Services") {
                                    const dropdownAnimation = {
                                        hidden: {
                                            opacity: 0,
                                            y: -10,
                                            transition: {
                                                duration: 0.2,
                                                ease: "easeInOut"
                                            }
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeOut"
                                            }
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -10,
                                            transition: {
                                                duration: 0.2,
                                                ease: "easeInOut"
                                            }
                                        }
                                    };

                                    return (
                                        <li key={label} className="relative" ref={dropdownRef}>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                onClick={toggleDropdown}
                                                className={`flex items-center py-2 px-3 md:p-0 text-[#fff] text-xl relative transition-all duration-300 ${isActive
                                                    ? "border-b-2 border-white font-semibold"
                                                    : "hover:text-rose-300"
                                                    }`}
                                            >
                                                Services
                                                <motion.div
                                                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ChevronDown className="ml-2" />
                                                </motion.div>
                                            </motion.button>
                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <motion.div
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                        variants={dropdownAnimation}
                                                    >
                                                        <Card>
                                                            <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48">
                                                                {dropdownItems.map(({ href, label }) => (
                                                                    <motion.li
                                                                        key={label}
                                                                        whileHover={{
                                                                            backgroundColor: "#fff1f2",
                                                                            transition: { duration: 0.2 }
                                                                        }}
                                                                    >
                                                                        <Link
                                                                            href={href}
                                                                            className="block px-4 py-2 transition-colors"
                                                                        >
                                                                            {label}
                                                                        </Link>
                                                                    </motion.li>
                                                                ))}
                                                                <motion.li
                                                                    whileHover={{
                                                                        backgroundColor: "#f3f4f6",
                                                                        transition: { duration: 0.2 }
                                                                    }}
                                                                >
                                                                    <Link
                                                                        href="/services"
                                                                        className="block px-4 py-2 text-rose-500 font-semibold transition-colors"
                                                                    >
                                                                        View More
                                                                    </Link>
                                                                </motion.li>
                                                            </ul>
                                                        </Card>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    )
                                }

                                return (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className={`block py-2 px-3 md:p-0 text-[#fff] text-xl relative transition-all duration-300 ${isActive
                                                ? "border-b-2 border-white font-semibold"
                                                : "hover:text-rose-300"
                                                }`}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="lg:block md:block hidden">
                        <Link href="/book-an-appointment">
                            <button className="w-full rounded-lg text-white p-3 px-6 bg-rose-400 transition-all duration-300 hover:bg-rose-500 hover:rounded-3xl">
                                Book an Appointment
                            </button>
                        </Link>

                    </div>
                </div>
            </nav>
            {/* Side Drawer */}
            <div
                className={`pb-10 overflow-y-auto z-50 fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-4 flex flex-col h-full">
                    <button
                        onClick={toggleMenu}
                        className="self-end px-2 text-gray-500 hover:text-gray-800"
                    >
                        <X />
                    </button>
                    <ul className="space-y-2 mt-4">
                        {navItems.map(({ href, label }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="block py-2 text-lg text-gray-800 hover:text-rose-500"
                                    onClick={toggleMenu}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center py-2 text-lg text-gray-800 hover:text-rose-500"
                            >
                                Services
                                <ChevronDown
                                    className={`ml-2 transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>
                            {isDropdownOpen && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    {dropdownItems.map(({ href, label }) => (
                                        <li key={label}>
                                            <Link
                                                href={href}
                                                className="block py-2 text-gray-700 hover:text-rose-500"
                                                onClick={toggleMenu}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link
                                            href="/services"
                                            className="block py-2 text-rose-500 font-semibold hover:text-rose-600"
                                            onClick={toggleMenu}
                                        >
                                            View More
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link href="/book-an-appointment">
                                <button className="w-full rounded-lg text-white p-2 bg-rose-400 transition-all duration-300 hover:bg-rose-500">
                                    Book an Appointment
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Overlay to close menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={toggleMenu}
                ></div>
            )}
        </section>
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