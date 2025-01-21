'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { motion } from 'framer-motion'

const blogs = [
    {
        id: 1,
        title: "The Benefits of Facial Rejuvenation Treatments for ageing Skin",
        excerpt: "Ageing is inevitable, but who says we can’t age gracefully? Facial rejuvenation treatments...",
        date: "August 23, 2024",
        image: "/about-img1.jpg",
        categories: ["Educational", "Healthy Food"],
        bgColor: "bg-orange-100",
        href: "/blogs/blog"
    },
    {
        id: 2,
        title: "Polynucleotide Treatment: The Next Big Step in Skin Rejuvenation",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/image1.jpg",
        categories: ["Healthy Food", "Lifestyles"],
        bgColor: "bg-sky-100",
        href: "/blogs/blog"
    },
    {
        id: 3,
        title: "Top 5 new year's resolutions for pets and pet parents in 2024",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/image1.jpg",
        categories: ["Lifestyles", "News"],
        bgColor: "bg-red-100",
        href: "/blogs/blog"
    },
    {
        id: 4,
        title: "Top dos & don't's for Valentine's Day with your pet",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/about-img1.jpg",
        categories: ["Educational", "Healthy Food"],
        bgColor: "bg-orange-100",
        href: "/blogs/blog"
    },
    {
        id: 5,
        title: "5 Questions you might have about dehydrated dog food",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/image1.jpg",
        categories: ["Healthy Food", "Lifestyles"],
        bgColor: "bg-sky-100",
        href: "/blogs/blog"
    },
    {
        id: 6,
        title: "Top 5 new year's resolutions for pets and pet parents in 2024",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/image1.jpg",
        categories: ["Lifestyles", "News"],
        bgColor: "bg-red-100",
        href: "/blogs/blog"
    }
]

const categoryColors = {
    Educational: "bg-rose-400",
    "Healthy Food": "bg-rose-400",
    Lifestyles: "bg-rose-400",
    News: "bg-rose-400",
    Nutrition: "bg-rose-400",
    "Tip & Tricks": "bg-rose-400"
}


// Create motion components
const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionUl = motion.ul;
const MotionLi = motion.li;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};
const slideIn = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.0, ease: 'easeOut' }
    }
};

export default function BlogSection() {
    return (<>

        <motion.section
            className='relative h-[50dvh] w-full'
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/banner-pages.png')"
                }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <motion.div
                className="relative z-10 flex h-full items-center justify-center px-4 text-white"
                variants={fadeInUp}
            >
                <motion.h2 variants={fadeInUp}
                    className="sm:text-4xl md:text-6xl lg:text-6xl text-white"
                >
                    Blogs
                </motion.h2>
            </motion.div>
        </motion.section>
        <MotionSection
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
            className="container mx-auto px-4 py-16 flex justify-center">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-[95%]">
                {blogs.map((blog) => (
                    <Link
                        key={blog.id}
                        href={blog.href}
                        className="group block overflow-hidden rounded-2xl transition-transform "
                    >
                        <article className={`h-full border border-1 rounded-2xl`}>
                            {/* Image */}
                            <MotionDiv variants={fadeIn} className="relative aspect-[16/10] overflow-hidden ">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Categories */}
                                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                                    {blog.categories.map((category) => (
                                        <span
                                            key={category}
                                            className={`rounded-full ${categoryColors[category]} px-3 py-1 text-xs font-medium text-white`}
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </MotionDiv>

                            {/* Content */}
                            <div className="space-y-4 p-6">
                                <time className="text-sm text-gray-600">{blog.date}</time>

                                <h3 className="text-xl font-semibold text-gray-900">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600">
                                    {blog.excerpt}
                                </p>

                                <div className="inline-flex items-center gap-2 font-bold text-rose-400">
                                    Read More
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </MotionSection>
        <section className='py-10'>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="/blogs/blog" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/blogs/blog" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/blogs/blog" >
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/blogs/blog">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="/blogs/blog" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    </>
    )
}

