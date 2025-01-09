'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Reviews() {
    const testimonials = [
        {
            quote: "I am so thankful that Treehouse has allowed me to get started and follow something that I'm truly passionate about.",
            name: "Jon Farrell",
            location: "Sydney, Australia",
            image: "/avatar.png"
        },
        {
            quote: "Watching the Treehouse videos, I was having little \"Ahaaa, that makes sense!\" moments, the videos are broken down into just the right amount to be able to absorb, without getting too frustrated.",
            name: "Toby Powell",
            location: "Bangkok, Thailand",
            image: "/avatar-male.png"
        },
        {
            quote: "I'm starting a business based on the web, and that's huge to me. I am attributing this to Treehouse because it gave me the skills under my belt, and the confidence to start my own business.",
            name: "Martha Chumo",
            location: "Nairobi, Kenya",
            image: "/avatar.png"
        },
        {
            quote: "The step-by-step approach and practical projects helped me build a strong foundation in web development.",
            name: "Sarah Johnson",
            location: "Toronto, Canada",
            image: "/avatar-male.png"
        },
        {
            quote: "The community support and comprehensive curriculum made my learning journey enjoyable and effective.",
            name: "David Chen",
            location: "Singapore",
            image: "/avatar.png"
        }
    ]

    return (
        <section className="container mx-auto px-4 py-16 overflow-hidden">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="h-full rounded-2xl bg-rose-50 p-6 shadow-sm flex flex-col justify-between">
                                {/* Quote Icon */}
                                <Quote className="mb-4 h-6 w-6 text-rose-500" />

                                {/* Testimonial Text */}
                                <blockquote className="mb-6 line-clamp-4 text-sm text-gray-600">
                                    "{testimonial.quote}"
                                </blockquote>

                                {/* Author Info */}
                                <div className="flex items-center justify-between gap-3 ">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

