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
        question: "Is dermaplaning actually good for your skin?",
        answer: "Yes, dermaplaning can help remove dead skin cells and peach fuzz, leading to smoother skin and better product absorption."
    },
    {
        question: "How long does a dermaplaning treatment last?",
        answer: "Results typically last around 3-4 weeks, as new skin cells and hair begin to grow back."
    },
    {
        question: "What is the disadvantage of dermaplaning?",
        answer: "It may cause irritation, especially for sensitive skin, and could lead to breakouts if not done properly."
    },
    {
        question: "Which is better, face waxing or dermaplaning?",
        answer: "Dermaplaning is often gentler and offers exfoliation benefits, while waxing may be more effective for longer-lasting hair removal."
    },
    {
        question: "Who should avoid dermaplaning?",
        answer: "Those with active acne, rosacea, or other inflammatory skin conditions should avoid dermaplaning."
    },
    {
        question: "What is the age limit for dermaplaning?",
        answer: "Dermaplaning is generally safe for adults of all ages, but younger individuals with sensitive skin should consult a professional before proceeding."
    },
    {
        question: "Do dermatologists recommend dermaplaning?",
        answer: "Many dermatologists recommend dermaplaning for individuals with non-sensitive skin, but it’s important to consult a professional before undergoing treatment."
    }
];

export const metadata = {
    title: ' Dermaplaning Treatment in London | Smooth, Radiant Skin',
    description: 'Experience professional dermaplaning at Panacea Clinic for smoother, brighter skin. Safe, effective treatment to exfoliate and remove peach fuzz. Book today!',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Dermaplaning</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Dermaplaning Treatment at Panacea Health & Beauty Clinic                            </h2>
                            {/* <h3 className="">
                                Revitalize Your Skin and Hair with Platelet-Rich Plasma Therapy
                            </h3> */}
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we offer the highly effective and sought-after dermaplaning treatment, a non-invasive procedure that exfoliates and rejuvenates the skin, leaving you with a smooth, radiant complexion. This treatment is perfect for anyone looking to enhance their skin’s appearance, remove dead skin cells, and create a flawless canvas for makeup application. With dermaplaning, you’ll achieve a glowing, youthful complexion in no time.
                        </p>
                        <p>
                            Dermaplaning is a gentle exfoliation treatment that uses a surgical-grade scalpel to carefully remove dead skin cells and fine vellus hair (commonly known as peach fuzz) from the surface of the skin. This process reveals a smoother, brighter, and more even skin texture. By removing the build-up of dead skin cells and hair, dermaplaning treatment helps to improve the skin’s ability to absorb skincare products and allows for a more flawless application of makeup.
                        </p>

                        {/* <div className="grid md:grid-cols-2 gap-6">
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
                        </div> */}
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/dermaplannig.jpg'}
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
                    Why Choose Panacea Health & Beauty Clinic for Dermaplaning? </h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we are dedicated to offering the best in skincare treatments to help you achieve a glowing, youthful complexion. Our dermaplaning treatment is performed by highly skilled professionals who ensure a safe, effective, and relaxing experience.
                </p>
                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/servicesPage/dermal/2.jpg'}
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
                                    Expert Care:{' '}
                                </span>
                                Our experienced practitioners are trained to provide safe and effective treatments tailored to your unique skin needs.

                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Relaxing Environment: {' '}
                                </span>
                                We offer a calm and soothing environment, ensuring that your experience is enjoyable from start to finish.
                            </p>                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    High-Quality Equipment: {' '}
                                </span>
                                We use only the best tools and techniques to perform dermaplaning, ensuring optimal results and safety.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-3">
                        <h2>
                            What to Expect After Dermaplaning</h2>
                        <p className=" leading-relaxed">
                            After your dermaplaning treatment, your skin will immediately feel softer, smoother, and more luminous. There is no downtime required, so you can return to your usual activities right away. You may experience some mild redness in the treated area, which typically disappears within a few hours.
                        </p>
                        <p>
                            To maintain the results, we recommend using sunscreen daily, as the skin may be more sensitive after exfoliation. Additionally, continuing with your regular skincare routine will help enhance the treatment’s effects.
                        </p>

                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={'/servicesPage/dermal/3.jpg'}
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
                    Frequently asked questions about Dermaplaning Treatment?
                </h2>
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