import React from 'react'
import { Award, Fingerprint, Heart, ScanFace } from 'lucide-react'

const features = [
    {
        icon: Award,
        title: "Expertise and Experience",
        description: "Our team consists of highly qualified professionals with extensive experience in delivering effective and personalized treatments."
    },
    {
        icon: Fingerprint,
        title: "Tailored Solutions",
        description: "We offer treatments customized to your unique needs, ensuring optimal results for your health and aesthetic goals."
    },
    {
        icon: Heart,
        title: "State-of-the-Art Technology",
        description: "We use advanced, cutting-edge equipment to deliver the best results in the most comfortable and efficient way possible."
    },
    {
        icon: ScanFace,
        title: "Commitment to Care",
        description: "We prioritize your well-being with a compassionate, patient-centered approach, ensuring you feel supported at every stage of your journey."
    }
]
const Whyus = () => {
    return (
        <>
            <section className="bg-white py-16 w-full ">
                <div className="container mx-auto px-4 max-w-7xl md:max-w-6xl">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-between text-center border border-rose-300 rounded-xl p-5"
                            >
                                {/* Icon */}
                                <div className="mb-6 rounded-full bg-rose-50 p-4">
                                    <feature.icon className="h-8 w-8 text-rose-400" />
                                </div>

                                {/* Title */}

                                <h3 className="mb-4 text-xl font-semibold text-rose-400">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600">
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