import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Pin, Music2, Linkedin, Facebook, Instagram } from 'lucide-react'


const topMenuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Services', href: '/services' },
    { name: 'Blogs', href: '/blogs' },
]

const bottomMenuItems = [
    { name: 'FAQ\'s', href: '/faq' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact-us' },
]

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-rose-100 to-rose-300 text-black pt-5">
            <div className="container mx-auto ">
                {/* Logo and Main Content */}
                <div className="flex flex-col items-center mb-5">
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
                        <div className="hidden md:flex items-center gap-2 text-black hover:text-rose-400 transition-colors">
                            <MapPin className="w-5 h-5" />
                            <span>Pharmacentre Pharmacy,149 Edgware Rd, Tyburnia, London W2 2HU</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                            <div className="flex items-center gap-2 hover:text-rose-400 transition-colors">
                                <Phone className="w-5 h-5 " />
                                <a href="tel:+447388869697
" className="">
                                    +44 7388 869697

                                </a>
                            </div>
                            <div className="flex items-center gap-2 hover:text-rose-400  transition-colors">
                                <Mail className="w-5 h-5 " />
                                <a href="mailto:info@panacea-clinic.co.uk" className="">
                                    info@panacea-clinic.co.uk                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden lg:hidden">
                        <div className='flex w-auto gap-5 '>
                            <span className='bg-rose-400 p-2 rounded-full inline-flex hover:bg-rose-500 transition-colors duration-300'>
                                <Link href={'#'}>
                                    <Facebook className="text-black hover:text-white hover:scale-105 transition-transform duration-300" />
                                </Link>
                            </span>

                            <span className='bg-rose-400 p-2 rounded-full inline-flex hover:bg-rose-500 transition-colors duration-300'>
                                <Link href={'#'}>
                                    <Music2 className="text-black hover:text-white hover:scale-105 transition-transform duration-300" />
                                </Link>
                            </span>

                            <span className='bg-rose-400 p-2 rounded-full'>
                                <Link href={'https://www.instagram.com/panaceaskinclinic/'}>
                                    <Instagram />                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center items-center w-full flex-col ">
                    {/* Top Menu Items */}
                    <div className="flex justify-between items-center w-[90%]">
                        <nav className="flex items-start w-auto gap-8">
                            {topMenuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="hover:text-rose-500 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="hidden md:block lg:block">
                            <div className='flex w-auto gap-5 '>
                                <span className='bg-rose-500 p-2 rounded-full inline-flex hover:scale-105 transition-transform duration-300'>
                                    <Link href={'#'}>
                                        <Facebook
                                            className="text-black hover:text-white hover:scale-105 transition-transform duration-300" />
                                    </Link>
                                </span>

                                <span
                                    className='bg-rose-500 p-2 rounded-full inline-flex hover:scale-105 transition-transform duration-300'>
                                    <Link href={'#'}>
                                        <Music2
                                            className="text-black hover:text-white hover:scale-105 transition-transform duration-300" />
                                    </Link>
                                </span>

                                <span
                                    className='bg-rose-500 p-2 rounded-full inline-flex hover:scale-105 transition-transform duration-300'>
                                    <Link
                                        className="text-black hover:text-white hover:scale-105 transition-transform duration-300"
                                        href={'https://www.instagram.com/panaceaskinclinic/'}>
                                        <Instagram />                                </Link>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="w-[90%] h-px bg-[#000]/30 my-4" />

                    {/* Bottom Menu Items */}
                    <div className="flex justify-between items-start md:flex-row lg:flex-row flex-col w-[90%]">
                        <nav className="flex  gap-8 mb-8 w-full">
                            {bottomMenuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="hover:text-rose-500 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        {/* Copyright */}

                        <div className="text-center md:text-right lg:text-right text-sm text-black w-full">
                            <p className="w-auto">Copyright © 2025 Panacea Health & Beauty Clinic . All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

