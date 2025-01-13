import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'

const faqItems = [
    {
        question: "What services do you offer?",
        answer: "We provide a range of aesthetic treatments including mesotherapy, dermal fillers, anti-wrinkle injections, and more."
    },
    {
        question: "Are your treatments safe?",
        answer: "Yes, all our treatments are performed by highly trained professionals using safe, advanced techniques."
    },
    {
        question: "How can I book an appointment?",
        answer: "You can book online through our website or contact us directly via phone or email."
    },
    {
        question: "Do you offer consultations?",
        answer: "Yes, we offer personalized consultations to understand your needs and recommend suitable treatments."
    },
    {
        question: "What are the benefits of mesotherapy?",
        answer: "Mesotherapy rejuvenates and tightens skin, improves hair quality, and helps with fat removal."
    },
    {
        question: "Is there any downtime after treatments?",
        answer: "Most treatments have minimal to no downtime, though some may cause mild redness temporarily."
    },

];

const faq2 = [
    {
        question: "How soon can I see results?",
        answer: "Results vary by treatment, but many clients see improvements immediately or within a few days."
    },
    {
        question: "Are your treatments suitable for all skin types?",
        answer: "Yes, we customize treatments to suit different skin types and individual needs."
    },
    {
        question: "How experienced are your staff?",
        answer: "Our team consists of highly skilled professionals with years of experience in aesthetic treatments."
    },
    {
        question: "What makes Panacea Clinic different from others?",
        answer: "We combine cutting-edge treatments with personalized care, ensuring the best results and patient satisfaction."
    }
]


const page = () => {
    return (
        <>
            <section className='relative h-[60dvh] w-full'>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/sample/3.png')"
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                    <h2>Frequently Asked Questions </h2>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Text Content */}
                    <div>
                        <span className="text-sm text-gray-600 mb-2 block">
                            Asked Questions
                        </span>
                        <h2 className="text-4xl font-bold mb-6">
                            Got Questions on Your Mind? Check Out Our Company FAQs                        </h2>

                    </div>
                    <div>
                        <p className="text-gray-600">
                            Enhance your appearance with our professional and effective aesthetic treatments at Panacea Health & Beauty.                        </p>
                    </div>
                    {/* Right Column - FAQ Accordion */}
                </div>
                <div className="flex gap-10 mt-10 lg:flex-row md:flex-row flex-col">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border rounded-lg bg-rose-300 hover:bg-gradient-to-r from-rose-100 to-rose-300 transition-colors"
                            >
                                <AccordionTrigger className="hover:no-underline px-6 py-4 [&[data-state=open]>div>svg]:rotate-180">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-left font-medium pr-4">{item.question}</span>

                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 text-gray-600">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faq2.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border rounded-lg bg-rose-300 hover:bg-gradient-to-r from-rose-100 to-rose-300 transition-colors"
                            >
                                <AccordionTrigger className="hover:no-underline px-6 py-4 [&[data-state=open]>div>svg]:rotate-180">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-left font-medium pr-4">{item.question}</span>
                                        <svg
                                            className="h-5 w-5 shrink-0 transition-transform duration-200"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 text-gray-600">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>
    )
}

export default page