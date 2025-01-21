import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const ContactNew = () => {
    return (
        <section className="relative w-full">
            {/* First Card - Shows at top for mobile, left side for desktop */}
            <div className="lg:hidden w-full px-4 py-6 bg-white mb-4">
                <div className="mb-6">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-rose-300">
                        Our Location
                    </h4>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                        Visit the Aesthetic Clinic in London Today!
                    </h2>
                </div>
                <Link
                    href="https://www.google.com/maps/dir//Pharmacentre+149+Edgware+Rd+Tyburnia,+London+W2+2HU+United+Kingdom/@51.5173113,-0.1667256,13z/"
                    className="inline-block rounded-full bg-rose-400 px-8 py-3 text-center font-medium text-white transition-colors"
                >
                    Get Directions
                </Link>
            </div>

            <div className="relative flex items-center justify-center">
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19862.214288866795!2d-0.166726!3d51.517311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab507196af5%3A0xe5cfb58af2aabf40!2sPharmacentre!5e0!3m2!1sen!2sus!4v1736402860884!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Panacea Health & Beauty Clinic Location"
                        className="w-full md:w-[80dvw] lg:w-[80dvw] h-[50vh] lg:h-[80vh]"
                    />
                </div>

                {/* Desktop version of first card */}
                <div className="hidden lg:block absolute md:left-[5%] top-1/2 lg:w-[500px] md:w-[300px] -translate-y-1/2 transform rounded-2xl bg-white p-8 shadow-xl lg:left-20">
                    <div className="mb-6">
                        <h4 className="text-sm font-medium uppercase tracking-wider text-rose-300">
                            Our Location
                        </h4>
                        <h2 className="mt-2 md:text-2xl lg:text-4xl font-bold text-gray-900">
                            Visit the Aesthetic Clinic in London Today!
                        </h2>
                    </div>
                    <Link
                        href="https://www.google.com/maps/dir//Pharmacentre+149+Edgware+Rd+Tyburnia,+London+W2+2HU+United+Kingdom/@51.5173113,-0.1667256,13z/"
                        className="inline-block rounded-full bg-rose-400 px-8 py-3 text-center font-medium text-white transition-colors"
                    >
                        Get Directions
                    </Link>
                </div>

                {/* Second card - Desktop version */}
                <div className="hidden lg:block absolute right-[10%] top-1/2 w-[400px] -translate-y-1/2 transform rounded-2xl bg-gradient-to-r from-rose-100 to-rose-300 p-8 text-black shadow-xl lg:right-20">
                    <h2 className="mb-8 text-4xl font-bold">Visit Us</h2>
                    <div className="mb-8 space-y-4">
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-rose-400" />
                            <Link href="tel:+44-7388869697" className="hover:text-rose-400">
                                +44 7388 869697
                            </Link>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-rose-400" />
                            <Link href="mailto:info@panacea-clinic.co.uk" className="hover:text-rose-400">
                                info@panacea-clinic.co.uk
                            </Link>
                        </div>

                        <div className="flex items-start text-left gap-2">
                            <MapPin className="h-5 w-5 flex-shrink-0 text-rose-400" />
                            <Link href="https://www.google.com/maps/dir//Pharmacentre+149+Edgware+Rd+Tyburnia,+London+W2+2HU+United+Kingdom/@51.5173113,-0.1667256,13z/" className="hover:text-rose-400">
                                Pharmacentre Pharmacy,149 Edgware Rd, Tyburnia, London W2 2HU
                            </Link>
                        </div>
                    </div>

                    <Link
                        href="/book-an-appointment"
                        className="inline-block w-full rounded-full bg-rose-400 px-8 py-3 text-center font-medium text-white transition-colors"
                    >
                        Book Your Visit
                    </Link>
                </div>
            </div>

            {/* Mobile version of second card - Moved outside the relative container */}
            <div className="block lg:hidden w-full px-4 py-6 bg-gradient-to-r from-rose-100 to-rose-300 mt-4">
                <h2 className="mb-6 text-2xl font-bold">Visit Us</h2>
                <div className="mb-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-rose-400" />
                        <Link href="tel:+44-7388869697" className="hover:text-rose-400">
                            +44 7388 869697
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-rose-400" />
                        <Link href="mailto:info@panacea-clinic.co.uk" className="hover:text-rose-400">
                            info@panacea-clinic.co.uk
                        </Link>
                    </div>

                    <div className="flex items-start text-left gap-2">
                        <MapPin className="h-5 w-5 flex-shrink-0 text-rose-400" />
                        <Link href="https://www.google.com/maps/dir//Pharmacentre+149+Edgware+Rd+Tyburnia,+London+W2+2HU+United+Kingdom/@51.5173113,-0.1667256,13z/" className="hover:text-rose-400">
                            Pharmacentre Pharmacy,149 Edgware Rd, Tyburnia, London W2 2HU
                        </Link>
                    </div>
                </div>

                <Link
                    href="/book-an-appointment"
                    className="inline-block w-full rounded-full bg-rose-400 px-8 py-3 text-center font-medium text-white transition-colors"
                >
                    Book Your Visit
                </Link>
            </div>
        </section>
    )
}

export default ContactNew