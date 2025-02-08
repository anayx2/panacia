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
        question: "Which treatment is best for skin rejuvenation?",
        answer: "The best treatment depends on your skin concerns, with options like IPL, fractional lasers, microneedling, and Botox for wrinkles and volume loss."
    },
    {
        question: "Is skin rejuvenation worth it?",
        answer: "Yes, it can improve skin texture, reduce ageing signs, and address issues like scars and pigmentation, providing lasting results with minimal downtime."
    },
    {
        question: "What is the new treatment for skin rejuvenation?",
        answer: "New treatments include Ultherapy (ultrasound lifting) and radiofrequency skin tightening, which stimulate collagen for non-surgical lifting and tightening."
    },
    {
        question: "How long does skin rejuvenation last?",
        answer: "Results vary: Botox lasts 3-6 months, dermal fillers 6-12 months, and other treatments require maintenance every 6-12 months for continued results."
    },
    {
        question: "Is skin rejuvenation permanent?",
        answer: "No, skin rejuvenation is not permanent. Results last for months to a year, but treatments are needed to maintain them."
    }
];


export const metadata = {
    title: 'Skin Booster Treatment | Panacea Health & Beauty Clinic',
    description: 'Achieve radiant skin with advanced skin rejuvenation treatments at Panacea Health & Beauty Clinic. IPL, fractional lasers, Botox, dermal fillers, and more!!',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Best Skin Booster</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Hydrate Your Skin                               </h2>
                            <h3 className="">
                                with Advanced Skin Boosters
                            </h3>
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we offer skin booster treatments designed to rejuvenate and hydrate your skin, giving you a radiant, youthful glow. Whether you're dealing with dry skin, fine lines, or dull complexion, our skin boosters provide a long-lasting solution that improves skin quality from within.
                            <br />Skin booster treatments are an advanced skincare solution that involves the injection of a hyaluronic acid-based product directly into the skin. These treatments are designed to deeply hydrate and rejuvenate the skin, improving its texture, elasticity, and overall appearance.
                            <br /> key benefits include:

                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Deep Hydration</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Improved Skin Texture
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Natural-Looking Results
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Stimulates Collagen Production
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Non-Surgical Treatment</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/Skin-booster/1.jpg'}
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
                    Why Choose Panacea Health & Beauty Clinic? </h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we are committed to delivering exceptional skincare treatments tailored to your individual needs. Here’s why we’re the preferred choice for skin booster treatments:</p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/Skin-booster/2.jpg'}
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
                                    Experienced Professionals {' '}
                                </span>
                                Our team of skilled practitioners has extensive experience in administering skin booster treatments, ensuring safe and effective results.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Personalised Approach: {' '}
                                </span>
                                We take the time to understand your unique skincare concerns and customise each treatment to meet your specific goals.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    High-Quality Products:{' '}
                                </span>
                                We only use top-of-the-line, clinically tested products to ensure the best results for our clients.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comfortable and Safe Environment:  {' '}
                                </span>
                                We provide a relaxing, safe, and welcoming environment, prioritizing your comfort and well-being throughout the treatment process.                                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Long-Lasting Results:  {' '}
                                </span>
                                With regular treatments, you can maintain healthy, hydrated, and glowing skin that continues to improve over time.                                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-5">
                        <h2>
                            Areas Treated with Skin Boosters </h2>
                        <p className=" leading-relaxed">
                            While lip fillers in London are most commonly used on the face, they can also be effective in treating other areas of the body:

                        </p>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Face:                           </h4>
                            <p className=" leading-relaxed">
                                Target the forehead, cheeks, under-eye area, and jawline to improve hydration, smooth fine lines, and rejuvenate the skin.                            </p></div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Neck and Décolletage:                         </h4>
                            <p className=" leading-relaxed">
                                These areas are often prone to signs of ageing and can benefit from enhanced hydration and collagen stimulation.
                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Hands:                           </h4>
                            <p className=" leading-relaxed">
                                Improve the appearance of the hands, restoring moisture and youthful smoothness.                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Body:                           </h4>
                            <p className=" leading-relaxed">
                                Skin boosters can also be used on other areas of the body to address skin quality, elasticity, and overall texture.
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={'/4.jpg'}
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