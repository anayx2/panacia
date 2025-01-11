import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        id: 1,
        title: "Anti-Wrinkle Treatments",
        description: "Smooth out fine lines and wrinkles with our advanced anti-wrinkle treatments, designed to rejuvenate your skin and restore youthful vitality.",
        image: "/blog.png",
        href: "/services/wellness-consultation"
    },
    {
        id: 2,
        title: "Mesotherapy",
        description: "A non-invasive treatment to target problem areas, delivering a blend of vitamins and nutrients directly into the skin to improve tone and texture.",
        image: "/blog1.png",
        href: "/services/abhyanga"
    },
    {
        id: 3,
        title: "Fat Dissolving",
        description: "Achieve a more contoured appearance with fat-dissolving injections, which target stubborn fat areas for a slimmer silhouette.",
        image: "/aboutcover.jpg",
        href: "/services/shirodhara"
    },
    {
        id: 4,
        title: "Microneedling",
        description: "Promote collagen production and improve skin texture with this advanced treatment, ideal for reducing scarring, fine lines, and pore size.",
        image: "/aboutcover.jpg",
        href: "/services/kati-basti"
    },
    {
        id: 5,
        title: "Vitamin B12 Injection",
        description: "Boost your energy levels, enhance mood, and improve overall wellness with our safe and effective Vitamin B12 injections.",
        image: "/blog.png",
        href: "/services/prushta-basti"
    },
    {
        id: 6,
        title: "Hopi Ear Candle",
        description: "A relaxing treatment to help clear blocked sinuses and improve ear health, promoting relaxation and comfort.",
        image: "/blog1.png",
        href: "/services/netra-basti"
    }
]

export default function ServicesPage() {
    return (<>
        <section className='relative h-[60dvh] w-full'>
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/sample/4.png')"
                }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                <h2>
                    Services                </h2>
            </div>
        </section>
        <section className=" px-4 py-16">
            <div className="container mx-auto w-[90%]">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.id} className="group relative">
                            {/* Card Container */}
                            <div className="overflow-hidden rounded-2xl ">
                                {/* Image - Static */}
                                <div className="relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={800}
                                        height={800}
                                        className="aspect-[6/3] w-full object-cover z-30 rounded-2xl"
                                    />
                                </div>

                                {/* Content Container */}
                                <div className='flex w-full justify-center -mt-5 z-50'>
                                    <div className="bg-gradient-to-b from-rose-100 to-rose-300 w-[95%] z-50 rounded-2xl">
                                        {/* Title - Static */}
                                        <h3 className="p-4 text-center text-xl font-semibold text-black">
                                            {service.title}
                                        </h3>

                                        {/* Description - Expandable */}
                                        <div className="max-h-0 overflow-hidden px-6 text-center text-black transition-all duration-300 ease-in-out group-hover:max-h-[300px] group-hover:py-6">
                                            <p className="mb-6">
                                                {service.description}
                                            </p>
                                            <Link
                                                href={service.href}
                                                className="inline-block rounded-md bg-rose-500 px-6 py-2 text-sm font-medium text-white "
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className=''>

        </section>
    </>
    )
}

