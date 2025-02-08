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
        question: "What is an Iv drip used for?",
        answer: "Iv drips are used to deliver fluids, nutrients, vitamins, and medications directly into the bloodstream for hydration, recovery, or treatment of various conditions."
    },
    {
        question: "What is the drip treatment for?",
        answer: "Drip treatments can be used for hydration, vitamin deficiency, immune support, detoxification, or recovery from illness or physical exertion."
    },
    {
        question: "Do Iv drips have side effects?",
        answer: "Possible side effects include infection, vein irritation, fluid overload, or allergic reactions, though they are generally rare."
    },
    {
        question: "Are Iv drips safe?",
        answer: "Iv drips are generally safe when administered by trained professionals, but risks exist if not done correctly."
    },
    {
        question: "What are the risk factors of IV therapy?",
        answer: "Risk factors include infections, vein damage, blood clots, and allergic reactions to the fluids or medications being administered."
    },
    {
        question: "Is Iv drip good for skin?",
        answer: "Iv drips, especially those containing vitamins like vitamin C, can help improve skin hydration, appearance, and overall health."
    },
    {
        question: "What are the benefits of the IV route?",
        answer: "IV therapy allows faster and more direct absorption of nutrients or medications, providing immediate effects, especially for hydration or urgent treatment."
    }
];

export const metadata = {
    title: ' Iv drip Therapy for Wellness | Panacea Health & Beauty Clinic',
    description: 'Boost your vitality with Iv drip Therapy at Panacea Health & Beauty Clinic. Replenish essential nutrients, and hydrate your body with our treatments. Book now!',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'>  Iv drip </h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Iv drip Treatment at Panacea Health & Beauty Clinic                            </h2>
                            {/* <h3 className="">
                                Revitalize Your Skin and Hair with Platelet-Rich Plasma Therapy
                            </h3> */}
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we are proud to offer Iv drip Treatment, a cutting-edge therapy designed to boost your overall health and well-being. Whether you're looking to recover from dehydration, enhance your energy levels, or support your immune system, our medical drips are tailored to meet your individual needs.
                        </p>
                        <br />
                        <p>
                            Iv drip Treatment is a medical procedure where a specially formulated blend of vitamins, minerals, and nutrients is administered directly into your bloodstream via an intravenous (IV) drip. This method allows for faster and more efficient absorption of essential nutrients compared to oral supplements, providing your body with immediate nourishment and hydration. Benefits of Iv drip Treatment:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Instant Hydration</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Boosts Energy Levels
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Supports Immune Function
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Enhances Skin Health

                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Relieves Stress and Fatigue
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/servicesPage/IVDrip/image.png'}
                            width={800}
                            height={800}
                            className='w-full h-auto rounded-lg'
                            alt='service'
                        />

                    </div>
                </div>
            </section >
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
                    Why Choose Panacea Health & Beauty Clinic for Your IV Drip Treatment? </h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we are dedicated to providing high-quality, personalised care to help you achieve optimal health. Our medical drips are formulated using the finest ingredients to ensure that you receive the best possible results.
                </p>
                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/anti-wrinkle/iv.jpg'}
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
                                    Personalised care:{' '}
                                </span>
                                Our treatments are tailored to meet your individual needs and health goals.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Experienced professionals: {' '}
                                </span>
                                Our skilled team ensures that every IV treatment is administered safely and effectively.</p>                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comfort and relaxation: {' '}
                                </span>
                                We provide a comfortable, welcoming environment where you can relax during your treatment.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Top-quality ingredients: {' '}
                                </span>
                                We use only the highest quality vitamins, minerals, and nutrients for your IV therapy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-2">
                        <h2>
                            How Does IV Drip Treatment Work? </h2>
                        <p className=" leading-relaxed">
                            At Panacea Health & Beauty Clinic, the Iv drip treatment process is simple and straightforward. Upon arrival, you will have a consultation with one of our experienced professionals to discuss your specific health goals and concerns. Based on this, we will customise the treatment to suit your needs.
                        </p>
                        <p>
                            Once your treatment plan is in place, a small needle is gently inserted into a vein in your arm, and the IV drip is slowly administered. The treatment typically lasts between 30 to 60 minutes, during which you can relax in a comfortable environment.
                        </p>
                        <p>
                            The nutrients in the Iv drip are absorbed directly into your bloodstream, allowing for rapid and effective results. Many clients experience noticeable benefits immediately following the session, including improved hydration, increased energy, and a general sense of well-being.
                        </p>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={'/servicesPage/IVDrip/image-2.png'}
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
                    Frequently asked questions about Iv drip?</h2>
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