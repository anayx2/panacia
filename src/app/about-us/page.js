import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import CounterSection from '@/components/about/Counter'
import TeamSlider from '@/components/about/Team'
import Link from 'next/link'

const about = () => {
    return (
        <>
            <section className='relative h-[60dvh] w-full'>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/sample/5.png')"
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                    <h2>
                        About Us
                    </h2>
                </div>
            </section>


            <section className="container mx-auto px-4 py-10 lg:min-h-[80vh] lg:py-20 max-w-[90%]">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div className="space-y-6">
                        <h1 className="">
                            Empowering Your Health with Expert care
                        </h1>

                        <p className="">
                            Welcome to Panacea Clinic, where personalized care meets cutting-edge healthcare solutions. Our mission is to empower individuals with exceptional medical services designed to nurture health and well-being. With a team of highly skilled doctors and healthcare specialists, we are committed to delivering tailored care for every patient.
                            By combining the latest advancements in medical technology with a compassionate approach, we ensure the best possible outcomes. At Panacea Clinic, we believe every patient’s journey to health is unique, and we are here to guide you every step of the way. Choose Panacea Clinic for expertise, trust, and unparalleled care that prioritizes your well-being. Together, let’s build a healthier, happier future.
                        </p>
                        <Link href="/book-an-appointment">
                            <Button
                                variant="default" className="mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 hover:text-black">
                                Book Your Consultation Today
                            </Button>
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[2/3] overflow-hidden rounded-lg lg:aspect-[2/2] ">
                        <Image
                            src="/about.png"
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
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Comprehensive Care for All                                    </h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        Panacea Clinic delivers personalized healthcare services designed to meet individual needs. From preventive care to advanced treatments, we ensure a patient-centered approach. Our holistic methods focus on physical, mental, and emotional well-being, offering complete solutions under one roof. Trust us to prioritize your health with compassion and unmatched expertise.
                                    </p>
                                </div>
                                <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
                                    <Image
                                        src="/Comprehensive.jpg"
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
                                        src="/stateoftheart.png"
                                        alt="Advanced treatment procedure"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="flex flex-col justify-center space-y-4 lg:order-2">
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        State-of-the-Art Facilities                                    </h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        Experience world-class healthcare at Panacea Clinic, equipped with cutting-edge medical technologies. Our advanced tools enable precise diagnostics and effective treatments. We consistently update our facilities to align with the latest healthcare innovations, ensuring you receive the highest standard of care. Modern technology meets compassionate service for optimal patient outcomes.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Holistic Approach Section */}
                        <section>
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Experienced Medical Professionals                                    </h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        Our team of skilled doctors and specialists brings unparalleled expertise to your care. With years of experience and dedication, they provide accurate diagnoses and effective treatments tailored to your needs. At Panacea Clinic, you’ll benefit from a collaborative approach that ensures the best outcomes for your overall health and wellness.
                                    </p>
                                </div>
                                <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
                                    <Image
                                        src="/professionals.jpg"
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
                                src="/Commitment1.jpg"
                                alt="Medical specialist performing treatment"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Second Image */}
                        <div className="absolute -bottom-20 right-0 aspect-[4/3] w-2/3 overflow-hidden rounded-3xl">
                            <Image
                                src="/Commitment.jpg"
                                alt="TMAN Clinic signage"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Commitment to Patient Satisfaction                        </h2>

                        <p className="text-lg ">
                            Patient satisfaction drives everything we do at Panacea Clinic. We prioritize building trust by delivering compassionate, high-quality care. Our goal is to exceed expectations, creating a positive healthcare experience for every individual. From your first visit to follow-ups, we are here to support your journey toward better health and well-being.
                        </p>

                        <Link href={'/services'}>
                            <Button
                                variant="default"
                                className="mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 hover:text-black"
                            >
                                READ MORE →
                            </Button>
                        </Link>
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