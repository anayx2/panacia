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
                        <h1 className="">
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
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>
            <section>
                <CounterSection />
            </section>
            <section className='flex justify-center w-full flex-col items-center '>
                <h2>
                    Our Promise of Excellence
                </h2>
                <div className="relative overflow-hidden w-[90%]">
                    <div className="container relative z-10 mx-auto px-4 py-16">
                        {/* Consultation Section */}
                        <section className="mb-20">
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <h2 className="text-3xl font-bold tracking-tight text-[#1B4B5A] sm:text-4xl">
                                        Your Journey Starts With Our Personalised Consultations
                                    </h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        At GHB Clinic, we believe that every individual is unique, and so should be their aesthetic
                                        journey. We take the time to understand your personal goals, crafting bespoke treatment plans
                                        that enhance your natural features, not alter them. Your satisfaction and comfort are our top
                                        priorities from start to finish.
                                    </p>
                                </div>
                                <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
                                    <Image
                                        src="/aboutcover.jpg"
                                        alt="Professional consultation session"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Advanced Techniques Section */}
                        <section className="mb-20">
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px] lg:order-1">
                                    <Image
                                        src="/aboutcover.jpg"
                                        alt="Advanced treatment procedure"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="flex flex-col justify-center space-y-4 lg:order-2">
                                    <h2 className="text-3xl font-bold tracking-tight text-[#1B4B5A] sm:text-4xl">
                                        Advanced Techniques and Expertise
                                    </h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        Safety is at the core of everything we do. We use only the highest quality, FDA-approved products
                                        and adhere to strict safety protocols to ensure that every treatment is performed with the utmost
                                        care and professionalism. Our commitment to excellence means you can trust us to deliver
                                        consistent, beautiful outcomes every time and use the latest technology in the market.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Holistic Approach Section */}
                        <section>
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <h2 className="text-3xl font-bold tracking-tight text-[#1B4B5A] sm:text-4xl">
                                        A Gentle, Holistic Approach
                                    </h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        Aesthetic treatments aren't just about visible results; they're about how you feel before,
                                        during, and after the process. Our clinic is more than a treatment space. It's a sanctuary
                                        where you can unwind and trust our experienced team. We follow a gentle, holistic approach to
                                        ensure your comfort and well-being at every stage. From your initial consultation to the final
                                        outcome, we are committed to delivering exceptional care and results that leave you feeling
                                        confident and at ease.
                                    </p>
                                </div>
                                <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
                                    <Image
                                        src="/aboutcover.jpg"
                                        alt="Gentle aesthetic treatment"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
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
                <TeamSlider />
            </section>
        </>
    )
}

export default about