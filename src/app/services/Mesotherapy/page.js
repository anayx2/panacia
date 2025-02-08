import ImageComparison from '@/components/Compare'
import Reviews from '@/components/Reviews'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        question: "What is mesotherapy?",
        answer: "A treatment where nutrients are injected into the skin to improve skin health, reduce fat, or promote hair growth."
    },
    {
        question: "Is one session of mesotherapy worth it?",
        answer: "One session may show mild results, but multiple sessions are usually needed for optimal effects."
    },
    {
        question: "What is the downside of mesotherapy?",
        answer: "Possible bruising, swelling, infection, or allergic reactions."
    },
    {
        question: "Is PRP better than mesotherapy?",
        answer: "PRP is more natural (using your blood), while mesotherapy targets specific concerns with various ingredients."
    },
    {
        question: "Which is better, microneedling or mesotherapy?",
        answer: "Microneedling improves skin texture; mesotherapy addresses skin health and fat reduction."
    }
];


export const metadata = {
    title: 'Mesotherapy for Skin Rejuvenation | Panacea Health & Beauty',
    description: 'Rejuvenate your skin with Mesotherapy at Panacea Health & Beauty Clinic. Target wrinkles, ageing, and cellulite for a youthful, refreshed look. Contact Us!',
}
const page = () => {
    return (
        <>
            <section className='relative h-[50dvh] w-full'>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/banner-pages.png')"
                    }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'>  Mesotherapy </h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Mesotherapy Treatment at Panacea Health & Beauty Clinic                               </h2>
                            {/* <h3 className="">
                                Smooth Wrinkles and Restore Volume Instantly                            </h3> */}
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            Welcome to Panacea Health & Beauty Clinic, where we offer advanced, effective, and non-invasive treatments designed to enhance your natural beauty. One of our most popular services is Mesotherapy Treatment, a revolutionary procedure that targets various skin concerns, leaving you with glowing, rejuvenated skin.
                            <br />
                            Mesotherapy Treatment is a non-surgical procedure that involves the injection of a customised blend of vitamins, minerals, amino acids, and hyaluronic acid directly into the mesodermal layer of your skin. Benefits of Mesotherapy Treatment:


                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Skin Rejuvenation</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Hydration
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Reduces Fine Lines and Wrinkles

                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Brightens and Evens Skin Tone</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Minimally Invasive
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/Mesotherapy/2.jpg'}
                            width={800}
                            height={800}
                            className='w-full h-auto rounded-lg'
                            alt='service'
                        />

                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col justify-center items-center w-[100%]'>

                    <h3 className='text-center my-5'>
                        Real Results: Before & After

                    </h3>
                    <div className='flex lg:flex-row md:flex-row sm:flex-col justify-center items-center gap-6 p-2 w-[90%]'>
                        <ImageComparison
                            beforeImage="/image1.jpg"
                            afterImage="/services/Dermal.jpg"
                        />
                        <ImageComparison
                            beforeImage="/image1.jpg"
                            afterImage="/services/Dermal.jpg"
                        />
                        <ImageComparison
                            beforeImage="/image1.jpg"
                            afterImage="/services/Dermal.jpg"
                        />
                    </div>
                </div>

            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <h2 className="text-center">
                    Why Choose Panacea Health & Beauty Clinic ?              </h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we are committed to offering top-quality treatments in a luxurious, comfortable environment. Our team of highly trained professionals ensures that each mesotherapy session is safe, effective, and tailored to your specific skin needs.</p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/Mesotherapy/3.jpg'}
                            alt="Facial profile showcasing natural skin texture and contours"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="space-y-6 flex flex-col">
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Personalised care and consultations to understand your goals </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Expertise in advanced skin treatments            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                A clean, comfortable, and welcoming clinic environment
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Use of the latest, medically-approved techniques and products
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-8">
                        <h2>
                            Mesotherapy Injections: What to Expect </h2>
                        <div className="space-y-4">
                            {/* <h4 className="text-2xl text-rose-400 font-medium">
                                Personalised Consultation

                            </h4> */}
                            <p className=" leading-relaxed">
                                When you come to Panacea Health & Beauty Clinic for mesotherapy injections, our skilled and experienced practitioners will start by discussing your skin concerns and goals. After a thorough consultation, we will create a personalised treatment plan that best suits your needs.
                            </p></div>

                        <div className="space-y-4">
                            {/* <h4 className="text-2xl text-rose-400 font-medium">
                                The Treatment:                         </h4> */}
                            <p className=" leading-relaxed">
                                The procedure typically takes between 30 to 45 minutes. During this time, multiple microinjections are administered to the targeted areas of your face or body. While the injections may cause slight discomfort, the procedure is generally well-tolerated, and any mild redness or swelling usually subsides within a few hours.</p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={'/Mesotherapy/4.jpg'}
                            alt="Panacea Health & Beauty Clinic consultation with practitioner"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>
            <section className='flex flex-col text-center items-center justify-center py-5'>
                <h3>
                    Transformations in Their Own Words
                </h3>
                <Reviews />
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <h2 className='text-center mb-10'>
                    Frequently asked questions about Mesotherapy? </h2>
                <div className="mx-auto">
                    <Accordion type="single" collapsible className="space-y-2">
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-gray-200 last:border-0"
                            >
                                <AccordionTrigger className="text-lg  hover:no-underline text-rose-500">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="leading-relaxed">
                                    <p>
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>)
}

export default page