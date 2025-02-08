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
        question: "What is Biofiller treatment?",
        answer: "Biofiller is a treatment using biologically-based fillers, typically made from natural substances like hyaluronic acid or collagen, to restore volume and smooth out wrinkles."
    },
    {
        question: "How long does Biofiller last?",
        answer: "Biofiller results can last from 6 months to 1 year, depending on the type of filler and the individual’s metabolism."
    },
    {
        question: "Is Biofiller good?",
        answer: "Biofiller can be effective for enhancing facial volume, smoothing wrinkles, and providing a natural look, but results vary based on the product and individual."
    },
    {
        question: "What is the difference between Biofiller and normal filler?",
        answer: "Biofiller uses natural, biologically-derived substances, while normal fillers may contain synthetic materials like hyaluronic acid, which can differ in texture and longevity."
    },
    {
        question: "Which filler is best for the face?",
        answer: "Hyaluronic acid fillers (e.g., Juvederm, Restylane) are commonly considered the best for facial volume restoration, wrinkle treatment, and lip enhancement."
    },
    {
        question: "Which filler looks most natural?",
        answer: "Hyaluronic acid fillers tend to look the most natural due to their ability to integrate smoothly with the skin and their reversible nature."
    },
    {
        question: "Which is better, Botox or fillers?",
        answer: "Botox is ideal for relaxing wrinkles caused by muscle movement (like crow’s feet), while fillers restore volume and smooth static wrinkles. Both treatments can be complementary."
    },
    {
        question: "Are fillers safe for the face?",
        answer: "fillers are generally safe when administered by trained professionals, but risks include swelling, bruising, infection, and allergic reactions. Always consult with a certified practitioner."
    }
];


export const metadata = {
    title: 'Best Lip filler | London  | Panacea Health & Beauty Clinic',
    description: ' Restore smoothness with Bio filler at Panacea Health & Beauty Clinic. This treatment offers natural, long-lasting results for facial rejuvenation. Book today!',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'> Bio filler</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Bio filler Treatment at Panacea Health & Beauty Clinic                              </h2>
                            {/* <h3 className="">
                                Bio filler Treatment at Panacea Health & Beauty Clinic                            </h3> */}
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we are committed to providing the latest in aesthetic treatments to enhance your natural beauty. One of our most innovative offerings is Bio filler Treatment, a non-surgical solution to restore volume, smooth out wrinkles, and rejuvenate your appearance.
                            <br />
                            Bio filler Treatment is a revolutionary cosmetic procedure that uses a naturally derived, biocompatible substance to enhance the volume of your skin, smooth fine lines, and stimulate collagen production. Benefits of Bio filler Treatment

                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Natural-Looking Results
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Restores Volume

                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Reduces Fine Lines and Wrinkles

                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Improves Skin Texture and Elasticity</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/bio filler 1.jpg'}
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
                    Why Choose Panacea Health & Beauty Clinic?             </h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we are dedicated to providing the highest standard of care and the most advanced treatments. Our team of professionals is fully trained in the latest techniques for Bio filler Treatment, ensuring that you receive the best possible results in a safe and comfortable environment.
                </p>

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
                                Personalised consultations to assess your needs and skin concerns
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Expert practitioners who are skilled in advanced injection techniques
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Safe, comfortable treatments in a luxurious clinic setting
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                Natural, long-lasting results that enhance your appearance without surgery
                            </p>
                        </div>


                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-4">
                        <h2>
                            What to Expect During Your Bio filler Treatment</h2>
                        {/* <p className=" leading-relaxed">
                            When you choose lip fillers in London at Panacea Health & Beauty Clinic, you can expect a smooth and comfortable experience:

                        </p> */}
                        <div className="space-y-4">
                            <p className=" leading-relaxed">
                                The Bio filler Treatment begins with a consultation at Panacea Health & Beauty Clinic where one of our experienced practitioners will assess your skin and discuss your concerns. After agreeing on a treatment plan, your own blood will be drawn, and the plasma will be processed to create the plasma filler.                            </p>
                            <p>
                                Once prepared, the plasma filler will be gently injected into the areas that require volume restoration or wrinkle reduction. The procedure typically takes 30 to 45 minutes, depending on the number of areas being treated.
                            </p>
                            <p>
                                After the treatment, you may experience mild swelling or redness at the injection sites, but this generally subsides within a few hours. You can return to your daily routine almost immediately, with no need for recovery time.
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src="/bio filler 2.jpg"
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
                    Frequently asked questions about Bio filler ? </h2>
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