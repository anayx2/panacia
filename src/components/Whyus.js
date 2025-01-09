import React from 'react'
import { Award, Fingerprint, Heart, ScanFace } from 'lucide-react'

const features = [
    {
        icon: Award,
        title: "25+ Years Of Industry-Leading Expertise",
        description: "Our team of highly skilled professionals is led by top experts in aesthetic medicine, combining years of experience with the latest advancements to deliver exceptional results."
    },
    {
        icon: Fingerprint,
        title: "Tailored Treatments for Natural Enhancement",
        description: "We believe in enhancing your unique features, not altering them. Each treatment plan is carefully personalized to refine your appearance while maintaining your natural beauty."
    },
    {
        icon: Heart,
        title: "Commitment to Safety and Excellence",
        description: "With a focus on safety and precision, we use only the highest quality FDA approved products and techniques, ensuring that every treatment is performed with the utmost care and professionalism"
    },
    {
        icon: ScanFace,
        title: "Proven Results You Can Trust",
        description: "Our clients trust us for our consistent, beautiful outcomes. See for yourself with our real before and after transformations that showcase the subtle yet stunning enhancements we achieve."
    }
]
const Whyus = () => {
    return (
        <>
            <section className="bg-white py-16 w-full ">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center border border-rose-300 rounded-xl p-5"
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