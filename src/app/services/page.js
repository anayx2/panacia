import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        id: 1,
        title: "Wellness Consultation",
        description: "Begin your wellness journey with a personalized consultation where we assess your unique needs and create a tailored treatment plan to help you achieve optimal health and balance.",
        image: "/blog.png",
        href: "/services/wellness-consultation"
    },
    {
        id: 2,
        title: "Abhyanga",
        description: "Abhyanga is a form of Ayurvedic massage that involves the use of warm herbalized oil and a combination of gentle massage to stimulate circulation, promote relaxation, and improve overall health and wellbeing.",
        image: "/blog1.png",
        href: "/services/abhyanga"
    },
    {
        id: 3,
        title: "Shirodhara",
        description: "Shirodhara is a traditional Ayurvedic therapy in which warm herbalized oil is poured on the forehead. It provides deep relaxation, activates the parasympathetic nervous system, reduces anxiety, reduces stress and promotes better sleep.",
        image: "/aboutcover.jpg",
        href: "/services/shirodhara"
    },
    {
        id: 4,
        title: "Kati Basti",
        description: "A specialized treatment for lower back pain where warm medicated oil is pooled on the lower back region, providing relief from chronic pain and improving spinal health.",
        image: "/aboutcover.jpg",
        href: "/services/kati-basti"
    },
    {
        id: 5,
        title: "Prushta Basti",
        description: "Similar to Kati Basti, this treatment focuses on the entire back area, using warm oils to relieve tension, reduce pain, and promote healing throughout the back muscles and spine.",
        image: "/blog.png",
        href: "/services/prushta-basti"
    },
    {
        id: 6,
        title: "Netra Basti",
        description: "A gentle eye treatment where warm herbal ghee is placed around the eyes to nourish, strengthen and rejuvenate the eye muscles and improve vision.",
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
                    backgroundImage: "url('/aboutcover.jpg')"
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
                                    <div className="bg-gradient-to-r from-[#FEC2BA] to-[#FFA7A9] w-[95%] z-50 rounded-2xl">
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

