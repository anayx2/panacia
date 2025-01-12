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
        question: "Which cheek filler lasts the longest?",
        answer: "Premium hyaluronic acid fillers used in our clinic typically last between 12-18 months, with some varieties lasting up to 24 months depending on the specific product and individual factors."
    },
    {
        question: "How long do cheek fillers last?",
        answer: "Cheek fillers generally last between 6-12 months, though this can vary depending on the type of filler used, the amount injected, and individual factors such as metabolism and lifestyle."
    },
    {
        question: "How long do cheek fillers take to settle?",
        answer: "Initial swelling typically subsides within 1-2 weeks, with final results visible after 2-4 weeks when the filler has fully integrated with your tissue."
    },
    {
        question: "What does cheek filler do?",
        answer: "Cheek fillers restore volume, enhance facial contours, lift sagging skin, and create a more youthful appearance by replacing lost volume and supporting facial structure."
    },
    {
        question: "How much are cheek fillers?",
        answer: "The cost varies depending on the amount of filler needed and the specific product used. We provide detailed pricing during your consultation."
    },

]
const page = () => {
    return (
        <>
            <section className='relative h-[100dvh] w-full'>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/aboutcover.jpg')"
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                    <h2>Dermal Fillers</h2>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,400px] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-rose-400">
                                Cheek dermal Fillers
                            </h2>
                            <h3 className="">
                                What are Cheek Fillers ?
                            </h3>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            Cheek fillers are a non-surgical, minimally invasive solution designed to restore volume and contour to
                            the cheek area. As we age, our cheeks may lose their youthful fullness due to a decrease in collagen
                            and elastin production, resulting in a flattened or sagging appearance. This change can be influenced
                            by factors like genetics, lifestyle, and environmental elements, which may leave you looking tired or
                            less vibrant. At Panacea Health & Beauty Clinic London, we focus on enhancing your natural beauty with cheek fillers,
                            utilising high-quality, hyaluronic acid-based products to achieve a fuller, more youthful appearance.
                            This treatment not only restores volume but also helps lift the midface area, creating a natural-looking
                            contour that can enhance your overall facial aesthetics. The results can last anywhere from 6 to 12 months.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ul className="space-y-4 list-none">
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Restores lost volume and contour</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Minimally invasive and non-surgical</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Long-lasting effects (6-12 months)</span>
                                </li>
                            </ul>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Provides a lifted appearance to the midface</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Immediate results with little downtime</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-[#2B5D7C] mt-1">•</span>
                                    <span>Boosts confidence and enhances natural beauty</span>
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
                <h3 className="text-center">
                    Who Are Cheek Fillers Suitable For?
                </h3>

                <p className="mt-5">
                    This treatment is suitable for those seeking a refreshed, youthful appearance without the need for invasive surgery. A consultation with us, at Panacea  Clinic London will help determine if cheek fillers align with your aesthetic goals.Cheek dermal fillers may be an excellent option if you're experiencing
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
                                Loss of volume in the cheeks, leading to a tired or aged appearance
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg text-rose-400">
                                Flat or sagging cheeks that lack definition
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg text-rose-400">
                                A desire for non-surgical enhancement to restore youthful contours
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <CheckCircle2 className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-lg text-rose-400">
                                An interest in achieving a more balanced facial profile
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 w-[90%]">
                <div className="grid md:grid-cols-[1fr,500px] gap-8 items-center">
                    <div className="space-y-8">
                        <h3>
                            How Cheek Enhancement Treatment Is Performed at Panacea Health & Beauty Clinic London
                        </h3>

                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Consultation
                            </h4>
                            <p className=" leading-relaxed">
                                Your journey begins with a free consultation at Panacea Health & Beauty Clinic, where our experienced practitioners assess your cheek area to determine if fillers are right for you. We'll discuss your goals, including whether you want to restore lost volume, contour for definition, or achieve a lifted or fuller look. Our aim is to enhance your natural beauty, and we believe that a unique approach to each face is essential for achieving the best results.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                The Procedure
                            </h4>
                            <p className=" leading-relaxed">
                                On treatment day, we'll apply a numbing cream for your comfort. Depending on your specific needs and the desired outcomes, our practitioner will use either a cannula or traditional injection techniques to carefully administer high-quality hyaluronic acid fillers. This tailored approach ensures that we enhance your natural features while maintaining a harmonious appearance. We'll evaluate the results and make any necessary adjustments for optimal symmetry.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-2xl text-rose-400 font-medium">
                                Aftercare
                            </h4>
                            <p className=" leading-relaxed">
                                After your treatment, you'll receive clear aftercare instructions to maximise results. Some swelling or bruising is normal but should subside within a few days. Feel free to reach out with any concerns, and we'll schedule a follow-up to review the results and discuss touch-ups if needed.
                            </p>
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
                    Frequently Asked Questions for Cheek Fillers

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