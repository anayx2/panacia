
import React from 'react'
import { Award, Fingerprint, Heart, ScanFace } from 'lucide-react'
import Image from 'next/image'

const features = [
    {
        icon: '/icons/ExpertiseandExperience.svg',
        title: "Expertise and Experience",
        description: "Our team consists of highly qualified professionals with extensive experience in delivering effective and personalised treatments."
    },
    {
        icon: '/icons/TailoredSolutions.svg',
        title: "Tailored Solutions",
        description: "We offer treatments customised to your unique needs, ensuring optimal results for your health and aesthetic goals."
    },
    {
        icon: '/icons/ArtTechnology.svg',
        title: "State-of-the-Art Technology",
        description: "We use advanced, cutting-edge equipment to deliver the best results in the most comfortable and efficient way possible."
    },
    {
        icon: '/icons/CommitmenttoCare.svg',
        title: "Commitment to Care",
        description: "We prioritise your well-being with a compassionate, patient-centred approach, ensuring you feel supported at every stage of your journey."
    }
]
const Whyus = () => {
    return (
        <>
            <section className="bg-white py-16 w-full ">
                <div className="container mx-auto px-4 max-w-7xl ">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-between text-center border border-rose-300 rounded-xl p-5"
                            >
                                {/* Icon */}
                                <div className="mb-6 rounded-full bg-rose-50 p-4">
                                    {/* <feature.icon className="h-8 w-8 text-rose-400" /> */}
                                    <Image src={feature.icon} alt="icon" width={50} height={50} />

                                </div>

                                {/* Title */}

                                <h3 className="mb-4 text-xl font-semibold text-rose-400">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whyus