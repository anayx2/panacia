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
import Autoplay from "embla-carousel-autoplay"


export default function Reviews() {
    const testimonials = [
        {
            quote: "Panacea Clinic has truly changed my life! The team is so professional and caring. I’ve had the anti-wrinkle treatment, and I couldn’t be happier with the results!",
            name: "John T.",
            location: "Sydney, Australia",
            image: "/avatar.png"
        },
        {
            quote: "I had PRP for my hair loss and the results have been amazing! My hair is thicker, and I feel more confident. Highly recommend the clinic!",
            name: "Sophia L.",
            location: "Bangkok, Thailand",
            image: "/avatar-male.png"
        },
        {
            quote: "I went in for a Vitamin B12 injection, and I’ve never felt more energised. The staff was so welcoming, and I’ll definitely be coming back for more treatments.",
            name: "David P.",
            location: "Nairobi, Kenya",
            image: "/avatar.png"
        },
        {
            quote: "I recently tried their dermaplaning service, and I’m beyond impressed with how smooth and refreshed my skin feels. This clinic truly cares about its clients.",
            name: "Olivia M.",
            location: "Toronto, Canada",
            image: "/avatar-male.png"
        },
        {
            quote: "Had the PDO threads treatment for a more lifted look, and the results are incredible. The procedure was quick and painless, and the staff made me feel at ease throughout",
            name: "Linda H.",
            location: "Singapore",
            image: "/avatar.png"
        }
    ]

    return (
        <section className="container flex items-center justify-center mx-auto px-4 py-16 overflow-hidden">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="lg:max-w-7xl md:max-w-6xl sm:max-w-auto relative"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4 basis-1/3"
                        >
                            <div className=" h-full rounded-2xl bg-rose-50 p-6 shadow-sm flex flex-col justify-between">
                                {/* Quote Icon */}
                                <Quote className="mb-4 h-6 w-6 text-rose-500" />

                                {/* Testimonial Text */}
                                <blockquote className="mb-6 line-clamp-4 text-sm text-left text-gray-600">
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
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <CarouselPrevious className="p-5 bg-rose-400 text-white" />
                    <CarouselNext className="p-5 bg-rose-400 text-white" />
                </div>
            </Carousel>
        </section>
    )
}

