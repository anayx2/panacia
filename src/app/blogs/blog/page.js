import Image from 'next/image'

const categoryColors = {
    Educational: "bg-zinc-800",
    "Healthy Food": "bg-emerald-800"
}

export default function BlogPost() {
    return (
        <>
        <article className="prose prose-lg max-w-none">
            {/* Categories */}
            <div className="mb-6 flex gap-2 not-prose">
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
            <h1 className="mb-4 text-4xl font-bold">
                Top dos & don'ts for Valentine's Day with your pet
            </h1>

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

            <h2>Things You'll Need to Get Started</h2>
            <p>
                Before you start training, it's important to have the right tools. Here are a few essentials:
            </p>

            <p>
                While training your dog can mean teaching them fun party tricks, most dog training is for practical purposes. Teaching your dog a few basic commands helps build their confidence, strengthens your relationship, and most importantly keeps them safe in dangerous situations.
            </p>
        </article>
        </>
    )
}