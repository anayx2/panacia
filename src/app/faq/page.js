'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'
import { motion } from 'framer-motion'

// Animation variants
const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
}

const slideIn = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
}

const accordionItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
}

const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

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
        answer: "Yes, we offer Personalised Consultations to understand your needs and recommend suitable treatments."
    },
    {
        question: "What are the benefits of mesotherapy?",
        answer: "Mesotherapy rejuvenates and tightens skin, improves hair quality, and helps with fat removal."
    },
    {
        question: "Is there any downtime after treatments?",
        answer: "Most treatments have minimal to no downtime, though some may cause mild redness temporarily."
    },
]

const faq2 = [
    {
        question: "How soon can I see results?",
        answer: "Results vary by treatment, but many clients see improvements immediately or within a few days."
    },
    {
        question: "Are your treatments suitable for all skin types?",
        answer: "Yes, we customise treatments to suit different skin types and individual needs."
    },
    {
        question: "How experienced are your staff?",
        answer: "Our team consists of highly skilled professionals with years of experience in aesthetic treatments."
    },
    {
        question: "What makes Panacea health and beauty clinic different from others?",
        answer: "We combine cutting-edge treatments with Personalised Care, ensuring the best results and patient satisfaction."
    }
]

const Page = () => {
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
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                    className="relative z-10 flex h-full items-center justify-center px-4 text-white"
                    variants={fadeInUp}
                >
                    <motion.h2
                        variants={textReveal}
                        initial="hidden"
                        animate="visible"
                        className="sm:text-4xl md:text-6xl lg:text-6xl text-white"

                    >
                        Frequently Asked Questions
                    </motion.h2>
                </motion.div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mx-auto px-4 py-16 flex justify-center items-center"
            >
                <motion.div
                    variants={staggerContainer}
                    className="w-[90%]"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <motion.div variants={textReveal}>
                            <motion.span
                                variants={fadeInUp}
                                className="text-sm text-gray-600 mb-2 block"
                            >
                                Asked Questions
                            </motion.span>
                            <motion.h2
                                variants={fadeInUp}
                                className="text-4xl font-bold mb-6"
                            >
                                Got Questions on Your Mind? Check Out Our Company FAQs
                            </motion.h2>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="flex items-center"
                        >
                            <p className="text-gray-600">
                                Enhance your appearance with our professional and effective aesthetic treatments at Panacea Health & Beauty.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="flex gap-10 mt-10 lg:flex-row md:flex-row flex-col"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="w-full"
                        >
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faqItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={accordionItemVariant}
                                        custom={index}
                                    >
                                        <AccordionItem
                                            value={`item-${index}`}
                                            className="border rounded-lg bg-rose-300 hover:bg-gradient-to-r from-rose-100 to-rose-300 transition-colors duration-300"
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
                                    </motion.div>
                                ))}
                            </Accordion>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="w-full"
                        >
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faq2.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={accordionItemVariant}
                                        custom={index}
                                    >
                                        <AccordionItem
                                            value={`item-${index}`}
                                            className="border rounded-lg bg-rose-300 hover:bg-gradient-to-r from-rose-100 to-rose-300 transition-colors duration-300"
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
                                    </motion.div>
                                ))}
                            </Accordion>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}

export default Page