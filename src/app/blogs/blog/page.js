'use client'
import { Check, ReplyIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const categoryColors = {
    Educational: "bg-rose-500",
    "Healthy Food": "bg-rose-500"
}

const comments = [
    {
        id: 1,
        author: "Joe Doe",
        date: "September 13, 2024",
        content: "This is exactly what i was looking for, thank you so much for these tutorials"
    },
    {
        id: 2,
        author: "Mike",
        date: "September 13, 2024",
        content: "It would be great to try this theme for my businesses"
    },
    {
        id: 3,
        author: "Elicia",
        date: "September 13, 2024",
        content: "What a nice article. It keeps me reading more and more!"
    }
]

const handleSubmit = () => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
}

export default function BlogPost() {

    const [rememberMe, setRememberMe] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        comment: ''
    })
    return (
        <>
            <article className="prose prose-lg max-w-none space-y- m">
                {/* Categories */}
                <div className="mb-6 flex gap-2 not-prose mt-5">
                    {["Educational", "Healthy Food"].map((category) => (
                        <span
                            key={category}
                            className={`rounded-full ${categoryColors[category]} px-3 py-1 text-xs font-medium text-white`}
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Title */}
                {/* <h1 className="mb-4 text-4xl font-bold">
                    Top dos & don'ts for Valentine's Day with your pet
                </h1> */}

                {/* Date */}
                <time className="block text-sm text-gray-500">
                    August 23, 2024
                </time>

                {/* Featured Image */}
                <div className="my-8 aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                        src="/image1.jpg"
                        alt="Cute hamster eating"
                        width={1200}
                        height={750}
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <p>
                    Valentine's Day is a day when people celebrate their relationships with loved ones. And for many people, this includes their pets. Pets are a big part of our lives because they spread so much joy and happiness. So, what can you do to celebrate this love-filled day with your furry friend?
                </p>

                <h3>Things You'll Need to Get Started</h3>
                <p>
                    Before you start training, it's important to have the right tools. Here are a few essentials:
                </p>

                <p>
                    While training your dog can mean teaching them fun party tricks, most dog training is for practical purposes. Teaching your dog a few basic commands helps build their confidence, strengthens your relationship, and most importantly keeps them safe in dangerous situations.
                </p>
            </article>
            <article className="prose prose-lg max-w-none mt-5 space-y-2">
                {/* Introduction */}
                <p className="text-gray-600">
                    While training your dog can mean teaching them fun party tricks, most dog training is for practical purposes. Teaching your dog a few basic commands helps build their confidence, strengthens your relationship, and most importantly keeps them safe in dangerous situations.
                </p>

                {/* Getting Started Section */}
                <h2 className="text-2xl font-semibold text-gray-900">Things You'll Need to Get Started</h2>
                <p className="text-gray-600">
                    Before you start training, it's important to have the right tools. Here are a few essentials:
                </p>

                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-rose-400" />
                        <div>
                            <span className="font-medium text-gray-900">Training treats:</span>
                            <span className="text-gray-600"> These should be small, tasty treats that your dog will find irresistible.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-rose-400" />
                        <div>
                            <span className="font-medium text-gray-900">A dog treat bag:</span>
                            <span className="text-gray-600"> A treat pouch or bag can help you keep treats handy while you're training.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-rose-400" />
                        <div>
                            <span className="font-medium text-gray-900">A sturdy leash and collar:</span>
                            <span className="text-gray-600"> Make sure they fit your dog snugly and comfortably.</span>
                        </div>
                    </li>
                </ul>

                {/* Sit Command Section */}
                <h2 className="text-2xl font-semibold text-gray-900">How to Teach Your Dog to Sit</h2>
                <p className="text-gray-600">
                    Sitting is incompatible with many of your pup's unwanted behaviors, like jumping up on visitors or counter-surfing. If your dog starts to display these unwanted behaviors, you can put them into the "sit" position and reward them for their good behavior.
                </p>

                {/* Testimonial */}
                <blockquote className="my-8 border-l-4 border-rose-400 bg-rose-50 p-6">
                    <p className="mb-2 text-lg italic text-gray-700">
                        "My dog takes these willingly as a treat. I give him one a day. They seem to help his tummy."
                    </p>
                    <footer className="text-sm text-gray-600">
                        — Noemi Medina
                    </footer>
                </blockquote>

                {/* Lie Down Command Section */}
                <h2 className="text-2xl font-semibold text-gray-900">How to Teach Your Dog to Lie Down</h2>
                <p className="text-gray-600">
                    Lie down is another command that's easily taught with lure training, and it's a great natural next step from "sit." With your dog in a seated position, hold a treat in front of their nose. Slowly move the treat toward the ground and closer to you, encouraging your dog to follow with their nose. If your dog struggles to get all the way down, try pulling the treat further away from their body.
                </p>

                {/* Images Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                            src="/doc1.jpg"
                            alt="Close up of a pug looking at the camera"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                            src="/doc1.jpg"
                            alt="Chocolate labrador against blue background"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </article>
            <section className='my-10'>
                {/* Comment Form */}
                <div>
                    <h3 className="mb-6 text-xl font-semibold text-gray-900">Leave A Reply</h3>
                    <p className="mb-6 text-sm text-gray-500">
                        Your email address will not be published. Required fields are marked *
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name, Email, Website Grid */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name *"
                                    required
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-400 focus:outline-none"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    required
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-400 focus:outline-none"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="url"
                                    placeholder="Website"
                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-400 focus:outline-none"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Comment Textarea */}
                        <div>
                            <textarea
                                placeholder="Comment *"
                                required
                                rows={5}
                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-gray-400 focus:outline-none"
                                value={formData.comment}
                                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            />
                        </div>

                        {/* Remember Me Checkbox */}
                        <div>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span className="text-sm text-gray-600">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="rounded-md bg-red-500 px-6 py-2 text-white transition-colors hover:bg-red-600"
                        >
                            Post Comment
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}