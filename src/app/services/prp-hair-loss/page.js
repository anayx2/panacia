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
    title: 'PRP Hair Loss Treatment | Panacea Health & Beauty Clinic',
    description: 'Combat hair thinning with PRP Hair Loss Treatment at Panacea Health & Beauty Clinic. Promote hair growth and restore thickness using your own platelet-rich plasma.',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'>PRP Hair Loss</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                PRP Hair Loss Treatment at Panacea Health & Beauty Clinic                       </h2>
                            {/* <h3 className="">
                                Revitalize Your Skin and Hair with Platelet-Rich Plasma Therapy
                            </h3> */}
                        </div>

                        <p className="mt-5 ">
                            At Panacea Health & Beauty Clinic, we offer advanced and effective solutions to address hair thinning and hair loss. One of our most sought-after treatments is PRP hair treatment, a non-surgical, natural therapy designed to stimulate hair growth and restore your hair's health and vitality. Using your body’s own growth factors, PRP treatment for hair loss is a safe, innovative solution that promotes the regrowth of hair without the need for invasive procedures.
                            <br />
                            PRP hair treatment (Platelet-Rich Plasma) involves using your own blood plasma, which is rich in growth factors, to rejuvenate and stimulate hair follicles. The process begins with a small sample of your blood being taken, which is then processed to extract the plasma.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Natural-Looking Results</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Restores Volume
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Reduces Fine Lines and Wrinkles
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Improves Skin Texture and Elasticity

                                    </span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/servicesPage/prp-hair/img1.jpg'}
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
                            beforeImage="/before-after/Hair Filler Dr CYG Before & After/1.jpg"
                            afterImage="/before-after/Hair Filler Dr CYG Before & After/2.jpg"
                        />
                        <ImageComparison
                            beforeImage="/before-after/PRP after 3 session/1.jpg"
                            afterImage="/before-after/PRP after 3 session/2.jpg"
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
                    Why Choose Panacea Health & Beauty Clinic for Your PRP Hair Treatment?</h2>

                <p className="mt-5 text-center">
                    At Panacea Health & Beauty Clinic, we offer a personalised approach to hair restoration with PRP hair treatment. Our experienced professionals use the latest techniques and equipment to ensure you receive the highest standard of care. We take the time to understand your concerns and tailor the treatment to suit your unique needs.
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src={'/servicesPage/prp-hair/img12.jpg'}
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
                                    Personalised care: {' '}
                                </span>
                                We develop a treatment plan that’s right for your specific hair loss concerns.

                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Experienced practitioners:                                </span>
                                Our team is skilled in the art of PRP injections, ensuring safety and efficacy.
                            </p>                                    </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    State-of-the-art facilities:{' '}
                                </span>
                                We use the latest equipment and technology to ensure the best possible results.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comfort and care: {' '}
                                </span>
                                We provide a welcoming and comfortable environment where you can feel at ease during your treatment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-5">
                        <h2>
                            How Does PRP Hair Treatment Work? </h2>
                        <li>

                            <span className='font-bold pr-1'>
                                Blood Drawn:
                            </span>
                            A small amount of your blood is drawn, typically from your arm, and placed into a centrifuge to separate the plasma from other blood components.

                        </li>
                        <li>
                            <span className='font-bold pr-1'>
                                Plasma Extraction:                            </span>
                            The platelet-rich plasma is extracted and prepared for injection. This plasma contains high concentrations of growth factors that encourage tissue repair and regeneration.

                        </li>
                        <li>
                            <span className='font-bold pr-1'>
                                Scalp Injection:                            </span>
                            The PRP treatment for hair loss is then carefully injected into the areas of your scalp where hair thinning or loss has occurred. The growth factors in the plasma stimulate the hair follicles, encouraging hair growth and improving the health of existing hair.

                        </li>

                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src={'/servicesPage/prp-hair/img3.jpg'}
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
                    Frequently asked questions about PRP Hair Loss?</h2>
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