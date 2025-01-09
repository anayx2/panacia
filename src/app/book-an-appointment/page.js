import MultiStepBooking from '@/components/AppointmentForm'
import React from 'react'

const page = () => {
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
                        Book an Appointment
                    </h2>
                </div>
            </section>
            <section>
                <MultiStepBooking />
            </section>
        </>)
}

export default page