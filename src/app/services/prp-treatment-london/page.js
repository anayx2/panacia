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
        question: "Is PRP good for your face?",
        answer: "Yes, it helps improve skin texture, tone, and reduces fine lines, wrinkles, and scars."
    },
    {
        question: "How long does face PRP last?",
        answer: "Results typically last 6-12 months."
    },
    {
        question: "How many PRP treatments are needed?",
        answer: "Usually, 3 treatments spaced 4-6 weeks apart, with maintenance every 6 months."
    },
    {
        question: "Is PRP better than Botox?",
        answer: "PRP improves skin texture and collagen, while Botox targets dynamic wrinkles."
    },
    {
        question: "Who should avoid PRP?",
        answer: "Those with blood disorders, active skin infections, cancer, or pregnancy should avoid PRP."
    },
    {
        question: "Is PRP painful?",
        answer: "Some discomfort during the procedure, but numbing cream helps Minimise pain."
    }
];


export const metadata = {
    title: 'PRP Treatment (Platelet Rich Plasma) London | Skin Rejuvenation',
    description: 'Experience PRP treatment at Panacea Clinic in London for youthful skin and enhanced hair growth. Safe, effective, and natural results. Book your consultation today!',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Platelet-Rich-Plasma (PRP) for Face</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                PRP Treatment London                              </h2>
                            <h3 className="">
                                Revitalize Your Skin and Hair with Platelet-Rich Plasma Therapy
                            </h3>
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we offer advanced PRP Treatment in London to rejuvenate your skin, restore your hair’s thickness, and promote natural healing. Platelet-Rich Plasma (PRP) therapy is a cutting-edge, non-surgical treatment that uses your body’s own blood to stimulate regeneration, providing natural results for a youthful appearance and thicker hair.
                            <br /><span className='font-bold'>PRP (Platelet-Rich Plasma) Treatment</span> involves using your own blood to extract concentrated platelets, which are then injected into the targeted areas of your skin or scalp. Platelets contain growth factors that are essential for tissue healing and regeneration.
                            <br /> key benefits include:

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
                                    <span>Hair Restoration
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Natural Results
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Minimal Downtime

                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Non-Surgical Treatment
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/Hydeafacial-Pictures/12.jpg'}
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
                    At Panacea Health & Beauty Clinic, we are committed to providing high-quality  PRP treatments in London to help you achieve your aesthetic goals safely and effectively. Here’s why clients trust us:</p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/servicesPage/prp-face/3.jpg'}
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
                                Our team of skilled practitioners has extensive experience with PRP treatments, ensuring a safe and comfortable experience with optimal results.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    personalised treatment Plans: {' '}
                                </span>
                                We tailor each treatment to meet your specific needs, ensuring you achieve the most natural-looking, effective results.                           </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    FDA-Approved Equipment:{' '}
                                </span>
                                We use state-of-the-art equipment and strictly adhere to medical standards to ensure your safety and satisfaction.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Natural and Safe:  {' '}
                                </span>
                                Since PRP treatment uses your body’s own cells, there’s no risk of allergic reactions or complications associated with foreign substances.                                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comfortable Environment:  {' '}
                                </span>
                                We prioritise your comfort, offering a relaxing and welcoming environment throughout the treatment process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-5">
                        <h2>
                            How Does PRP Treatment Work? </h2>
                        <p className=" leading-relaxed">
                            The PRP treatment process at Panacea Health & Beauty Clinic is straightforward and involves a few simple steps:         </p>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Consultation:                           </h4>
                            <p className=" leading-relaxed">
                                Your journey begins with a Personalised Consultation
                                where we discuss your goals, medical history, and any concerns you may have. Based on this, we will design a tailored treatment plan for you.                            </p></div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Blood Draw:                         </h4>
                            <p className=" leading-relaxed">
                                A small amount of your blood (typically 10-20 mL) is drawn, similar to a routine blood test. This blood is then processed in a centrifuge to separate the plasma and platelets from the red blood cells, creating a concentrated PRP solution.                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Application of PRP:</h4>
                            <p className=" leading-relaxed">
                                Reduce fat deposits in the inner and outer thigh areas to help contour and shape the legs.
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
                                Since PRP is a natural treatment using your body’s own blood, recovery time is minimal. You may experience mild redness or swelling in the treated area, but this typically resolves within a few days. Visible results can begin to show within 3 to 6 weeks, with optimal results achieved after several sessions.                           </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/4] w-full">
                        <Image
                            src={'/Hydeafacial-Pictures/2.jpg'}
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
                    Frequently asked questions about PRP Treatment? </h2>
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