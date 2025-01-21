'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Pin, Music2 } from 'lucide-react'
import { ImageGallery } from './FooterGallery'

const Footer = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <>
            <footer className="bg-gradient-to-b from-rose-100 to-rose-300 text-black px-4 py-16">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 w-[90%]">
                        {/* Logo and Contact Info */}
                        <div className={`space-y-6 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={250}
                                    height={250}
                                    className="text-amber-400"
                                />
                            </Link>
                            <div className="space-y-2">
                                <p>Pharmacentre Pharmacy,149 Edgware Rd,
                                    Tyburnia, London W2 2HU </p>
                            </div>
                            <div className='flex w-full gap-5'>
                                <span className='bg-rose-400 p-2 rounded-full inline-flex hover:bg-rose-500 transition-colors duration-300'>
                                    <Link href={'#'}>
                                        <Facebook className="text-black hover:text-white hover:scale-105 transition-transform duration-300" />
                                    </Link>
                                </span>
                                <span className='bg-rose-400 p-2 rounded-full'>
                                    <Link href={'https://www.instagram.com/panaceaskinclinic/'}>

                                        <Linkedin />
                                    </Link>
                                </span>
                                <span className='bg-rose-400 p-2 rounded-full'>
                                    <Link href={'https://www.tiktok.com/@panaceaskinclinic'}>
                                        <Music2 />
                                    </Link>
                                </span>

                                <span className='bg-rose-400 p-2 rounded-full'>
                                    <Link href={'#'}>
                                        <Pin />
                                    </Link>
                                </span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className={`transition-all duration-500 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h3 className="mb-6 text-2xl font-semibold">QUICK LINKS</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: 'About Us', href: '/about-us' },
                                    { name: 'Our Services', href: '/services' },
                                    { name: 'Blogs', href: '/blogs' },
                                    { name: 'Faq', href: '/faq' },
                                    { name: 'Gallery', href: '/gallery' },
                                    { name: 'Contact Us', href: '/contact-us' },
                                ].map((item, index) => (
                                    <li
                                        key={item.name}
                                        className="transition-all duration-500"
                                        style={{
                                            opacity: mounted ? 1 : 0,
                                            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
                                            transitionDelay: `${400 + (index * 100)}ms`
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="text-black transition-colors hover:text-rose-400"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className={`transition-all duration-500 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h3 className="mb-6 text-2xl font-semibold uppercase">Working Hours

                            </h3>
                            <ul className="space-y-2 ">
                                {[
                                    { name: 'Mon: 11 am - 7 pm', href: '' },
                                    { name: 'Wed: 11 am - 7 pm', href: '' },
                                    { name: 'Fri: 11 am - 7 pm', href: '' },
                                    { name: 'Sat: 11 am - 7 pm', href: '' },
                                    // { name: 'Anti-Wrinkle Treatments', href: '/services/anti-wrinkle-treatments' },
                                    // { name: 'Mesotherapy', href: '/services/mesotherapy' },
                                    // { name: 'Fat Dissolving', href: '/services/fat-dissolving' },
                                    // { name: 'Microneedling', href: '/services/microneedling' },
                                    // { name: 'Vitamin B12 Injection', href: '/services/vitamin-b12-injection' },
                                ].map((item, index) => (
                                    <li
                                        key={item.name}
                                        className="transition-all duration-500"
                                        style={{
                                            opacity: mounted ? 1 : 0,
                                            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
                                            transitionDelay: `${600 + (index * 100)}ms`
                                        }}
                                    >
                                        <span
                                            // href={item.href}
                                            className="text-black transition-colors hover:text-rose-400"
                                        >
                                            {item.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Map */}
                        <div className={`transition-all duration-500 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h3 className="mb-6 text-2xl font-semibold">GALLERY</h3>
                            <ImageGallery />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
