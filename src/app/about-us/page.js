import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import CounterSection from '@/components/about/Counter'
import TeamSlider from '@/components/about/Team'

const about = () => {
    return (
        <>
            <section className='relative h-[40dvh] w-full'>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/aboutcover.jpg')"
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                    <h2>
                        About Us
                    </h2>
                </div>
            </section>


            <section className="container mx-auto px-4 py-16 lg:min-h-[80vh] lg:py-24 max-w-[90%]">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div className="space-y-6">
                        <h1 className="font-serif text-4xl font-light tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                            Panacea Aesthetic Clinic
                        </h1>

                        <p className="">
                            Beauty is found in the clinic. This is our belief, and the core of our clinic Method. Though aesthetics can help rejuvenate your skin or body, it is truly the confidence you find within that exudes true beauty. Here, at Panacea Health & Beauty Clinic, our.

                            passion is to help each and every patient flourish confidently from the inside, out.

                            We pride ourselves on treating our patients with state-of-the-art products and technology, safely and effectively.

                            We welcome patients from all walks of life and encourage you to bring any question or concern to your consultation. We look forward to the opportunity to have you as a patient as we continue our mission to bring natural, beautiful, and effective aesthetic treatments to the men and women in London.
                        </p>

                        <Button
                            variant="default" className="mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 hover:text-black">
                            READ MORE →
                        </Button>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[16/12] shadow-lg">
                        <Image
                            src="/about-img1.jpg"
                            alt="Biolite Aesthetic Clinic Interior"
                            fill
                            className="object-cover "
                            priority
                        />
                    </div>
                </div>
            </section>
            <section>
                <CounterSection />
            </section>
            <section className="container mx-auto px-4 py-16 w-[90%]">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Images Container */}
                    <div className="relative mx-auto w-full max-w-2xl">
                        {/* First Image */}
                        <div className="relative aspect-square w-4/5 overflow-hidden rounded-3xl">
                            <Image
                                src="/about-img1.jpg"
                                alt="Medical specialist performing treatment"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Second Image */}
                        <div className="absolute bottom-0 right-0 aspect-[4/3] w-2/3 overflow-hidden rounded-3xl">
                            <Image
                                src="/aboutcover.jpg"
                                alt="TMAN Clinic signage"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="">
                            Our medical specialists
                        </h2>

                        <p className="text-lg ">
                            Our attentively selected medical excellence team binds together decades of transformative
                            specialized care and represents the cornerstone of our philosophy and discipline behind designing
                            each program and procedure with your distinctive goals at its center.
                        </p>

                        <Button
                            variant="default"
                            className="mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 hover:text-black"
                        >
                            READ MORE →
                        </Button>
                    </div>
                </div>
            </section>
            <section>
                <TeamSlider/>
            </section>
        </>
    )
}

export default about