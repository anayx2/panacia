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
        question: "What does microneedling treatment do?",
        answer: "Microneedling stimulates collagen production by creating tiny wounds in the skin, improving texture, reducing scars, and promoting skin rejuvenation."
    },
    {
        question: "Is microneedling good for your face?",
        answer: "Yes, it's effective for improving skin texture, reducing wrinkles, acne scars, and pigmentation."
    },
    {
        question: "How long does microneedling last?",
        answer: "Results can last 3-6 months, but maintenance sessions are needed for prolonged effects."
    },
    {
        question: "What is the disadvantage of microneedling?",
        answer: "It may cause temporary redness, swelling, bruising, or irritation, and there's a risk of infection if not done properly."
    },
    {
        question: "Who should avoid microneedling?",
        answer: "People with active acne, eczema, psoriasis, or certain skin infections should avoid microneedling."
    },
    {
        question: "Is microneedling painful?",
        answer: "There can be mild discomfort, but a numbing cream is typically applied to Minimise pain."
    },
    {
        question: "Does microneedling work permanently?",
        answer: "No, results are not permanent, but they can be long-lasting with proper skincare and maintenance treatments."
    }
];


export const metadata = {
    title: 'Microneedling for Skin Renewal | Panacea Health & Beauty',
    description: 'Enhance your skins texture and appearance with Microneedling at Panacea Health & Beauty Clinic. Improve scars, fine lines, and skin tone with this treatment.',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Microneedling </h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Microneedling at Panacea Health & Beauty Clinic                             </h2>
                            {/* <h3 className="">
                                Revitalize Your Skin and Hair with Platelet-Rich Plasma Therapy
                            </h3> */}
                        </div>

                        <p className="mt-5 ">
                            Welcome to Panacea Health & Beauty Clinic, where we offer innovative and effective skin treatments to help you achieve healthier, smoother, and more radiant skin. One of our most sought-after treatments is microneedling, a minimally invasive procedure that stimulates your skin’s natural healing process and improves its overall appearance.
                            <br />
                            Microneedling, also known as skin needling treatment, is a procedure that uses fine, sterile skin needles to create tiny micro-injuries in the skin's surface. At Panacea Health & Beauty Clinic, we customise your microneedling face treatment to target specific concerns such as:

                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Fine lines and wrinkles</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Acne scars
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Uneven skin texture and tone
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Large pores

                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Stretch marks
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/Microneedling/1.jpg'}
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
                    At Panacea Health & Beauty Clinic, we pride ourselves on offering exceptional care and results. Our experienced practitioners are trained in the latest techniques, ensuring that each microneedling face treatment is performed with precision and attention to detail. We use only the highest quality tools and products to ensure the safety and efficacy of your treatment.
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/Microneedling/2.jpg'}
                            alt="Facial profile showcasing natural skin texture and contours"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="space-y-3 flex flex-col">
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Personalised consultations to assess your skin's unique needs</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Expert practitioners who prioritise your comfort and safety</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Advanced microneedling devices and high-quality serums </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                A relaxing and welcoming clinic environment                                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-5">
                        <h2>
                            What to Expect During and After Your Microneedling Session </h2>
                        <p className=" leading-relaxed">
                            A typical skin needling treatment session at Panacea Health & Beauty Clinic takes approximately 30 to 60 minutes, depending on the area being treated. Before the procedure, a topical numbing cream is applied to ensure your comfort. Once the numbing takes effect, our skilled practitioners will use a microneedling device to create micro-injuries in the skin.
                        </p>
                        <p>
                            After the treatment, you may experience some redness, similar to mild sunburn, and your skin may feel slightly tight. This is completely normal and should subside within a few hours. For the best results, it is recommended to undergo a series of treatments, depending on your skin concerns.
                        </p>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={'/servicesPage/Microneedling/image-1.png'}
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
                    Frequently asked questions about Microneedling?</h2>
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