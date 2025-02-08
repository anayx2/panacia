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
        question: "What is Vitamin B12 deficiency?",
        answer: "A lack of Vitamin B12, essential for nerve function and red blood cell production."
    },
    {
        question: "What causes it?",
        answer: "Poor diet, digestive issues, malabsorption, or certain medical conditions."
    },
    {
        question: "What are the symptoms?",
        answer: "Fatigue, weakness, pale skin, dizziness, numbness, mood changes, and memory issues."
    },
    {
        question: "How is it diagnosed?",
        answer: "A blood test measures Vitamin B12 levels."
    },
    {
        question: "How is it treated?",
        answer: "Through Vitamin B12 injections or supplements."
    },
    {
        question: "How long until I feel better?",
        answer: "Improvements in energy and mood can be felt within days to weeks."
    },
    {
        question: "Any side effects?",
        answer: "Rare, but may include redness or swelling at the injection site."
    },
    {
        question: "Can I prevent it?",
        answer: "Yes, with a B12-rich diet or regular supplements/injections."
    },
    {
        question: "Is it serious?",
        answer: "Untreated, it can cause permanent nerve damage."
    },
    {
        question: "Who is at risk?",
        answer: "Vegetarians, vegans, older adults, and those with digestive issues."
    }
];


export const metadata = {
    title: 'Vitamin B12 Deficiency Treatment | Panacea Health & Beauty Clinic',
    description: 'Struggling with fatigue, mood changes, or memory issues? Our Vitamin B12 deficiency treatment helps restore energy, improve mood, and boost overall well-being.',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Vitamin B12 Deficiency </h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Treatment for Vitamin B12 Deficiency                             </h2>
                            <h3 className="">
                                Restore Your Energy and Vitality with Vitamin B12 Deficiency Treatment

                            </h3>
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we understand the significant impact that Vitamin B12 deficiency can have on your overall health and well-being. Vitamin B12 is essential for proper nerve function, red blood cell production, and energy levels. If you’re experiencing fatigue, weakness, dizziness, or neurological symptoms, our treatment for Vitamin B12 deficiency can help restore balance and improve your health.
                            <br />
                            Vitamin B12 is a vital nutrient that supports several important bodily functions, including:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Red blood cell production –
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Nerve function
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>DNA synthesis
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/servicesPage/VitaminB12/image.png'}
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
                    At Panacea Health & Beauty Clinic, we provide professional and personalised care to address Vitamin B12 deficiency and help you feel revitalised and healthy. Here’s why you should trust us with your treatment:
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/servicesPage/VitaminB12/image-2.png'}
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
                                    Expert Practitioners: {' '}
                                </span>
                                Our team consists of experienced healthcare professionals who are skilled in diagnosing and treating Vitamin B12 deficiency.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comprehensive Assessment: {' '}
                                </span>
                                We offer thorough assessments, including blood tests, to determine your Vitamin B12 levels and develop a customised treatment plan based on your unique needs.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Effective Treatments:{' '}
                                </span>
                                We offer both Vitamin B12 injections and supplements, ensuring you receive the best possible treatment based on your condition.

                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Long-Term Support:  {' '}
                                </span>
                                We are committed to your health and well-being, offering ongoing support and monitoring to maintain your B12 levels once they are restored.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-5">
                        <h2>
                            Treatment for Vitamin B12 Deficiency </h2>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Vitamin B12 Injections:                           </h4>
                            <p className=" leading-relaxed">
                                One of the most effective and fastest ways to restore Vitamin B12 levels is through injections. Vitamin B12 injections deliver a high dose of the vitamin directly into your bloodstream, bypassing any digestive issues that may prevent proper absorption. These injections are typically administered into the muscle, often in the upper arm or thigh.                            </p></div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Oral Vitamin B12 Supplements:                         </h4>
                            <p className=" leading-relaxed">
                                For some individuals, oral Vitamin B12 supplements may be recommended. These supplements are often in the form of tablets or sublingual lozenges. However, they may not be as effective as injections for individuals with absorption issues or severe deficiencies.                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Dietary Adjustments:</h4>
                            <p className=" leading-relaxed">
                                If your Vitamin B12 deficiency is caused by dietary habits, we can help you make the necessary changes to include more B12-rich foods in your diet, such as:
                                <li>
                                    Animal-based foods: meat, poultry, fish, eggs, and dairy products
                                </li>
                                <li>
                                    Fortified foods: such as fortified breakfast cereals or plant-based milk (soy, almond, etc.)
                                </li>
                                <li>
                                    Nutritional yeast or B12-fortified supplements for those following a vegetarian or vegan diet.
                                </li>
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/4] w-full">
                        <Image
                            src={'/vitamin b12.jpg'}
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
                    Frequently asked questions about Vitamin B12 Deficiency? </h2>
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