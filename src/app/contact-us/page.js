'use client'
import React, { useState } from 'react'
import { MapPin, Mail, Phone, User2 } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link';

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
                        backgroundImage: "url('/sample/8.png')"
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
                            <Card key={index} className="border-none bg-gradient-to-r from-rose-100 to-rose-300">
                                <CardContent className="flex flex-col items-center p-6 text-center">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                                        <contact.icon className="h-8 w-8 text-rose-00" />
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
                        title="Panacea Health & Beauty Clinic Location"
                    />
                </div>
            </section>
            <section className="w-full py-16 md:py-24 lg:py-32 flex justify-center ">
                <div className="container px-4 md:px-6 max-w-6xl bg-rose-50 py-10 rounded-2xl">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h2 className="">SEND US MESSAGE</h2>
                        <div className="w-full max-w-3xl">
                            <form onSubmit={handleSubmit} className="grid gap-6">
                                <div className="grid gap-4 sm:grid-cols-3">
                                    <div className="w-full relative">
                                        <Input
                                            name="fullName"
                                            placeholder="Full Name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-white border-gray-200 pr-10"
                                            required
                                        />
                                        <User2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="w-full relative">
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Email Us"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white border-gray-200 pr-10"
                                            required
                                        />
                                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="w-full relative">
                                        <Input
                                            name="website"
                                            type="url"
                                            placeholder="Website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            className="w-full bg-white border-gray-200 pr-10"
                                        />
                                        {/* <Link className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" /> */}
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Textarea
                                        name="message"
                                        placeholder="Write Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full min-h-[200px] bg-white border-gray-200"
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-rose-400 text-white font-medium py-6"
                                >
                                    SEND MESSAGE →
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default page