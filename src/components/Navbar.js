'use client'
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"


const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact-us", label: "Contact" },
];

const dropdownItems = [
    { href: "/services/#", label: "Anti-Wrinkle Treatments" },
    { href: "/services/#", label: "Mesotherapy" },
    { href: "/services/#", label: "Fat Dissolving" },
];

const services = [
    {
        id: 1,
        title: "Anti-Wrinkle Treatments",
        description: "Smooth away wrinkles with our effective anti-wrinkle treatments, designed to rejuvenate your skin and restore a youthful, radiant appearance",
        image: "/anti-wrinkle/1.jpg",
        href: "/services/anti-wrinkle"
    },
    {
        id: 2,
        title: "Mesotherapy",
        description: "Achieve glowing, nourished skin with Mesotherapy, a technique delivering vitamins and nutrients directly to your skin for remarkable results.",
        image: "/blog1.png",
        href: "/services/Mesotherapy"
    },
    {
        id: 3,
        title: "Fat Dissolving",
        description: "Say goodbye to stubborn fat with our safe and effective fat-dissolving treatments, tailored to sculpt your body effortlessly.",
        image: "/services1/fatdissolving.jpg",
        href: "/services/fat-dissolving-injections"
    },
    {
        id: 4,
        title: "Microneedling",
        description: "Revitalize your skin with Microneedling, promoting collagen production to reduce scars, fine lines, and improve skin texture.",
        image: "/Microneedling/1.jpg",
        href: "/services/Microneedling"
    },
    {
        id: 5,
        title: "Vitamin B12 Injection",
        description: "Boost your energy and enhance your overall well-being with our Vitamin B12 injections, essential for vitality and health.",
        image: "/services1/cosmetologist-making-injections-face-woman-beauty-salon.jpg",
        href: "/services/vitamin-b12-deficiency"
    },
    {
        id: 6,
        title: "Hopi Ear Candle",
        description: "Experience relaxation and improved ear health with Hopi Ear Candling, a natural therapy to clear blockages and restore balance.",
        image: "/Hipo-ear-candle/1.jpg",
        href: "/services/hopi-ear-candle"
    },
    {
        id: 7,
        title: "Iv drip",
        description: "Rehydrate, rejuvenate, and replenish essential nutrients with our custom Iv drip therapies for optimal wellness.",
        image: "/services1/ivdrip.jpg",
        href: "/services/IV-Drip"
    },
    {
        id: 8,
        title: "Bio filler",
        description: "Enjoy natural, non-surgical facial enhancement with Bio fillers, restoring volume and smoothing out fine lines effectively.",
        image: "/services1/biofillers.jpg",
        href: "/services/bio-filler"
    },
    {
        id: 9,
        title: "PRP Hair Loss",
        description: "Combat hair loss with PRP treatments, stimulating hair growth and strengthening follicles for thicker, healthier hair.",
        image: "/services1/hairloss.jpg",
        href: "/services/prp-hair-loss"
    },
    {
        id: 10,
        title: "PRP Facial",
        description: "Rejuvenate your skin with PRP Facials, boosting collagen and delivering a radiant, youthful complexion.",
        image: "/services1/PRPFacial.jpg",
        href: "/services/prp-treatment-london"
    },
    {
        id: 11,
        title: "PDO threads",
        description: "Lift and tighten sagging skin with PDO threads, a non-invasive solution for a firmer and rejuvenated appearance.",
        image: "/services1/threadspds.jpg",
        href: "/services/face-threads-lifting"
    },
    {
        id: 12,
        title: "Skin Booster",
        description: "Hydrate and refresh your skin with Skin Boosters, enhancing elasticity and restoring your natural glow effortlessly.",
        image: "/services1/skinbooster.jpg",
        href: "/services/skin-booster"
    },
    {
        id: 13,
        title: "Dermaplaning",
        description: "Exfoliate dead skin and remove peach fuzz with Dermaplaning, leaving your skin smooth, radiant, and makeup-ready.",
        image: "/services1/dermaplanning.jpg",
        href: "/services/Dermaplaning"
    }
]

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isHomepage = pathname === "/";
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isDropdownOpen) {
                setDropdownOpen(false);
            }
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDropdownOpen]);

    // Handle service card click
    const handleServiceClick = (href) => {
        setDropdownOpen(false);  // Close dropdown
        router.push(href);       // Navigate to service page
    };

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
        <section className={`fixed w-full transition-all duration-300 z-50 
            ${isScrolled
                ? 'bg-white shadow-md shadow-rose-50'
                : isHomepage
                    ? 'bg-black bg-opacity-10'
                    : 'bg-transparent'
            }`}>
            <nav className="z-60">
                <div className="max-w-[90%] mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <Link href="/" className="relative flex items-center">
                        {/* Soft shadow blending with background */}
                        {/* <div className="absolute inset-0 translate-x-0 translate-y-1 bg-white rounded-full blur-2xl opacity-60"></div> */}
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={400}
                            height={400}
                            priority
                            className="h-auto w-[130px] relative"
                        />
                    </Link>


                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <Menu className={`${isScrolled ? 'text-gray-800' : 'text-white hover:bg-transparent'}`} />                    </button>

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
                                        <li key={label} className="" ref={dropdownRef}>
                                            { }
                                            <motion.button
                                                onClick={toggleDropdown}
                                                className={`flex items-center py-2 px-3 md:p-0 text-xl transition-all duration-300 
        ${isScrolled ? 'text-gray-800' : 'text-[#fff]'}
        ${isActive
                                                        ? isScrolled
                                                            ? "border-b-2 border-rose-400 font-semibold"
                                                            : "border-b-2 border-white font-semibold"
                                                        : "hover:text-rose-300"
                                                    }`}
                                            >
                                                Services
                                                <div
                                                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ChevronDown className="ml-2" />
                                                </div>
                                            </motion.button>
                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <motion.div
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                        variants={dropdownAnimation}
                                                        className="absolute left-0 right-0 mt-4"
                                                    >
                                                        <div className="w-full">
                                                            <ul className="rounded-lg shadow-lg w-[90%] mx-auto p-4 text-black bg-white grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 text-centerr">
                                                                {services.map(({ image, title, href }, index) => (
                                                                    <li
                                                                        key={index}
                                                                        onClick={() => handleServiceClick(href)}
                                                                        className="flex flex-col items-center p-4 bg-rose-100 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:bg-rose-200 hover:scale-105"
                                                                    >
                                                                        <div className="w-16 h-16 mb-2 relative group">
                                                                            <Image
                                                                                src={image}
                                                                                alt={title}
                                                                                width={200}
                                                                                height={200}
                                                                                className="w-full h-full object-cover rounded-full"
                                                                            />
                                                                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                                                        </div>
                                                                        <h3 className="text-sm text-center font-medium text-gray-800">{title}</h3>
                                                                    </li>
                                                                ))}
                                                                <li

                                                                    onClick={() => router.push('/services')}
                                                                    className="flex flex-col items-center justify-center p-4 bg-rose-100 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:bg-rose-200 hover:scale-105"
                                                                >
                                                                    <h3 className="font-medium text-gray-800 text-xl">View All</h3>
                                                                    {/* <div className="w-16 h-16 mb-2 relative group">
                                                                    </div> */}
                                                                </li>
                                                            </ul>
                                                        </div>
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
                                            className={`block py-2 px-3 md:p-0 text-xl relative transition-all duration-300 
                                            ${isScrolled ? 'text-gray-800' : 'text-white'}
                                            ${isActive
                                                    ? isScrolled
                                                        ? "border-b-2 border-rose-400 font-semibold"
                                                        : "border-b-2 border-white font-semibold"
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
                        {/* <li>
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
                        </li> */}
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