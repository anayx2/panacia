'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="flex justify-center items center w-full p-5">
            <div className='bg-rose-200 w-[90%] p-10 rounded-3xl py-20 px-10'>
                <h2 className='my-5'>Contact Us</h2>
                {/* Clinic Information */}
                <div className="container mx-auto px-4 py-12">
                    <div className='flex md:flex-row lg:flex-row sm:flex-col gap-5 items-center'>
                        <div className='w-[60%]'>
                            <div className="mb-8">
                                <h1 className="mb-2 text-2xl font-semibold text-blue-900">Panacea Clinic</h1>
                                <h2 className="mb-6 text-lg text-gray-600">GLOBAL HEALTHCARE AND BEAUTY LTD</h2>
                            </div>
                            <div className="h-[200px] overflow-hidden w-[100%] rounded-lg md:h-[350px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19862.214288866795!2d-0.166726!3d51.517311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab507196af5%3A0xe5cfb58af2aabf40!2sPharmacentre!5e0!3m2!1sen!2sus!4v1736402860884!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="GHB Clinic Location"
                                />
                            </div>

                        </div>
                        <div className="rounded-lg bg-white p-6 shadow-lg max-w-2xl">
                            <h3 className="mb-6 text-xl font-semibold text-gray-900">Get in Touch with Us</h3>
                            <p className="mb-6 text-gray-600">
                                We are here to answer any questions you may have or to help you book a free consultation. Simply fill out
                                the form below, and a member of our team will get back to you as soon as possible.
                            </p>
                            <p className="mb-8 italic text-gray-600">Let&apos;s start your journey to enhanced natural beauty!</p>

                            <form onSubmit={handleSubmit} className="grid gap-6 ">
                                <div className="grid gap-6 md:grid-cols-2 ">
                                    <div>
                                        <Input
                                            name="fullName"
                                            placeholder="Full Name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="border-gray-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="border-gray-300"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Input
                                        name="mobile"
                                        type="tel"
                                        placeholder="Mobile Number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="border-gray-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="min-h-[120px] border-gray-300"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-rose-300 text-black hover:bg-rose-300 hover:text-white">
                                    Submit Details
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className=" mt-10 flex flex-wrap items-center w-full justify-evenly">
                        <div className="flex flex-col items-center gap-2 text-gray-600">
                            <MapPin className="h-8 w-8 " />
                            <p>
                                Pharmacentre Pharmacy,149 Edgware Rd,<br /> Tyburnia, London W2 2HU
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-gray-600">
                            <Mail className="h-8 w-8 " />
                            <a href="mailto:info@panacea-clinic.co.uk" className="hover:text-blue-600">
                                info@panacea-clinic.co.uk
                            </a>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-gray-600">
                            <Phone className="h-8 w-8 " />
                            <a href="tel:07388869697" className="hover:text-blue-600">
                                07388869697
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
