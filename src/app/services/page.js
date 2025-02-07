'use client'
import React, { useState, useEffect } from 'react';
import MultiStepBooking from '@/components/AppointmentForm';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
        image: "/Mesotherapy/2.jpg",
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
        description: "Rehydrate, rejuvenate, and replenish essential nutrients with our custom IV Drip therapies for optimal wellness.",
        image: "/services1/ivdrip.jpg",
        href: "/services/IV-Drip"
    },
    {
        id: 8,
        title: "Bio filler  ",
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
        image: "/Skin-booster/1.jpg",
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

export default function ServicesPage() {
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (hoveredId !== null) {
                setHoveredId(null);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hoveredId]);

    return (<>
        <section className='relative h-[50dvh] w-full'>
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/banner-pages.png')"
                }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div
                className="relative z-10 flex h-full items-center justify-center px-4 text-white"
            >
                <h2 className="sm:text-4xl md:text-6xl lg:text-6xl text-white"
                >
                    Services
                </h2>
            </div>
        </section>
        <section className="px-4 py-20">
            <div className="container mx-auto w-[90%]">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative"
                            onMouseEnter={() => setHoveredId(service.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="overflow-hidden rounded-2xl">
                                <div className="relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={800}
                                        height={800}
                                        className="aspect-[6/3] w-full object-cover z-30 rounded-2xl"
                                    />
                                </div>

                                <div className='flex w-full justify-center -mt-5 z-20'>
                                    <div className="bg-gradient-to-b from-rose-100 to-rose-300 w-[95%] z-30 rounded-2xl">
                                        <h3 className="p-4 text-center text-xl font-semibold text-black">
                                            {service.title}
                                        </h3>

                                        <div
                                            className={`overflow-hidden px-6 text-center text-black transition-all duration-300 ease-in-out ${hoveredId === service.id ? 'max-h-[300px] py-6' : 'max-h-0'
                                                }`}
                                        >
                                            <p className="mb-6">
                                                {service.description}
                                            </p>
                                            <Link
                                                href={service.href}
                                                className="inline-block rounded-md bg-rose-500 text-sm font-medium text-white"
                                            >
                                                <Button className="px-6 py-2 ">
                                                    Read More
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className='bg-rose-50 py-20'>
            <h2 className='text-center'>
                Schedule Your Serenity
            </h2>
            <MultiStepBooking />
        </section>
    </>);
}