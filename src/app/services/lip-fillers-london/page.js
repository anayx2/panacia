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
        question: "How long do lip fillers last?",
        answer: "Lip fillers typically last between 6 to 12 months, depending on the product used and individual factors."
    },
    {
        question: "Is lip filler a surgery?",
        answer: "No, lip filler is a non-surgical treatment involving injectable gel to enhance lip volume and shape."
    },
    {
        question: "How safe are lip fillers?",
        answer: "Lip fillers are generally safe when performed by a qualified professional, with minimal risks when proper procedures are followed."
    },
    {
        question: "Can I eat after lip fillers?",
        answer: "Yes, you can eat after lip fillers, but it's best to avoid very hot or hard foods for the first few hours."
    },
    {
        question: "Can I use Vaseline after lip fillers?",
        answer: "Yes, using Vaseline or lip balm can help keep your lips moisturized and comfortable after the treatment."
    },
    {
        question: "Can I brush my teeth after lip fillers?",
        answer: "Yes, you can brush your teeth, but be gentle around the lip area for the first 24 hours."
    }
];


export const metadata = {
    title: 'Best Lip filler | London  | Panacea Health & Beauty Clinic',
    description: ' Discover the best lip filler treatments in London at Panacea Health & Beauty Clinic. Enhance your lips with expert care for natural-looking, beautiful results.',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Lip fillers in London</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Enhance Your Smile                               </h2>
                            <h3 className="">
                                Beautiful, Natural-Looking Lip fillers in London
                            </h3>
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we specialize in providing expertly administered lip fillers in London that enhance your natural lip shape and volume. Whether you're looking to restore youthful plumpness, define your lip contours, or add symmetry to your smile, our lip filler treatments are designed to give you beautiful, natural-looking results.
                            <br /> Lip fillers are a non-surgical cosmetic treatment used to enhance the volume and shape of the lips. The procedure involves the injection of dermal fillers, typically made from hyaluronic acid, into specific areas of the lips.
                            <br /> key benefits include:

                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Fuller, Plumper Lips</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Safe and Reversible
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Non-Surgical Treatment
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Customisable Results</span>
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
                    Why Choose Panacea Health & Beauty Clinic?              </h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we are dedicated to providing exceptional care and beautiful, natural results with lip fillers in London. Here's why our clients trust us:                </p>

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
                                    Personalised Approach: {' '}
                                </span>
                                We take time to understand your goals and customise your treatment to achieve the perfect lip enhancement tailored to your unique features.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    FDA-Approved fillers: {' '}
                                </span>
                                We use only the highest quality, FDA-approved hyaluronic acid fillers for maximum safety and effectiveness.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comfort and Care:{' '}
                                </span>
                                We provide a comfortable, welcoming environment where you can relax during your treatment. We prioritise your comfort and satisfaction at every step.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Long-Lasting Results: {' '}
                                </span>
                                Our clients enjoy stunning, long-lasting results with lip fillers that enhance their natural beauty and confidence.                                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-4">
                        <h2>
                            The Lip filler Treatment Process </h2>
                        <p className=" leading-relaxed">
                            When you choose lip fillers in London at Panacea Health & Beauty Clinic, you can expect a smooth and comfortable experience:

                        </p>
                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Consultation                            </h4>
                            <p className=" leading-relaxed">
                                Your journey begins with a thorough consultation where we discuss your desired outcome and assess your lip shape and facial features. We'll ensure that your treatment plan is customised to suit your needs and goals.
                            </p></div>

                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Treatment                       </h4>
                            <p className=" leading-relaxed">
                                The procedure itself is quick, typically lasting about 30 minutes. Our experienced professionals will inject the filler into specific areas of the lips to add volume, smooth out wrinkles, and define the lip line. We use a topical numbing cream to Minimise any discomfort during the procedure.
                            </p>
                        </div>


                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Aftercare                           </h4>
                            <p className=" leading-relaxed">
                                There's minimal downtime after lip filler treatment. You may experience some swelling or bruising, which typically resolves within a few days. We'll provide you with simple aftercare instructions to ensure the best results, such as avoiding excessive pressure on the lips and refraining from vigorous activities for the first 24 hours.                            </p>
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
                    Frequently asked questions about Skin Rejuvenation </h2>
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