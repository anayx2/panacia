'use client'
import React, { useState } from 'react'
import { MapPin, Mail, Phone, User2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { motion } from 'framer-motion'

// Animation variants
const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
}

const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
}

const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
}

const formVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            staggerChildren: 0.1
        }
    }
}

const inputVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
    }
}

const contacts = [
    {
        icon: MapPin,
        title: "Location",
        details: ["Pharmacentre Pharmacy 149 Edgware Rd Tyburnia London W2 2HU"],
        href: 'https://www.google.com/maps/dir//Pharmacentre+149+Edgware+Rd+Tyburnia,+London+W2+2HU+United+Kingdom/@51.5173113,-0.1667256,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48761ab507196af5:0xe5cfb58af2aabf40!2m2!1d-0.1666838!2d51.5173291?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        icon: Mail,
        title: "Email Us",
        details: ["info@panacea-clinic.co.uk"],
        href: 'mailto:info@panacea-clinic.co.uk'
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["+44 7388 869697"],
        href: 'tel:+44-7388869697'
    },
]

const Page = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        message: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className='relative h-[50dvh] w-full'
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/banner-pages.png')"
                    }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                    variants={slideUp}
                    className="relative z-10 flex h-full items-center justify-center px-4 text-white"
                >
                    <h2
                        className="sm:text-4xl md:text-6xl lg:text-6xl text-white"
                    >Get in Touch with Us</h2>
                </motion.div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="py-12 md:py-16 flex justify-center"
            >
                <div className="container w-[90%]">
                    {/* <motion.h4
                        variants={slideUp}
                        className='text-center my-10'
                    >
                        We'd love to hear from you! Whether you have a question, want to book a consultation, or need more information about our services, our team is here to help.
                    </motion.h4> */}

                    <motion.div
                        variants={staggerCards}
                        className="grid gap-6 md:grid-cols-3 "
                    >
                        {contacts.map((contact, index) => (
                            <motion.div key={index} variants={cardVariant} className=''>
                                <Card className="border-none bg-gradient-to-r from-rose-100 to-rose-300 flex items-stretch justify-center h-full">
                                    <Link href={contact.href}>
                                        <CardContent className="flex flex-col items-center p-6 text-center">
                                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                                                <contact.icon className="h-8 w-8 text-rose-400" />
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
                                    </Link>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
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
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="w-full py-16 md:py-24 lg:py-32 flex justify-center"
            >
                <div className="container px-4 md:px-6 max-w-6xl bg-rose-50 py-10 rounded-2xl">
                    <motion.div
                        variants={formVariant}
                        className="flex flex-col items-center space-y-4 text-center"
                    >
                        <h2 className="py-5">Send Us A Message</h2>
                        <div className="w-full max-w-3xl">
                            <form onSubmit={handleSubmit} className="grid gap-6">
                                <motion.div
                                    variants={formVariant}
                                    className="grid gap-4 sm:grid-cols-3"
                                >
                                    <motion.div variants={inputVariant} className="w-full relative">
                                        <Input
                                            name="fullName"
                                            placeholder="Full Name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-white border-gray-200 pr-10"
                                            required
                                        />
                                        <User2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </motion.div>
                                    <motion.div variants={inputVariant} className="w-full relative">
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
                                    </motion.div>
                                    <motion.div variants={inputVariant} className="w-full relative">
                                        <Input
                                            name="Phone"
                                            type="number"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white border-gray-200 pr-10 appearance-none"
                                            style={{ MozAppearance: 'textfield' }}
                                        />
                                        <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </motion.div>
                                </motion.div>

                                <motion.div variants={inputVariant} className="w-full">
                                    <Textarea
                                        name="message"
                                        placeholder="Write Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full min-h-[200px] bg-white border-gray-200"
                                        required
                                    />
                                </motion.div>

                                <motion.div
                                    variants={inputVariant}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-rose-400 text-white font-medium py-6"
                                    >
                                        SEND MESSAGE →
                                    </Button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}

export default Page