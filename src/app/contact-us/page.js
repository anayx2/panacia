'use client'
import React, { useState } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from "@/components/ui/card"

const contacts = [
    {
        icon: MapPin,
        title: "Location",
        details: ["Pharmacentre Pharmacy 149 Edgware Rd", " Tyburnia London W2 2HU"],
    },
    {
        icon: Mail,
        title: "Email Us",
        details: ["info@panacea-clinic.co.uk"],
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["07388869697"],
    },
]
const page = () => {
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
                    <h2>Contact Us</h2>
                </div>
            </section>
            <section className="py-12 md:py-16 flex justify-center">
                <div className="container w-[90%]">
                    <div className="grid gap-6 md:grid-cols-3">
                        {contacts.map((contact, index) => (
                            <Card key={index} className="border-none bg-rose-50">
                                <CardContent className="flex flex-col items-center p-6 text-center">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-300 shadow-sm">
                                        <contact.icon className="h-8 w-8 text-rose-100" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{contact.title}</h3>
                                    <div className="space-y-1">
                                        {contact.details.map((detail, idx) => (
                                            <p key={idx} className="text-muted-foreground">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className='h-[70dvh]'>
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
            </section>
            <section className='flex justify-center w-full py-20 bg-rose-50'>
                <div className='w-full max-w-2xl bg-white rounded-2xl p-8'>
                    <form onSubmit={handleSubmit} className="grid gap-6 w-full">
                        <div className="grid gap-6 md:grid-cols-2 w-full">
                            <div className="w-full">
                                <Input
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full border-gray-200"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border-gray-200"
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <Input
                                name="mobile"
                                type="tel"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full border-gray-200"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <Textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full min-h-[120px] border-gray-200"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-rose-300 text-gray-800 hover:bg-rose-300 hover:text-white transition-colors"
                        >
                            Submit Details
                        </Button>
                    </form>
                </div>
            </section>
        </>)
}

export default page