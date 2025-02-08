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
        question: "Does PRP actually regrow hair?",
        answer: "PRP (Platelet-Rich Plasma) can stimulate hair growth and improve hair thickness, but results vary, and it's most effective in the early stages of hair loss."
    },
    {
        question: "Who should not do PRP treatment?",
        answer: "PRP should be avoided by individuals with blood disorders, active infections, or certain scalp conditions like alopecia areata or severe anaemia."
    },
    {
        question: "Is PRP very painful?",
        answer: "PRP is generally not very painful, but discomfort can occur during the injection process. Numbing cream is often applied to reduce pain."
    },
    {
        question: "Why is PRP so expensive?",
        answer: "PRP is costly due to the specialised process of extracting and preparing the plasma, as well as the need for multiple sessions and skilled practitioners."
    },
    {
        question: "Does PRP have bad side effects?",
        answer: "PRP is generally safe with minimal side effects, but possible reactions include swelling, redness, or irritation at the injection site."
    },
    {
        question: "Is PRP safe for hair?",
        answer: "PRP is considered safe for hair regrowth, as it uses your own blood, reducing the risk of allergic reactions or infections."
    },
    {
        question: "What happens if PRP goes wrong?",
        answer: "If PRP treatment goes wrong, complications like infection, scarring, or no improvement in hair growth can occur. Choosing a skilled practitioner reduces these risks."
    }
];


export const metadata = {
    title: 'Hopi Ear Candle Treatment | Panacea Health & Beauty Clinic',
    description: 'Experience the soothing benefits of Hopi Ear Candling at Panacea Health & Beauty Clinic. This relaxing treatment helps relieve ear congestion, and pressure.',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Hopi Ear Candle </h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Hopi Ear Candle Therapy                            </h2>
                            <h3 className="">
                                A Natural Solution for Ear Health and Relaxation
                            </h3>
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we believe in offering a range of holistic and therapeutic treatments designed to promote your well-being. One of our unique and popular services is the Hopi Ear Candle Treatment, a relaxing and natural remedy for ear health and overall relaxation.
                            <br />
                            Hopi ear candles, also known as ear wax candles, are a traditional therapy that has been used for centuries to promote a sense of well-being. The treatment involves the use of specially designed candles made from natural ingredients, such as beeswax, honey, and therapeutic herbs. Benefits of Hopi Ear Candles
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Relieves Ear Pressure
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Helps with Ear Wax Removal

                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Alleviates Sinus Congestion

                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Promotes Relaxation


                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Improves Hearing
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/Hipo-ear-candle/1.jpg'}
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
                    Why Choose Panacea Health & Beauty Clinic for Your Hopi Ear Candle Treatment? </h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we are committed to providing safe, effective, and soothing treatments for our clients. Our ear wax candle treatment is performed by fully trained professionals in a calm and comfortable environment. We use only high-quality, natural Hopi ear candles to ensure the best results for your ear health and overall relaxation.
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/Hipo-ear-candle/3.webp'}
                            alt="Facial profile showcasing natural skin texture and contours"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div className="space-y-3 flex flex-col">
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                A personalised approach, tailored to your specific needs
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Safe and comfortable treatment performed by experienced professionals
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                High-quality, natural ingredients for the best therapeutic results
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                A relaxing clinic environment where your well-being is our top priority
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-5">
                        <h2>
                            What to Expect During Your Hopi Ear Candle Treatment </h2>
                        <p className=" leading-relaxed">
                            When you visit Panacea Health & Beauty Clinic for a Hopi ear candle session, our experienced therapist will start by carefully explaining the process and ensuring you are comfortable. You will be asked to lie on your side while the candle is placed at the entrance of the ear.
                        </p>
                        <p>
                            As the candle burns, you will feel a gentle warmth and hear a soothing crackling sound. The treatment usually lasts between 20 to 30 minutes, depending on your needs. After the treatment, your therapist may gently clean the outer ear to remove any excess wax that has been loosened during the process.
                        </p>
                        <p>
                            While the process is relaxing, you may also experience relief from symptoms such as ear pressure or sinus discomfort immediately following the treatment. Most clients feel refreshed and at ease after their session, with many returning regularly for maintenance.
                        </p>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={'/servicesPage/HopiEarCandle/image-1.png'}
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
                    Frequently asked questions about Hopi Ear Candle Treatment?</h2>
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