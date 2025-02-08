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
        question: "What is a polynucleotide treatment?",
        answer: "Polynucleotide treatment uses natural molecules from salmon DNA to stimulate collagen production, hydrate, and rejuvenate the skin for a youthful glow."
    },
    {
        question: "Is polynucleotide better than Botox?",
        answer: "Polynucleotides focus on skin regeneration and hydration, while Botox temporarily relaxes muscles to reduce wrinkles. Which is better depends on your goals."
    },
    {
        question: "Are polynucleotide injections safe?",
        answer: "Yes, they are safe when administered by a qualified professional, with minimal risks and side effects."
    },
    {
        question: "What are the side effects of polynucleotide injections?",
        answer: "Side effects are typically mild, such as temporary redness, swelling, or bruising at the injection site."
    },
    {
        question: "Can the 3-month injection cause infertility?",
        answer: "No, polynucleotide injections do not affect fertility. They are safe for use without influencing reproductive health."
    }
];


export const metadata = {
    title: 'Polynucleotide Treatment in London - Skin Rejuvenation',
    description: 'Discover the benefits of Polynucleotide treatment at Panacea Clinic in London. Boost collagen, hydrate skin, and reduce fine lines, youthful appearance. ',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Polynucleotide</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Polynucleotide Treatment                             </h2>
                            <h3 className="">
                                Revitalize Your Skin and Hair with Polynucleotide Therapy

                            </h3>
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we offer Polynucleotide Treatment as a cutting-edge solution for rejuvenating your skin and promoting hair restoration. This advanced therapy uses naturally derived compounds to stimulate the body’s regenerative processes, improving skin texture, elasticity, and overall health. Whether you are looking to combat signs of ageing or address thinning hair, Polynucleotide Treatment is a non-surgical option designed to help you look and feel your best.
                            <br /> At Panacea Health & Beauty Clinic, we offer Polynucleotide Treatment that provides a wide range of benefits for skin and hair:


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
                                    <span>Hydration and Elasticity
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Non-Surgical Solution
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Hair Restoration

                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Natural and Safe
                                    </span>
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
                    Why Choose Panacea Health & Beauty Clinic? </h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we are proud to offer Polynucleotide Treatment that helps our clients achieve their aesthetic goals with natural-looking, rejuvenated results. Here’s why we are the preferred choice:</p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src="/blog.png"
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
                                    Experienced Professionals: {' '}
                                </span>
                                Our team of qualified and skilled practitioners is highly experienced in administering Polynucleotide Treatment. We ensure your comfort and safety throughout the entire process.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Tailored Treatment Plans: {' '}
                                </span>
                                We take the time to understand your unique concerns and design a personalised treatment plan to meet your specific needs and goals.                           </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Advanced Techniques and Technology:{' '}
                                </span>
                                We use the latest advancements in skincare and hair restoration treatments to provide effective and lasting results.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Natural and Biocompatible:  {' '}
                                </span>
                                As the treatment uses naturally occurring compounds, there’s minimal risk of side effects, and you can feel confident knowing your body is utilizing its own regenerative power.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comfortable and Safe Environment:  {' '}
                                </span>
                                We prioritise your well-being and comfort, providing a safe, professional, and welcoming environment for your treatments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-5">
                        <h2>
                            How Does Polynucleotide Treatment Work? </h2>
                        <p className=" leading-relaxed">
                            The PRP treatment process at Panacea Health & Beauty Clinic is straightforward and involves a few simple steps:</p>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Consultation:                           </h4>
                            <p className=" leading-relaxed">
                                Your treatment begins with a Personalised Consultation
                                , where our expert practitioners will assess your skin or hair concerns, discuss your goals, and create a customised treatment plan tailored to your needs.                            </p></div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Preparation and Injection:                         </h4>
                            <p className=" leading-relaxed">
                                The procedure involves the injection of polynucleotides into the targeted areas. For skin rejuvenation, this might include areas such as the face, neck, or décolletage. For hair restoration, polynucleotides are injected into the scalp to stimulate hair follicle activity.                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Healing and Regeneration:</h4>
                            <p className=" leading-relaxed">
                                Once injected, the polynucleotides promote tissue regeneration by stimulating collagen and elastin production, improving hydration, and revitalizing skin or hair follicles. The natural healing response of your body takes over, delivering long-lasting improvements.
                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Application of PRP:                         </h4>
                            <p className=" leading-relaxed">
                                Once your PRP is prepared, it is carefully injected into the targeted areas of your skin or scalp. For skin rejuvenation, the PRP is injected into the face, neck, or décolletage to boost collagen and skin texture. For hair restoration, PRP is injected into the scalp to encourage hair follicle regeneration and promote thicker hair growth.                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Recovery and Results:                        </h4>
                            <p className=" leading-relaxed">
                                There is minimal downtime associated with Polynucleotide Treatment. You may experience mild redness or swelling in the treated areas, but this is temporary. Results typically begin to appear within 2 to 3 weeks, with optimal outcomes becoming visible over the following months as your skin or hair continues to regenerate..                           </p>
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
                    Frequently asked questions about Polynucleotide? </h2>
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