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
        question: "Are thread lifts safe?",
        answer: "Yes, thread lifts are safe when performed by trained professionals, using dissolvable threads that stimulate collagen production."
    },
    {
        question: "Am I suitable for thread lifts?",
        answer: "Thread lifts are ideal for individuals with mild to moderate skin sagging, typically in their 30s to 50s, seeking a non-surgical facelift alternative."
    },
    {
        question: "Can thread lifts be used for jowls?",
        answer: "Yes, thread lifts are effective for lifting sagging skin around the jowls and restoring a more defined jawline."
    },
    {
        question: "What happens after my thread lift treatment?",
        answer: "You may experience mild swelling or bruising, but results are immediate, with further improvement as collagen is stimulated."
    },
    {
        question: "How long do thread lifts last?",
        answer: "Thread lifts can last anywhere from 12 to 18 months, with continued improvement over time due to collagen stimulation."
    },
    {
        question: "What is the recovery time after a thread lift?",
        answer: "Recovery is usually fast, with most patients able to return to their regular activities within a few days."
    },
    {
        question: "Are thread lifts painful?",
        answer: "Thread lifts are generally not painful, as a topical anaesthetic is used to ensure comfort during the procedure."
    }
];


export const metadata = {
    title: 'Face Thread Lifting Treatment London - Non-Surgical Skin Lift',
    description: ' Achieve a youthful, lifted appearance with our non-surgical Face Thread Lifting treatment at Panacea Clinic in London. Tighten skin, and rejuvenate your look.',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Face Threads Lifting</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Threads Lifting                             </h2>
                            <h3 className="">
                                Lift, Tighten, and Rejuvenate Your Skin with Non-Surgical Face Threads Lifting
                            </h3>
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we offer Face Threads Lifting as a revolutionary, non-surgical procedure to lift, tighten, and rejuvenate your face. This minimally invasive treatment provides an effective alternative to traditional facelifts, offering impressive results with minimal downtime. Whether you’re looking to reduce sagging skin, enhance facial contours, or restore youthful definition, face threads lifting is an excellent option for those seeking a refreshed and more youthful appearance.
                            <br />This non-surgical lifting treatment helps to:

                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>
                                        <span className='font-bold mx-1'>Lift sagging skin </span>
                                        around the cheeks, jawline, and neck.
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>
                                        <span className='font-bold mx-1'>Define facial contours,</span>
                                        including the cheekbones and jawline.
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>
                                        <span className='font-bold mx-1'>Smooth out fine lines and wrinkles</span>
                                        for a more youthful appearance.
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>
                                        <span className='font-bold mx-1'>Promote collagen production </span>
                                        for long-term skin rejuvenation.
                                    </span>                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/servicesPage/pdo/1.jpg'}
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
                    Why Choose Panacea Health & Beauty Clinic?              </h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we are committed to providing the highest quality of care and results with our face threads lifting treatments. Here’s why we are a trusted choice for facial rejuvenation:
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/servicesPage/pdo/2.jpg'}
                            alt="Facial profile showcasing natural skin texture and contours"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="space-y-3 flex flex-col">
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Experienced Practitioners: {' '}
                                </span>
                                Our skilled practitioners have extensive experience in administering face threads lifting, ensuring precise and natural-looking results.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    State-of-the-Art Facilities: {' '}
                                </span>
                                We use the latest technology and high-quality, FDA-approved PDO threads for optimal results and safety.
                            </p></div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Natural and Safe:{' '}
                                </span>
                                As the PDO threads dissolve naturally over time, the procedure is safe and biocompatible, with minimal risk of complications.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comfortable and Caring Environment: {' '}
                                </span>
                                We prioritise your comfort and safety throughout the treatment process, offering a welcoming and relaxing environment.                                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-4">
                        <h2>
                            What to Expect After Face Threads Lifting </h2>
                        <p className=" leading-relaxed">
                            One of the main benefits of face threads lifting is the minimal downtime required after the procedure. Here’s what you can expect:
                        </p>
                        <div className="space-y-2">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Mild Swelling and Bruising:                            </h4>
                            <p className=" leading-relaxed">
                                You may experience some swelling, redness, or bruising in the treated areas. These effects typically subside within a few days.
                            </p></div>

                        <div className="space-y-2">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                No Extended Downtime:                        </h4>
                            <p className=" leading-relaxed">
                                Most patients can return to work and daily activities the following day. Avoid strenuous physical activities for the first few days to ensure the best results.
                            </p>
                        </div>


                        <div className="space-y-2">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Visible Results: </h4>
                            <p className=" leading-relaxed">
                                You’ll begin to notice immediate lifting effects, with further improvements over the next few weeks as collagen production increases.                           </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={'/servicesPage/pdo/3.jpg'}
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
                    Frequently asked questions about Face Threads Lifting? </h2>
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