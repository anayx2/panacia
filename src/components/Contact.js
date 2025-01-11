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
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12 flex flex- items-center justify-between  text-left bg-gradient-to-r from-rose-100 to-rose-300 p-5 rounded-lg">
                    <div className='flex flex-col'>

                        <h1 className="text-3xl font-bold text-gray-900">GHB Clinic London</h1>
                        <h2 className="text-xl text-gray-600">GLOBAL HEALTHCARE AND BEAUTY LTD</h2>
                        <div className="mt-2 ">
                            <p className="text-gray-600">Pharmacentre Pharmacy,149 Edgware Rd </p>
                            <p className="text-gray-600">Tyburnia, London W2 2HU</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                        <div className="flex flex-col items-center text-center">
                            <Mail className="mb-2 h-6 w-6 " />
                            <a href="mailto:info@panacea-clinic.co.uk" className="text-sm  hover:text-blue-600">
                                info@panacea-clinic.co.uk
                            </a>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Phone className="mb-2 h-6 w-6 " />
                            <a href="tel:07388869697" className="text-sm  hover:text-blue-600">
                                07388869697
                            </a>
                        </div>
                    </div>

                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div className="h-full w-full overflow-hidden rounded-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19862.214288866795!2d-0.166726!3d51.517311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab507196af5%3A0xe5cfb58af2aabf40!2sPharmacentre!5e0!3m2!1sen!2sus!4v1736402860884!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="GHB Clinic Location"
                                className="h-full w-full"
                            />
                        </div>


                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg text-left">
                        <h3 className="mb-6 text-2xl font-semibold ">Get in Touch with Us</h3>
                        <p className="mb-6 ">
                            We'd love to hear from you! Whether you have a question, want to book a consultation, or need more information about our services, our team is here to help
                        </p>
                        <p className="mb-8 italic ">Let&apos;s start your journey to enhanced natural beauty!</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <Input
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Input
                                name="mobile"
                                type="tel"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                            <Textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="min-h-[120px]"
                                required
                            />
                            <Button type="submit" className="w-full bg-rose-400 hover:bg-rose-400 ">
                                Submit Details
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

