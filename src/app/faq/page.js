import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'

const faqItems = [
    {
        question: "Which cheek filler lasts the longest?",
        answer: "Premium hyaluronic acid fillers used in our clinic typically last between 12-18 months, with some varieties lasting up to 24 months depending on the specific product and individual factors."
    },
    {
        question: "How long do cheek fillers last?",
        answer: "Cheek fillers generally last between 6-12 months, though this can vary depending on the type of filler used, the amount injected, and individual factors such as metabolism and lifestyle."
    },
    {
        question: "How long do cheek fillers take to settle?",
        answer: "Initial swelling typically subsides within 1-2 weeks, with final results visible after 2-4 weeks when the filler has fully integrated with your tissue."
    },
    {
        question: "What does cheek filler do?",
        answer: "Cheek fillers restore volume, enhance facial contours, lift sagging skin, and create a more youthful appearance by replacing lost volume and supporting facial structure."
    },
    {
        question: "How much are cheek fillers?",
        answer: "The cost varies depending on the amount of filler needed and the specific product used. We provide detailed pricing during your consultation."
    },

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
                    <h2>Book an Appointment</h2>
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
                            HAVE ANY QUESTIONS ON MINDS! TAKE A LOOK COMPANY FAQS
                        </h2>

                    </div>
                    <div>
                        <p className="text-gray-600">
                            Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam aperiam eaque ipsa quillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        </p>
                    </div>
                    {/* Right Column - FAQ Accordion */}
                </div>
                <div className="flex gap-10 mt-10">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border rounded-lg bg-rose-50 hover:bg-gray-100 transition-colors"
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
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border rounded-lg bg-rose-50 hover:bg-gray-100 transition-colors"
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