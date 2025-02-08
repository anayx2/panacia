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
        question: "Which is better: Botox or dermal fillers?",
        answer: "Botox relaxes muscles to reduce expression lines, while dermal fillers restore volume and smooth deeper wrinkles. Both can be used together for comprehensive rejuvenation."
    },
    {
        question: "Is dermal filler a surgery?",
        answer: "No, dermal fillers are non-surgical injections to restore volume or smooth wrinkles."
    },
    {
        question: "What are the risks of fillers?",
        answer: "Risks include bruising, swelling, infection, and in rare cases, allergic reactions or lumps."
    },
    {
        question: "What is the age limit for fillers?",
        answer: "There’s no strict age limit, but fillers are typically used by those over 21 to address ageing or enhance features."
    },
    {
        question: "Are fillers good for the face?",
        answer: "Yes, dermal fillers are great for adding volume, smoothing wrinkles, and enhancing facial features."
    },
    {
        question: "Are dermal fillers permanent?",
        answer: "No, dermal fillers are temporary and typically last between 6 months to 2 years."
    }
];


export const metadata = {
    title: 'Dermal fillers Treatments | Panacea Health & Beauty Clinic',
    description: ' Enhance lips, cheeks, & jawline with dermal filler treatments at Panacea Health & Beauty Clinic. Restore volume and smooth wrinkles using top-quality products.',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'>  Dermal fillers</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Non-Surgical Dermal fillers                                </h2>
                            <h3 className="">
                                Smooth Wrinkles and Restore Volume Instantly                            </h3>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            At Panacea Health & Beauty Clinic, we believe that everyone deserves to feel confident in their skin. Dermal fillers are a revolutionary solution for those looking to enhance their natural beauty and restore youthful volume.
                            <br />Dermal fillers are innovative cosmetic treatments that have transformed the way we approach facial aesthetics. These injectable substances, typically composed of hyaluronic acid, collagen, or other biocompatible materials, are designed to restore volume and smooth out wrinkles in the skin. With their ability to enhance facial contours and provide a youthful appearance, dermal fillers have become a go-to solution for those seeking non-surgical options for rejuvenation.
                            <br />key benefits include:


                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Instant Results</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Non-Surgical Treatment
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Natural-Looking Enhancements
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Customisable Treatments</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/services1/wrinke.jpg'}
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
                    At Panacea Health & Beauty Clinic, our priority is providing exceptional care and natural results with dermal fillers. Here's why our clients trust us for their aesthetic treatments:                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src="/blog.png"
                            alt="Facial profile showcasing natural skin texture and contours"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="space-y-6 flex flex-col">
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Experienced Practitioners: {' '}
                                </span>
                                Our experienced team of professionals specializes in dermal filler treatments, ensuring precise, safe, and effective results.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Personalised Approach {' '}
                                </span>
                                We take time to understand your goals, carefully selecting the right filler and treatment plan to achieve the best outcome for you.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Advanced Techniques{' '}
                                </span>
                                We use the latest techniques to ensure that each treatment is comfortable and yields the most natural-looking results.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    FDA-Approved Products {' '}
                                </span>
                                We only use high-quality, FDA-approved dermal fillers, ensuring safety and lasting results.                                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-8">
                        <h2>
                            What to Expect During Your Dermal filler Treatment? </h2>
                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Personalised Consultation

                            </h4>
                            <p className=" leading-relaxed">
                                During your consultation, we’ll discuss your aesthetic goals, review your medical history, and assess the areas you want to treat. We’ll create a personalisedplan that aligns with your desired outcome.

                            </p></div>

                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                The Treatment:                         </h4>
                            <p className=" leading-relaxed">
                                The procedure itself is quick and straightforward. Dermal fillers are injected into targeted areas using a fine needle. Most treatments take about
                                10 to 15 minutes, depending on the areas being treated. Local anaestheticis often used to Minimise discomfort.</p>
                        </div>


                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Aftercare                           </h4>
                            <p className=" leading-relaxed">
                                After the treatment, there may be some mild swelling, bruising, or redness at the injection sites, but this typically resolves within a few hours to a few days. You can resume most of your daily activities immediately after the procedure, though we recommend avoiding intense physical activity for 24 hours. Our team will provide aftercare instructions to ensure you get the best results.
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src="/image1.jpg"
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
                    Frequently asked questions about dermal fillers? </h2>
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