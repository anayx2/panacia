import { Check } from "lucide-react";
import Image from "next/image";

const services = [
    {

        title: "Dermal fillers",
        description: "Enhance your natural beauty with expert dermal filler treatments, tailored for volume, contour, and youthful rejuvenation.",
        features: [
            "Lip filler",
            "Tear Trough filler",
            "Cheek filler",
            "Chin Correction filler",
            "Nose filler",
        ],
    },
    {
        title: "Acne & Facial Treatments",
        description: "Achieve clear, glowing skin with treatments designed to target acne and enhance your complexion.",
        features: [
            "Deep Cleansing Treatment",
            "Brightening Treatment",
            "Acne Treatments",
            "Red Carpet Facial",
        ],
    },
    // Additional services added
    {
        title: "Hair Restoration",
        description: "Reveal radiant, refreshed skin with targeted exfoliation and renewal. Click to explore all Chemical Peel treatments.",

        features: [
            "PRP Therapy",
            "Scalp Microneedling",
            "Laser Hair Therapy",
            "Topical Treatments",
        ],
    },
    {
        title: "Body Contouring",
        description: "Enhance your natural beauty with expert dermal filler treatments, tailored for volume, contour, and youthful rejuvenation.",
        features: [
            "Fat Freezing",
            "Skin Tightening",
            "Ultrasound Cavitation",
            "Muscle Stimulation",
        ],
    },
];

export default function Services() {
    return (
        <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-[90%]">
                {services.map((service, index) => (
                    <>
                        <div
                            key={index}
                            className="group relative min-w-[400px] overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Card Content Container */}
                            <div className="relative">
                                {/* Title */}
                                <h3 className="mb-8 text-center text-lg font-semibold uppercase tracking-wider text-gray-700">
                                    {service.title}
                                </h3>

                                {/* Features List */}
                                <ul className="absolute left-0 top-24 -translate-x-full space-y-2 opacity-0 transition-all duration-300 delay-75 group-hover:translate-x-0 group-hover:opacity-100">
                                    {service.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center gap-2 text-gray-600"
                                        >
                                            <Check className="h-4 w-4 text-sage-600" />
                                            <span className="bg-[#fea6a4] text-black z-50">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Product Icon */}
                                <div className="relative mx-auto h-48 w-32 transition-all duration-300 group-hover:translate-x-32">
                                    <div className="absolute inset-0">
                                        <Image
                                            src={'/image1.jpg'}
                                            width={500}
                                            height={500}
                                            className="z-30 rounded-lg"
                                        />
                                        {/* <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="h-full w-full text-sage-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C9.23858 2 7 4.23858 7 7V8C7 10.7614 9.23858 13 12 13C14.7614 13 17 10.7614 17 8V7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8V7Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 14C5.34315 14 4 15.3431 4 17V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V17C20 15.3431 18.6569 14 17 14H7ZM6 17C6 16.4477 6.44772 16 7 16H17C17.5523 16 18 16.4477 18 17V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V17Z"
                                        fill="currentColor"
                                    />
                                </svg> */}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </>
                ))}

            </div>
        </>
    );
}
