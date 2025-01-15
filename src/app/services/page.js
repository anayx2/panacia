import MultiStepBooking from '@/components/AppointmentForm'
import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        id: 1,
        title: "Anti-Wrinkle Treatments",
        description: "Smooth away wrinkles with our effective anti-wrinkle treatments, designed to rejuvenate your skin and restore a youthful, radiant appearance",
        image: "/services1/wrinke.jpg",
        href: "/services/wellness-consultation"
    },
    {
        id: 2,
        title: "Mesotherapy",
        description: "Achieve glowing, nourished skin with Mesotherapy, a technique delivering vitamins and nutrients directly to your skin for remarkable results.",
        image: "/blog1.png",
        href: "/services/abhyanga"
    },
    {
        id: 3,
        title: "Fat Dissolving",
        description: "Say goodbye to stubborn fat with our safe and effective fat-dissolving treatments, tailored to sculpt your body effortlessly.",
        image: "/services1/fatdissolving.jpg",
        href: "/services/shirodhara"
    },
    {
        id: 4,
        title: "Microneedling",
        description: "Revitalize your skin with Microneedling, promoting collagen production to reduce scars, fine lines, and improve skin texture.",
        image: "/services1/microneedling.jpg",
        href: "/services/kati-basti"
    },
    {
        id: 5,
        title: "Vitamin B12 Injection",
        description: "Boost your energy and enhance your overall well-being with our Vitamin B12 injections, essential for vitality and health.",
        image: "/services1/cosmetologist-making-injections-face-woman-beauty-salon.jpg",
        href: "/services/prushta-basti"
    },
    {
        id: 6,
        title: "Hopi Ear Candle",
        description: "Experience relaxation and improved ear health with Hopi Ear Candling, a natural therapy to clear blockages and restore balance.",
        image: "/services1/hopiearcandle.jpg",
        href: "/services/netra-basti"
    },
    {
        id: 7,
        title: "IV Drip",
        description: "Rehydrate, rejuvenate, and replenish essential nutrients with our custom IV Drip therapies for optimal wellness.",
        image: "/services1/ivdrip.jpg",
        href: "/services/wellness-consultation"
    },
    {
        id: 8,
        title: "Bio Filler",
        description: "Enjoy natural, non-surgical facial enhancement with Bio Fillers, restoring volume and smoothing out fine lines effectively.",
        image: "/services1/biofillers.jpg",
        href: "/services/abhyanga"
    },
    {
        id: 9,
        title: "PRP Hair Losss",
        description: "Combat hair loss with PRP treatments, stimulating hair growth and strengthening follicles for thicker, healthier hair.",
        image: "/services1/hairloss.jpg",
        href: "/services/shirodhara"
    },
    {
        id: 10,
        title: "PRP Facial",
        description: "Rejuvenate your skin with PRP Facials, boosting collagen and delivering a radiant, youthful complexion.",
        image: "/services1/PRPFacial.jpg",
        href: "/services/kati-basti"
    },
    {
        id: 11,
        title: "PDO threads",
        description: "Lift and tighten sagging skin with PDO threads, a non-invasive solution for a firmer and rejuvenated appearance.",
        image: "/services1/threadspds.jpg",
        href: "/services/prushta-basti"
    },
    {
        id: 12,
        title: "Skin Booster",
        description: "Hydrate and refresh your skin with Skin Boosters, enhancing elasticity and restoring your natural glow effortlessly.",
        image: "/services1/skinbooster.jpg",
        href: "/services/netra-basti"
    },
    {
        id: 13,
        title: "Dermaplaning",
        description: "Exfoliate dead skin and remove peach fuzz with Dermaplaning, leaving your skin smooth, radiant, and makeup-ready.",
        image: "/services1/dermaplanning.jpgs",
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
        <section className=" px-4 py-20">
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
                                                // href={service.href}
                                                href={'/services/dermal-fillers'}
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
        <section className='bg-rose-50 py-20'>
            <h2 className='text-center'>
                Schedule Your Serenity

            </h2>
            <MultiStepBooking />
        </section>
    </>
    )
}

