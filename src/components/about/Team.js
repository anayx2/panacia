'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const teamMembers = [
    {
        name: "Dr. Sarah Johnson",
        role: "Aesthetic Dermatologist",
        image: "/about/doc1.jpg",
        qualification: "MBBS, MD (Dermatology)"
    },

    {
        name: "Dr. Michael Chen",
        role: "Plastic Surgeon",
        image: "/about/doc2.jpg",
        qualification: "MD, FACS"
    },
    {
        name: "Dr. Emma Williams",
        role: "Cosmetic Dentist",
        image: "/about/doc3.jpg",
        qualification: "DDS, FICOI"
    },
    {
        name: "Dr. James Anderson",
        role: "Skin Expert",
        image: "/about/doc2.jpg",
        qualification: "MD, FISHRS"
    },
    {
        name: "Dr. Maria Garcia",
        role: "Laser Specialist",
        image: "/about/doc1.jpg",
        qualification: "MD, PhD"
    },
    {
        name: "Dr. David Kim",
        role: "Aesthetic Physician",
        image: "/about/doc3.jpg",
        qualification: "MBBS, MSc"
    }
]

export default function TeamSlider() {
    return (
        <section className=" py-16">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="">
                        Meet Our Experts
                    </h2>
                    <p className="mt-4 text-lg">
                        Meet the Experts Behind Your Health Transformation
                    </p>
                </div>

                {/* Team Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        slidesToScroll: 1,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {teamMembers.map((member, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/5"
                            >
                                <Card className="border-0 bg-gradient-to-b from-rose-100 to-rose-300">
                                    <CardContent className="p-2">
                                        <div className="group relative overflow-hidden">
                                            {/* Image Container */}
                                            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Overlay with member info */}
                                            <div className="rounded-xl absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                {/* <h3 className="text-lg font-semibold">{member.name}</h3>
                                                <p className="text-sm text-gray-200">{member.role}</p>
                                                <p className="text-xs text-gray-300">{member.qualification}</p> */}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" /> */}
                </Carousel>
            </div>
        </section>
    )
}

