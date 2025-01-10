import MultiStepBooking from '@/components/AppointmentForm'
import ContactSection from '@/components/Contact'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <section className='relative h-[60dvh] w-full'>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/aboutcover.jpg')"
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                    <h2>
                        Book an Appointment
                    </h2>
                </div>
            </section>
            <section>
                <MultiStepBooking />
            </section>
            <section className="container mx-auto px-4 py-16 lg:w-[80%] md:w-[80%] sm:w-[95%] ">
                {/* Initial Discussion */}
                <div className="mb-24 flex flex-col items-start gap-12 lg:flex-row lg:items-center justify-between">
                    <div className="max-w-xl">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                                <span className="font-serif text-xl font-semibold text-rose-400">01</span>
                            </div>
                            <h2 className="text-3xl">Initial Discussion</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Your journey begins with an open conversation about your goals and
                            concerns. We take the time to truly understand what you want to
                            achieve, ensuring that our treatments align with your natural beauty.
                        </p>
                    </div>
                    <Image
                        src="/about-img1.jpg"
                        alt="Initial consultation with a medical professional"
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />

                </div>

                {/* Expert Assessment */}
                <div className="flex flex-col-reverse items-start gap-12 lg:flex-row lg:items-center justify-between">
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
                            <h2 className="text-3xl">Expert Assessment</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            One of our expert practitioners will conduct a detailed evaluation of your
                            concern, using their skills and experience to recommend the best
                            options tailored to your unique beauty.
                        </p>
                    </div>
                </div>

                <div className="mb-24 flex flex-col items-start gap-12 lg:flex-row lg:items-center justify-between">
                    <div className="max-w-xl">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50">
                                <span className="font-serif text-xl font-semibold text-rose-400">03</span>
                            </div>
                            <h2 className="text-3xl">Personalized Treatment Plan</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-600">
                            We will provide you with a customized treatment plan designed to enhance your natural beauty, ensuring subtle, elegant results that reflect your unique features.
                        </p>
                    </div>
                    <Image
                        src="/about-img1.jpg"
                        alt="Initial consultation with a medical professional"
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />

                </div>

            </section>
            <section className='flex flex-col text-center items-center justify-center py-10 mt-20 gap-10'>
                <ContactSection />
            </section>
        </>)
}

export default page