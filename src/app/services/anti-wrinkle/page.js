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
const page = () => {
    return (
        <>
            <section className='relative h-[60dvh] w-full'>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/aboutcover.jpg')"
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                    <h1 className='text-4xl font-bold tracking-tight lg:text-5xl'>  Anti-Wrinkle</h1>
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
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Non-invasive</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Natural results
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Quick recovery
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Long-lasting effects</span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="relative aspect-video w-full h-auto rounded-lg overflow-hidden bg-gray-100">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            poster={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-duEPVXWJQut3QT9JOSvI6miL1xPE3R.png`}
                        >
                            <source src="/your-video-source.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col justify-center items-center w-[100%]'>

                    <h3 className='text-center my-5'>
                        Real Results: Cheek Filler Before & After
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
                    Why Choose Panacea Health & Beauty Clinic ?                </h2>

                <p className="mt-5">
                    At Panacea Health & Beauty Clinic, we combine expertise, personalized care, and the latest technology to deliver exceptional anti-wrinkle injections. Here’s why you should choose us:
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
                            <p className="text-lg text-rose-400">
                                <span className='font-bold'>
                                    Experienced Practitioners: {' '}
                                </span>
                                Our skilled and trained professionals customize each treatment with anti-wrinkle injections to suit your unique needs, ensuring natural-looking results.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg text-rose-400">
                                <span className='font-bold'>
                                    Personalized Care: {' '}
                                </span>
                                We take time to understand your goals and create a tailored plan for the best outcome with anti-wrinkle injections.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg text-rose-400">
                                <span className='font-bold'>
                                    Safe and Trusted Products:{' '}
                                </span>
                                We use FDA-approved injectables for anti-wrinkle injections and adhere to the highest standards of hygiene and safety.                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg text-rose-400">
                                <span className='font-bold'>
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
                                Personalized Consultation
                            </h4>
                            <p className=" leading-relaxed">
                                Your journey begins with a thorough consultation, where we take the time to understand your aesthetic goals and medical history. Our experienced professionals will assess your skin and discuss the areas you'd like to treat. We'll also explain how
                                <span className='font-bold mx-1'>
                                    anti-wrinkle injections
                                </span>
                                work, so you feel fully informed and confident in your decision.                             </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                The Treatment Procedure                            </h4>
                            <p className=" leading-relaxed">
                                The procedure itself is quick and minimally invasive. Typically, it takes just
                                <span className='font-bold mx-1'>
                                    10 to 15 minutes</span>
                                to complete. During the treatment, very fine needles are used to inject small amounts of botulinum toxin into the targeted muscles, which helps relax them and reduce the appearance of wrinkles. You may feel a slight pinch or pressure, but the process is generally well-tolerated and only requires minimal discomfort.                             </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Aftercare and No Downtime                            </h4>
                            <p className=" leading-relaxed">
                                One of the best things about                                 <span className='font-bold mx-1'>
                                    anti-wrinkle </span> injections is that there's no downtime required. After your treatment, you can immediately return to your normal activities. We will provide simple aftercare instructions, such as avoiding vigorous physical activity for 24 hours and refraining from rubbing the treated areas. These easy guidelines help ensure optimal results.
                                In just a few days, you'll begin to notice smoother, more youthful skin as the full effects of the treatment take shape, typically visible within                                 <span className='font-bold mx-1'>
                                    3 to 7 days. </span>                           </p>
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