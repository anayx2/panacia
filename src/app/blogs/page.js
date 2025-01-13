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

const blogs = [
    {
        id: 1,
        title: "Top dos & don't's for Valentine's Day with your pet",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/about-img1.jpg",
        categories: ["Educational", "Healthy Food"],
        bgColor: "bg-orange-100",
        href: "#"
    },
    {
        id: 2,
        title: "5 Questions you might have about dehydrated dog food",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/image1.jpg",
        categories: ["Healthy Food", "Lifestyles"],
        bgColor: "bg-sky-100",
        href: "#"
    },
    {
        id: 3,
        title: "Top 5 new year's resolutions for pets and pet parents in 2024",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/image1.jpg",
        categories: ["Lifestyles", "News"],
        bgColor: "bg-red-100",
        href: "#"
    },
    {
        id: 4,
        title: "Top dos & don't's for Valentine's Day with your pet",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/about-img1.jpg",
        categories: ["Educational", "Healthy Food"],
        bgColor: "bg-orange-100",
        href: "#"
    },
    {
        id: 5,
        title: "5 Questions you might have about dehydrated dog food",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/image1.jpg",
        categories: ["Healthy Food", "Lifestyles"],
        bgColor: "bg-sky-100",
        href: "#"
    },
    {
        id: 6,
        title: "Top 5 new year's resolutions for pets and pet parents in 2024",
        excerpt: "Valentine's Day is a day when people celebrate their relationships with loved ones. And for man...",
        date: "August 23, 2024",
        image: "/image1.jpg",
        categories: ["Lifestyles", "News"],
        bgColor: "bg-red-100",
        href: "#"
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

export default function BlogSection() {
    return (<>
        <section className='relative h-[60dvh] w-full'>
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/sample/1.png')"
                }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                <h2>
                    Blogs
                </h2>
            </div>
        </section>
        <section className="container mx-auto px-4 py-16 flex justify-center">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-[95%]">
                {blogs.map((blog) => (
                    <Link
                        key={blog.id}
                        href={blog.href}
                        className="group block overflow-hidden rounded-2xl transition-transform "
                    >
                        <article className={`h-full border border-1 rounded-2xl`}>
                            {/* Image */}
                            <div className="relative aspect-[16/10] overflow-hidden ">
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
                            </div>

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
        </section>
        <section className='py-10'>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" >
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    </>
    )
}

