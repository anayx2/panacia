import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from 'lucide-react'


const topMenuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Services', href: '/services' },
    { name: 'Blogs', href: '/blogs' },

]

const bottomMenuItems = [
    { name: 'Faq', href: '/faq' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact-us' },
]

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-rose-100 to-rose-300 text-black py-12">
            <div className="container mx-auto px-4">
                {/* Logo and Main Content */}
                <div className="flex flex-col items-center mb-12">
                    <Image
                        src="/logo.png"
                        alt="Ayurbalance Logo"
                        width={300}
                        height={300}
                        className="mb-6"
                    />
                    {/* <h2 className="text-black text-3xl font-medium mb-6">
                        Beauty is found in the clinic. This is our belief, and the core of our clinic Method.

                    </h2> */}

                    {/* Contact Information */}
                    <div className="flex flex-col items-center gap-4 mb-8">
                        <div className="hidden md:flex items-center gap-2 text-black">
                            <MapPin className="w-5 h-5" />
                            <span>Pharmacentre Pharmacy,149 Edgware Rd, Tyburnia, London W2 2HU</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                <a href="tel:07388869697" className="hover:text-[#C8A97E] transition-colors">
                                    07388869697
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                <a href="mailto:info@panacea-clinic.co.uk" className="hover:text-[#C8A97E] transition-colors">
                                    info@panacea-clinic.co.uk                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center items-center w-full flex-col ">
                    {/* Top Menu Items */}
                    <nav className="flex items-start w-[90%] gap-8">
                        {topMenuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Divider Line */}
                    <div className="w-[90%] h-px bg-[#000]/30 my-4" />

                    {/* Bottom Menu Items */}
                    <div className="flex justify-between items-start md:flex-row lg:flex-row flex-col w-[90%]">
                        <nav className="flex  gap-8 mb-8 w-full">
                            {bottomMenuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        {/* Copyright */}
                        <div className="text-center text-sm text-black w-full">
                            <p className="w-auto">Copyright © 2024 Ayurbalance, LLC. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

