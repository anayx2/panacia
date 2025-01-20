'use client'
import MultiStepBooking from '@/components/AppointmentForm'
import ContactSection from '@/components/Contact'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='relative h-[50dvh] w-full'
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/banner-pages.png')"
                    }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative z-10 flex h-full items-center justify-center px-4 text-white"
                >
                    <h2>Book an Appointment</h2>
                </motion.div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <MultiStepBooking />
            </motion.section>

            <section className="container mx-auto px-4 py-10 lg:w-[80%] md:w-[80%] sm:w-[95%]">
                {/* First Section */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 flex flex-col items-start gap-12 lg:flex-row lg:items-center justify-between"
                >
                    <div className="max-w-xl">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                                <span className="font-serif text-xl font-semibold text-rose-400">01</span>
                            </div>
                            <h2 className="text-3xl">Transform Your Skin Today</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Experience cutting-edge treatments that rejuvenate and restore your natural beauty.
                            Book your appointment now and begin your journey to radiant skin.
                        </p>
                    </div>
                    <Image
                        src="/about-img1.jpg"
                        alt="Initial consultation with a medical professional"
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />
                </motion.div>

                {/* Second Section */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col-reverse items-start gap-12 lg:flex-row lg:items-center justify-between"
                >
                    <Image
                        src="/about-img1.jpg"
                        alt="Initial consultation with a medical professional"
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />
                    <div className="max-w-xl">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                                <span className="font-serif text-xl font-semibold text-rose-400">02</span>
                            </div>
                            <h2 className="text-3xl">Book Your Free Consultation Today</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Unlock personalised treatment options with a one-on-one consultation.
                            Our experts will guide you toward the best solution tailored to your needs.
                        </p>
                    </div>
                </motion.div>

                {/* Third Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 flex flex-col items-start gap-12 lg:flex-row lg:items-center justify-between"
                >
                    <div className="max-w-xl mt-10">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                                <span className="font-serif text-xl font-semibold text-rose-400">03</span>
                            </div>
                            <h2 className="text-3xl">What To Expect During Your Consultation</h2>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className='flex flex-col'
                            >
                                <span className='font-bold'>personalisedConsultation</span>
                                <span className="text-lg text-gray-600">
                                    Expect a one-on-one session where our experts assess your unique needs,
                                    goals, and preferences to tailor the best treatment plan for you.
                                </span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className='flex flex-col'
                            >
                                <span className='font-bold'>In-depth Skin Analysis</span>
                                <span className="text-lg text-gray-600">
                                    We'll perform a thorough analysis of your skin, discussing concerns and
                                    exploring how our treatments can improve your skin's health and appearance.
                                </span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className='flex flex-col'
                            >
                                <span className='font-bold'>Treatment Recommendations</span>
                                <span className="text-lg text-gray-600">
                                    Based on your consultation, we'll suggest the most suitable treatments
                                    and explain their benefits to ensure you make an informed decision.
                                </span>
                            </motion.div>
                        </div>
                    </div>
                    <Image
                        src="/about-img1.jpg"
                        alt="Initial consultation with a medical professional"
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />
                </motion.div>
            </section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex flex-col text-center items-center justify-center pb-10 gap-10'
            >
                <ContactSection />
            </motion.section>
        </>
    )
}

export default page