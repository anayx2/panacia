'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'


const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.0, ease: 'easeOut' }
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
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.0, ease: 'easeOut' }
    }
};

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const FilteredGallery = () => {
    const galleryData = [
        { id: 1, src: "/anti-wrinkle/1.jpg", category: "Anti Wrinkle" },
        { id: 2, src: "/anti-wrinkle/2.jpg", category: "Anti Wrinkle" },
        { id: 3, src: "/anti-wrinkle/3.jpg", category: "Anti Wrinkle" },
        { id: 4, src: "/anti-wrinkle/4.jpg", category: "Anti Wrinkle" },
        { id: 7, src: "/anti-wrinkle/7.jpg", category: "Anti Wrinkle" },
        { id: 8, src: "/anti-wrinkle/8.jpg", category: "Anti Wrinkle" },
        { id: 9, src: "/Hipo-ear-candle/1.jpg", category: "Hipo Ear Candle" },
        { id: 10, src: "/Hipo-ear-candle/2.jpg", category: "Hipo Ear Candle" },
        { id: 10, src: "/Mesotherapy/4.jpg", category: "Mesotherapy" },
        { id: 11, src: "/Mesotherapy/2.jpg", category: "Mesotherapy" },
        { id: 12, src: "/Mesotherapy/3.jpg", category: "Mesotherapy" },
        { id: 13, src: "/Microneedling/1.jpg", category: "Microneedling" },
        { id: 14, src: "/Microneedling/2.jpg", category: "Microneedling" },
        { id: 15, src: "/Skin-booster/1.jpg", category: "Skin Booster" },
        { id: 16, src: "/Skin-booster/2.jpg", category: "Skin Booster" },
        { id: 17, src: "/Skin-booster/3.jpg", category: "Skin Booster" },
        { id: 18, src: "/Skin-booster/4.jpg", category: "Skin Booster" },
        { id: 19, src: "/Hydeafacial-Pictures/1.jpg", category: "Hydeafacial" },
        { id: 20, src: "/Hydeafacial-Pictures/2.jpg", category: "Hydeafacial" },
        { id: 21, src: "/Hydeafacial-Pictures/3.jpg", category: "Hydeafacial" },
        { id: 22, src: "/Hydeafacial-Pictures/4.jpg", category: "Hydeafacial" },
        { id: 23, src: "/Hydeafacial-Pictures/5.jpg", category: "Hydeafacial" },
        { id: 24, src: "/Hydeafacial-Pictures/6.jpg", category: "Hydeafacial" },
        { id: 25, src: "/Hydeafacial-Pictures/7.jpg", category: "Hydeafacial" },
        { id: 26, src: "/Hydeafacial-Pictures/8.jpg", category: "Hydeafacial" },
        { id: 27, src: "/Hydeafacial-Pictures/9.jpg", category: "Hydeafacial" },
        { id: 28, src: "/Hydeafacial-Pictures/10.jpg", category: "Hydeafacial" },
        { id: 29, src: "/Hydeafacial-Pictures/11.jpg", category: "Hydeafacial" },

    ];

    const categories = ["Show All", "Anti Wrinkle", "Hipo Ear Candle", "Mesotherapy", "Microneedling", "Skin Booster", "Hydeafacial"];
    const [activeFilter, setActiveFilter] = useState("Show All");

    const filteredImages = activeFilter === "Show All"
        ? galleryData
        : galleryData.filter(img => img.category === activeFilter);

    const distributeImages = () => {
        const columns = {
            col1: [],
            col2: [],
            col3: [],
            col4: []
        };

        filteredImages.forEach((image, index) => {
            const colIndex = index % 4;
            switch (colIndex) {
                case 0:
                    columns.col1.push(image);
                    break;
                case 1:
                    columns.col2.push(image);
                    break;
                case 2:
                    columns.col3.push(image);
                    break;
                case 3:
                    columns.col4.push(image);
                    break;
            }
        });

        return columns;
    };

    const columns = distributeImages();

    return (
        <>
            <motion.section
                className='relative h-[50dvh] w-full'
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >                <div
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
                    >Gallery

                    </motion.h2>
                </motion.div>
            </motion.section>

            <section className='py-10 flex flex-col justify-center items-center'>
                <div className="flex flex-wrap justify-center gap-2 my-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 rounded-md transition-all ${activeFilter === category
                                ? 'bg-rose-400 text-white'
                                : 'bg-rose-100 hover:bg-rose-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className='w-[90%]'>
                    <motion.div
                        variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.values(columns).map((column, colIndex) => (
                            column.length > 0 && (
                                <motion.div
                                    variants={fadeInUp}

                                    key={colIndex} className="flex flex-col gap-4">
                                    {column.map((image) => (
                                        <div key={image.id} className="relative w-full group">
                                            <Image
                                                className="h-auto w-full rounded-lg transition-all duration-300 group-hover:opacity-80"
                                                width={500}
                                                height={500}
                                                src={image.src}
                                                alt={`Gallery image - ${image.category}`}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-gradient-to-r from-rose-100 to-rose-300 px-4 py-2 rounded-md shadow-lg transform scale-95 group-hover:scale-100 transition-transform duration-300">
                                                    <span className="text-gray-800 font-medium text-sm">
                                                        {image.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </ motion.div>
                            )
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default FilteredGallery;