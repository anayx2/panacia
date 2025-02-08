'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import CounterSection from '@/components/about/Counter'
import TeamSlider from '@/components/about/Team'
import Link from 'next/link'

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.0, ease: 'easeOut' }
    }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.0, ease: 'easeOut' }
    }
};

const slideIn = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.0, ease: 'easeOut' }
    }
};

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function AboutPage() {
    return (
        <>
            <motion.section
                className='relative h-[50dvh] w-full'
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/banner-pages.png')"
                    }}
                />
                <div className="absolute inset-0 bg-black/20 " />
                <motion.div
                    className="relative z-10 flex h-full items-center justify-center px-4 text-white"
                    variants={fadeInUp}
                >
                    <motion.h2 variants={fadeInUp}
                        className="sm:text-4xl md:text-6xl lg:text-6xl text-white"
                    >
                        About Us
                    </motion.h2>
                </motion.div>
            </motion.section>

            <motion.section
                className="container mx-auto px-4 py-5 lg:min-h-[80vh] lg:py-20 max-w-[90%]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
            >
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div className="space-y-6" variants={slideIn}>
                        <h1 className="">
                            Empowering Your Health with Expert Care
                        </h1>
                        <motion.p variants={fadeInUp}>
                            Welcome to Panacea Clinic, where personalised care meets cutting-edge healthcare solutions. Our mission is to empower individuals with exceptional medical services designed to nurture health and well-being. With a team of highly skilled doctors and healthcare specialists, we are committed to delivering tailored care for every patient.
                            By combining the latest advancements in medical technology with a compassionate approach, we ensure the best possible outcomes. At Panacea Clinic, we believe every patient's journey to health is unique, and we are here to guide you every step of the way. Choose Panacea Clinic for expertise, trust, and unparalleled care that prioritises your well-being. Together, let's build a healthier, happier future.
                        </motion.p>
                        <Link href="/book-an-appointment">
                            <Button
                                variant="default"
                                className="mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 "
                            >
                                Book Your Consultation Today →
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="relative aspect-[2/3] overflow-hidden rounded-lg lg:aspect-[2/2]"
                        variants={fadeInUp}
                    >
                        <Image
                            src="/ab.jpeg"
                            alt="Biolite Aesthetic Clinic Interior"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <CounterSection />
            </motion.section>

            <motion.section
                className='flex justify-center w-full flex-col items-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
            >
                <motion.h2 variants={fadeInUp} className='text-center'>
                    Our Promise of Excellence
                </motion.h2>
                <div className="relative overflow-hidden w-[90%]">
                    <div className="container relative z-10 mx-auto px-4 py-16">
                        <motion.section
                            className="mb-20"
                            variants={fadeInUp}
                        >
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <motion.div
                                    className="flex flex-col justify-center space-y-4"
                                    variants={slideIn}
                                >
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Comprehensive Care for All
                                    </h2>
                                    <motion.p
                                        className="text-lg leading-relaxed text-muted-foreground"
                                        variants={fadeInUp}
                                    >
                                        Panacea Clinic delivers personalised health care services designed to meet individual needs. From preventive care to advanced treatments, we ensure a patient-centred approach. Our holistic methods focus on physical, mental, and emotional well-being, offering complete solutions under one roof. Trust us to prioritise your health with compassion and unmatched expertise.
                                    </motion.p>
                                </motion.div>
                                <motion.div
                                    className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]"
                                    variants={fadeInUp}
                                >
                                    <Image
                                        src="/about/ComprehensiveCare.jpg"
                                        alt="Professional consultation session"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </motion.div>
                            </div>
                        </motion.section>

                        <motion.section
                            className="mb-20"
                            variants={fadeInUp}
                        >
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <motion.div
                                    className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px] lg:order-1"
                                    variants={fadeInUp}
                                >
                                    <Image
                                        src="/about/State-of-the-Art Facilities.jpg"
                                        alt="Advanced treatment procedure"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>
                                <motion.div
                                    className="flex flex-col justify-center space-y-4 lg:order-2"
                                    variants={slideIn}
                                >
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        State-of-the-Art Facilities
                                    </h2>
                                    <motion.p
                                        className="text-lg leading-relaxed text-muted-foreground"
                                        variants={fadeInUp}
                                    >
                                        Experience world-class healthcare at Panacea Clinic, equipped with cutting-edge medical technologies. Our advanced tools enable precise diagnostics and effective treatments. We consistently update our facilities to align with the latest healthcare innovations, ensuring you receive the highest standard of care. Modern technology meets compassionate service for optimal patient outcomes.
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.section>

                        <motion.section
                            variants={fadeInUp}
                        >
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                <motion.div
                                    className="flex flex-col justify-center space-y-4"
                                    variants={slideIn}
                                >
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Experienced Medical Professionals
                                    </h2>
                                    <motion.p
                                        className="text-lg leading-relaxed text-muted-foreground"
                                        variants={fadeInUp}
                                    >
                                        Our team of skilled doctors and specialists brings unparalleled expertise to your care. With years of experience and dedication, they provide accurate diagnoses and effective treatments tailored to your needs. At Panacea Clinic, you'll benefit from a collaborative approach that ensures the best outcomes for your overall health and wellness.
                                    </motion.p>
                                </motion.div>
                                <motion.div
                                    className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]"
                                    variants={fadeInUp}
                                >
                                    <Image
                                        src="/Hydeafacial-Pictures/5.jpg"
                                        alt="Gentle aesthetic treatment"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="container mx-auto px-4 py-16 w-[90%]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
            >
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <motion.div
                        className="relative mx-auto w-full max-w-2xl mb-20"
                        variants={fadeInUp}
                    >
                        <div className="relative aspect-square w-4/5 overflow-hidden rounded-3xl">
                            <Image
                                src="/Hydeafacial-Pictures/6.jpg"
                                alt="Medical specialist performing treatment"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-20 right-0 aspect-[4/3] w-2/3 overflow-hidden rounded-3xl">
                            <Image
                                src="/Hydeafacial-Pictures/10.jpg"
                                alt="TMAN Clinic signage"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        variants={slideIn}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Commitment to Patient Satisfaction
                        </h2>
                        <motion.p
                            className="text-lg"
                            variants={fadeInUp}
                        >
                            Patient satisfaction drives everything we do at Panacea Clinic. We prioritise building trust by delivering compassionate, high-quality care. Our goal is to exceed expectations, creating a positive healthcare experience for every individual. From your first visit to follow-ups, we are here to support your journey toward better health and well-being.
                        </motion.p>
                        <Link href={'/services'}>
                            <Button
                                variant="default"
                                className="mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 "
                            >
                                READ MORE →
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <TeamSlider />
            </motion.section>
        </>
    )
}