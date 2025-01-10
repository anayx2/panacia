import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="relative h-[120dvh] w-full overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 min-h-full min-w-full object-cover"
                    aria-hidden="true"
                >
                    <source src="/website_3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay to ensure text visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                {/* CTA Container */}
                <div></div>
                <div className="relative z-10 flex h-full w-[50%] items-center justify-center px-4 sm:px-6 lg:px-8">
                    {/* <div className="text-left">
                        <h1
                            className="mb-4 text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl animate-fade-down [animation-delay:200ms] [animation-fill-mode:forwards] opacity-0"
                        >
                            Panacea Health & Beauty Clinic
                        </h1>
                        <p
                            className="mb-8 text-xl text-gray-300 sm:text-2xl animate-fade-down [animation-delay:400ms] [animation-fill-mode:forwards] opacity-0"
                        >
                            Skin Care & Beauty Treatments
                        </p>
                        <button
                            type="submit"
                            className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#fea6a4] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group animate-fade-up [animation-delay:600ms] [animation-fill-mode:forwards] opacity-0"
                        >
                            Schedule Free Consultation
                            <svg
                                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    className="fill-gray-800 group-hover:fill-gray-800"
                                />
                            </svg>
                        </button>
                    </div> */}
                    <div className='w-[100%] flex justify-center'>
                        <div className='w-[80%]'>
                            <div className="text-left flex flex-col items-start justify-start">
                                <h1
                                    className=" uppercase mb-4 text-3xl font-extrabold tracking-tight text-black sm:text-5xl md:text-5xl animate-fade-down [animation-delay:200ms] [animation-fill-mode:forwards] opacity-0"
                                >
                                    Panacea Health & Beauty Clinic
                                </h1>
                                <p
                                    className="mb-8 text-lg text-black sm:text-xl animate-fade-down [animation-delay:400ms] [animation-fill-mode:forwards] opacity-0"
                                >
                                    Skin Care & Beauty Treatments
                                </p>
                                <div className='flex gap-10 text-center '>
                                    <span className='flex flex-col  items-center'>
                                        <h2 className='text-3xl font-extrabold tracking-tight text-black sm:text-5xl md:text-4xl'> 100%</h2>
                                        <p className='text-sm uppercase'> Costumer Satisfaction</p>
                                    </span>
                                    <span className='flex flex-col items-center'>
                                        <h2 className='text-3xl font-extrabold tracking-tight text-black sm:text-5xl md:text-4xl'> 100%</h2>
                                        <p className='text-sm uppercase'> Experties</p>
                                    </span>
                                    <span className='flex flex-col  items-center'>
                                        <h2 className='text-3xl font-extrabold tracking-tight text-black sm:text-5xl md:text-4xl'>0</h2>
                                        <p className='text-sm uppercase'> Complaints</p>
                                    </span>
                                    <span className='flex flex-col  items-center'>
                                        <h2 className='text-3xl font-extrabold tracking-tight text-black sm:text-5xl md:text-4xl'>100</h2>
                                        <p className='text-sm uppercase'> Efficiency</p>
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="flex justify-center gap-2 mt-5 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#fea6a4] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group animate-fade-up [animation-delay:600ms] [animation-fill-mode:forwards] opacity-0"
                                >
                                    Schedule Free Consultation
                                    <svg
                                        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            className="fill-gray-800 group-hover:fill-gray-800"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero