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
    title: 'Fat Dissolving Injections | Non-Surgical Fat Reduction',
    description: 'Achieve a sculpted body with fat dissolving injections at Panacea Health & Beauty Clinic. Target stubborn fat areas for permanent results without surgery!',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Fat Dissolving</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Fat Dissolving Injections                              </h2>
                            <h3 className="">
                                Target Stubborn Fat with Advanced Fat Dissolving Treatments
                            </h3>
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we offer fat dissolving injections designed to target and reduce stubborn pockets of fat that are resistant to diet and exercise. Whether you’re struggling with areas like the chin, abdomen, or thighs, our fat dissolving treatments provide a non-surgical, minimally invasive solution for achieving a more sculpted, toned appearance.
                            <br /> Fat dissolving injections are a non-surgical treatment that uses a specialised solution, usually based on a naturally occurring compound, to break down and permanently remove stubborn fat cells. The active ingredient, commonly deoxycholic acid, is injected directly into areas with excess fat.
                            <br /> key benefits include:

                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Quick Procedure and Minimal Downtime</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Customisable Treatment Areas
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Long-Lasting Results
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Target Stubborn Fat
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
                            src={'/servicesPage/FatDissolving/image.png'}
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
                    At Panacea Health & Beauty Clinic, we offer expert care and customised treatment plans to help you achieve your desired body shape. Here’s why clients choose us for their fat dissolving injections </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/servicesPage/FatDissolving/image-2.png'}
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
                                Our team consists of skilled professionals who have extensive experience in administering fat dissolving injections. You can trust us to deliver safe and effective results.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Personalised Care: {' '}
                                </span>
                                We tailor each treatment to meet your specific needs, ensuring that your goals are achieved with natural-looking, sculpted results.                           </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    FDA-Approved Treatments:{' '}
                                </span>
                                We only use high-quality, FDA-approved products to ensure safety and effectiveness during your treatment.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comfortable Environment:  {' '}
                                </span>
                                We prioritise your comfort and well-being, providing a relaxing, professional atmosphere where you can feel at ease throughout the procedure.                                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Minimal Downtime:  {' '}
                                </span>
                                Our fat dissolving injections offer quick results with little to no downtime, allowing you to return to your daily activities with ease.                                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-5">
                        <h2>
                            Areas Treated with Fat Dissolving Injections </h2>
                        <p className=" leading-relaxed">
                            Fat dissolving injections can be used on various areas of the body, including:
                        </p>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Double Chin:                           </h4>
                            <p className=" leading-relaxed">
                                The most popular treatment area, fat dissolving injections can target and reduce fat under the chin, improving the jawline and neck contour.                            </p></div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Stomach Area:                         </h4>
                            <p className=" leading-relaxed">
                                Treat stubborn pockets of fat around the abdomen, including love handles and muffin tops.                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Thighs:                           </h4>
                            <p className=" leading-relaxed">
                                Reduce fat deposits in the inner and outer thigh areas to help contour and shape the legs.
                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Arms:                          </h4>
                            <p className=" leading-relaxed">
                                Target fat under the arms (bat wings) for a more toned appearance.                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Back and Bra Line:                         </h4>
                            <p className=" leading-relaxed">
                                Sculpt the back and eliminate unwanted fat along the bra line.                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[2/3] w-full">
                        <Image
                            src={'/servicesPage/FatDissolving/image-1.png'}
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
                    Frequently asked questions about Fat Dissolving Injections </h2>
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