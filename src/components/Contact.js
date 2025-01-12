// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Mail, Phone, MapPin } from 'lucide-react';

// export default function ContactSection() {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         mobile: '',
//         message: '',
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//     };

//     const handleChange = (e) => {
//         setFormData((prev) => ({
//             ...prev,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     return (
//         <div className="min-h-screen py-12">
//             <div className="container mx-auto px-4 max-w-6xl">
//                 <div className="mb-12 flex flex- items-center justify-between  text-left bg-gradient-to-r from-rose-100 to-rose-300 p-5 rounded-lg">
//                     <div className='flex flex-col'>

//                         <h1 className="text-3xl font-bold text-gray-900">Panacea Health & Beauty Clinic London</h1>
//                         <h2 className="text-xl text-gray-600">GLOBAL HEALTHCARE AND BEAUTY LTD</h2>
//                         <div className="mt-2 ">
//                             <p className="text-gray-600">Pharmacentre Pharmacy,149 Edgware Rd </p>
//                             <p className="text-gray-600">Tyburnia, London W2 2HU</p>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

//                         <div className="flex flex-col items-center text-center">
//                             <Mail className="mb-2 h-6 w-6 " />
//                             <a href="mailto:info@panacea-clinic.co.uk" className="text-sm  hover:text-blue-600">
//                                 info@panacea-clinic.co.uk
//                             </a>
//                         </div>
//                         <div className="flex flex-col items-center text-center">
//                             <Phone className="mb-2 h-6 w-6 " />
//                             <a href="tel:07388869697" className="text-sm  hover:text-blue-600">
//                                 07388869697
//                             </a>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="grid gap-8 lg:grid-cols-2">
//                     <div className="space-y-6">
//                         <div className="h-full w-full overflow-hidden rounded-lg">
//                             <iframe
//                                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19862.214288866795!2d-0.166726!3d51.517311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab507196af5%3A0xe5cfb58af2aabf40!2sPharmacentre!5e0!3m2!1sen!2sus!4v1736402860884!5m2!1sen!2sus"
//                                 width="100%"
//                                 height="100%"
//                                 style={{ border: 0 }}
//                                 allowFullScreen
//                                 loading="lazy"
//                                 referrerPolicy="no-referrer-when-downgrade"
//                                 title="Panacea Health & Beauty Clinic Location"
//                                 className="h-full w-full"
//                             />
//                         </div>


//                     </div>

//                     <div className="rounded-lg bg-white p-8 shadow-lg text-left">
//                         <h3 className="mb-6 text-2xl font-semibold ">Get in Touch with Us</h3>
//                         <p className="mb-6 ">
//                             We'd love to hear from you! Whether you have a question, want to book a consultation, or need more information about our services, our team is here to help
//                         </p>
//                         <p className="mb-8 italic ">Let&apos;s start your journey to enhanced natural beauty!</p>

//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="grid gap-6 md:grid-cols-2">
//                                 <Input
//                                     name="fullName"
//                                     placeholder="Full Name"
//                                     value={formData.fullName}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 <Input
//                                     name="email"
//                                     type="email"
//                                     placeholder="Your Email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <Input
//                                 name="mobile"
//                                 type="tel"
//                                 placeholder="Mobile Number"
//                                 value={formData.mobile}
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <Textarea
//                                 name="message"
//                                 placeholder="Message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 className="min-h-[120px]"
//                                 required
//                             />
//                             <Button type="submit" className="w-full bg-rose-400 hover:bg-rose-400 ">
//                                 Submit Details
//                             </Button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client'

import { Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function LocationSection() {
    return (<>

        <div className="relative h-[80dvh] w-full">
            {/* Map Container */}
            <div >
                <div className="absolute inset-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19862.214288866795!2d-0.166726!3d51.517311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab507196af5%3A0xe5cfb58af2aabf40!2sPharmacentre!5e0!3m2!1sen!2sus!4v1736402860884!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Panacea Health & Beauty Clinic Location"
                        className="h-full w-full"
                    />
                    {/* Overlay to make cards more readable */}
                    <div className="absolute inset-0 bg-black/5" />
                </div>
            </div>

            {/* Cards Container - Using percentage-based positioning */}
            <div className="absolute inset-0">
                <div className="relative mx-auto h-full max-w-[1800px]">
                    {/* Left Card - Positioned at 20% from left */}
                    <div className="absolute left-[5%] top-1/2 w-[400px] -translate-y-1/2 transform rounded-2xl bg-white p-8 shadow-xl lg:left-[20%]">
                        <div className="mb-6">
                            <h4 className="text-sm font-medium uppercase tracking-wider text-rose-300">
                                Our Location
                            </h4>
                            <h2 className="mt-2 text-4xl font-bold text-gray-900">
                                Visit the Best Salon in London Today!
                            </h2>
                        </div>
                        <Link
                            href="#directions"
                            className="inline-block rounded-full bg-gradient-to-b from-rose-200 to-rose-300 px-8 py-3 text-center font-medium text-white transition-colors hover:bg-orange-600"
                        >
                            Get Directions
                        </Link>
                    </div>

                    {/* Right Card - Positioned at 20% from right */}
                    <div className="absolute right-[20%] top-1/2 hidden w-[400px] -translate-y-1/2 transform rounded-2xl bg-gradient-to-r from-rose-100 to-rose-300 p-8 text-black shadow-xl lg:right-[10%] lg:block">
                        <h2 className="mb-8 text-4xl font-bold">Visit Us</h2>
                        <div className="mb-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-rose-400" />
                                <Link href="tel:02074313373" className="hover:text-rose-400">
                                    020 7431 3373
                                </Link>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-rose-400" />
                                <Link href="mailto:bojangleshairsalons@gmail.com" className="hover:text-rose-400">
                                    bojangleshairsalons@gmail.com
                                </Link>
                            </div>

                            <div className="flex items-start text-left gap-2">
                                <MapPin className="h-5 w-5 flex-shrink-0 text-rose-400" />

                                3, 158 Frognal, Finchley Rd, London NW3 5HH, United Kingdom

                            </div>
                        </div>

                        <Link
                            href="/book"
                            className="inline-block w-full rounded-full bg-rose-400 px-8 py-3 text-center font-medium text-white transition-colors"
                        >
                            Book Your Visit
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Contact Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-black p-4 text-white lg:hidden">
                <div className="flex items-center justify-between">
                    <Link
                        href="tel:02074313373"
                        className="flex items-center gap-2"
                    >
                        <Phone className="h-5 w-5 text-orange-500" />
                        <span>Call Us</span>
                    </Link>
                    <Link
                        href="/book"
                        className="rounded-full bg-orange-500 px-6 py-2 text-sm font-medium text-white"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    </>
    )
}

