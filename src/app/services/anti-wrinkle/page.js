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
        question: "What are anti-wrinkle injections?",
        answer: "They are treatments that relax facial muscles to reduce the appearance of wrinkles."
    },
    {
        question: "How long do the results last?",
        answer: "Results typically last 3-6 months, depending on the individual."
    },
    {
        question: "Is the treatment painful?",
        answer: "Most people experience minimal discomfort, with only a slight pinch during injection."
    },
    {
        question: "How soon will I see results?",
        answer: "Results usually appear within 3-7 days after treatment."
    },
    {
        question: "Are there any side effects?",
        answer: "Side effects are rare but may include swelling or bruising at the injection site."
    },
    {
        question: "Who is suitable for anti-wrinkle injections?",
        answer: "Healthy adults looking to reduce wrinkles and fine lines are ideal candidates."
    },
    {
        question: "Can I go back to work after treatment?",
        answer: "Yes, you can typically resume normal activities immediately."
    },

]

export const metadata = {
    title: 'Anti-Wrinkle Treatments at Panacea Health & Beauty Clinic',
    description: ' Smooth out wrinkles and fine lines with expert anti-wrinkle injections. Achieve a youthful, refreshed look with safe, effective treatments. Contact Us!',
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
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-white'>  Anti-Wrinkle</h1>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Anti-Wrinkle Injectable</h2>
                            <h3 className="">
                                Safe and Effective Solution for Smoother Skin
                            </h3>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            At Panacea Health & Beauty Clinic, we understand the desire for youthful, radiant skin, and our anti-wrinkle injections are a key solution in achieving that goal. Anti-wrinkle injectables, often referred to as botulinum toxin treatments, are a popular non-invasive option for reducing the appearance of fine lines and wrinkles.
                            <br />  One of the major reasons for the growing popularity of anti-wrinkle injectables is the convenience and minimal recovery time associated with the procedure. Unlike surgical options, which require significant downtime and a longer recovery period, injectable treatments can be done in as little as 15 minutes with little to no disruption to your daily routine.
                            <br />  Other key benefits include:

                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Non-invasive</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                                    </span>
                                    <span>Natural results
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Quick recovery
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />

                                    </span>
                                    <span>Long-lasting effects</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-auto rounded-lg">
                        <Image
                            src={'/anti-wrinkle/1.jpg'}
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
                            beforeImage="/anti-wrinkle/9.jpg"
                            afterImage="/anti-wrinkle/10.jpg"
                        />
                        <ImageComparison
                            beforeImage="/anti-wrinkle/7.jpg"
                            afterImage="/anti-wrinkle/8.jpg"
                        />
                        <ImageComparison
                            beforeImage="/anti-wrinkle/antiwrinkle before.png"
                            afterImage="/anti-wrinkle/antiwrinke after.jpg"
                        />
                    </div>
                </div>

            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <h2 className="text-center">
                    Why Choose Panacea Health & Beauty Clinic ?                </h2>

                <p className="mt-5">
                    At Panacea Health & Beauty Clinic, we combine expertise, Personalised Care, and the latest technology to deliver exceptional anti-wrinkle injections. Here’s why you should choose us:
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[5/3] w-full">
                        <Image
                            src="/anti-wrinkle/2.jpg"
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
                                    Experienced Practitioners: {' '}
                                </span>
                                Our skilled and trained professionals customise each treatment with anti-wrinkle injections to suit your unique needs, ensuring natural-looking results.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Personalised Care: {' '}
                                </span>
                                We take time to understand your goals and create a tailored plan for the best outcome with anti-wrinkle injections.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Safe and Trusted Products:{' '}
                                </span>
                                We use FDA-approved injectables for anti-wrinkle injections and adhere to the highest standards of hygiene and safety.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg ">
                                <span className='font-bold text-rose-400'>
                                    Comfortable Environment: {' '}
                                </span>
                                Our clinic offers a relaxed and professional setting where you can feel at ease throughout your treatment journey with anti-wrinkle injections.                                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-8">
                        <h2>
                            What to Expect During Your Treatment? </h2>
                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Personalised Consultation

                            </h4>
                            <p className=" leading-relaxed">
                                Your journey begins with a thorough consultation, where we take the time to understand your aesthetic goals and medical history. Our experienced professionals will assess your skin and discuss the areas you'd like to treat. We'll also explain how
                                anti-wrinkle injections work, so you feel fully informed and confident in your decision.                             </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                The Treatment Procedure                            </h4>
                            <p className=" leading-relaxed">
                                The procedure itself is quick and minimally invasive. Typically, it takes just
                                10 to 15 minutes to complete. During the treatment, very fine needles are used to inject small amounts of botulinum toxin into the targeted muscles, which helps relax them and reduce the appearance of wrinkles. You may feel a slight pinch or pressure, but the process is generally well-tolerated and only requires minimal discomfort.                             </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Aftercare and No Downtime                            </h4>
                            <p className=" leading-relaxed">
                                One of the best things about anti-wrinkle injections is that there's no downtime required. After your treatment, you can immediately return to your normal activities. We will provide simple aftercare instructions, such as avoiding vigorous physical activity for 24 hours and refraining from rubbing the treated areas. These easy guidelines help ensure optimal results.
                                In just a few days, you'll begin to notice smoother, more youthful skin as the full effects of the treatment take shape, typically visible within 3 to 7 days. </p>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src="/anti-wrinkle/4.jpg"
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
                <h3 className='text-center mb-10'>
                    Frequently asked questions about Anti-Wrinkle?
                </h3>
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