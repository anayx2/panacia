'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Send } from 'lucide-react'

const Footer = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <>
            <footer className="bg-gradient-to-b from-rose-100 to-rose-300 text-black px-4 py-16">
            {/* <footer className="bg-gradient-to-r from-[#FEC2BA] to-[#FFA7A9] text-black px-4 py-16"> */}
                <div className="container mx-auto flex justify-center items-center">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center w-[90%]">
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
                        </div>

                        {/* About Us */}
                        <div className={`transition-all duration-500 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h3 className="mb-6 text-2xl font-semibold">About Us</h3>
                            <ul className="space-y-4">
                                {[
                                    'ABOUT US',
                                    'OUR EXPERTS',
                                    'TOUR CLINIC',
                                    'WE ARE HIRING',
                                    'SITEMAP'
                                ].map((item, index) => (
                                    <li
                                        key={item}
                                        className="transition-all duration-500"
                                        style={{
                                            opacity: mounted ? 1 : 0,
                                            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
                                            transitionDelay: `${400 + (index * 100)}ms`
                                        }}
                                    >
                                        <Link
                                            href="#"
                                            className="text-black transition-colors hover:text-white"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Patient Resources */}
                        <div className={`transition-all duration-500 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h3 className="mb-6 text-2xl font-semibold">Patient Resources</h3>
                            <ul className="space-y-4">
                                {[
                                    'CONCIERGE SERVICES',
                                    'CLINIC POLICY',
                                    'PATIENT SURVEY'
                                ].map((item, index) => (
                                    <li
                                        key={item}
                                        className="transition-all duration-500"
                                        style={{
                                            opacity: mounted ? 1 : 0,
                                            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
                                            transitionDelay: `${600 + (index * 100)}ms`
                                        }}
                                    >
                                        <Link
                                            href="#"
                                            className="text-black transition-colors hover:text-white"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Join The Community */}
                        <div className={`transition-all duration-500 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h3 className="mb-6 text-2xl font-semibold">Join The Community</h3>
                            <div className="h-[150px] overflow-hidden w-[100%] rounded-lg md:h-[200px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19862.214288866795!2d-0.166726!3d51.517311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab507196af5%3A0xe5cfb58af2aabf40!2sPharmacentre!5e0!3m2!1sen!2sus!4v1736402860884!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="GHB Clinic Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer