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
        { id: 1, src: "/sample/1.png", category: "Anti Wrinkle" },
        { id: 2, src: "/about-img1.jpg", category: "Mesotherapy" },
        { id: 3, src: "/sample/3.png", category: "Fat Dissolving" },
        { id: 4, src: "/sample/filer.png", category: "Microneedling" },
        { id: 5, src: "/sample/5.png", category: "Bio Filler" },
        { id: 6, src: "/sample/6.png", category: "Anti Wrinkle" },
        { id: 7, src: "/sample/7.png", category: "Mesotherapy" },
        { id: 8, src: "/sample/5.png", category: "Fat Dissolving" },
        // { id: 9, src: "/sample/filer.png", category: "Microneedling" },
        { id: 10, src: "/sample/2.png", category: "Bio Filler" },
        { id: 11, src: "/sample/4.png", category: "Anti Wrinkle" },
        { id: 12, src: "/sample/8.png", category: "Mesotherapy" },
    ];

    const categories = ["Show All", "Anti Wrinkle", "Mesotherapy", "Fat Dissolving", "Microneedling", "Bio Filler"];
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
                        className="sm:text-4xl md:text-6xl lg:text-6xl"
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