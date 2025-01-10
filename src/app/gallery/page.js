'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const FilteredGallery = () => {
    const galleryData = [
        { id: 1, src: "/sample/1.png", category: "Anti Wrinkle" },
        { id: 2, src: "/about-img1.jpg", category: "Mesotherapy" },
        { id: 3, src: "/sample/3.png", category: "Fat Dissolving" },
        { id: 4, src: "/about-img1.jpg", category: "Microneedling" },
        { id: 5, src: "/sample/5.png", category: "Bio Filler" },
        { id: 6, src: "/sample/6.png", category: "Anti Wrinkle" },
        { id: 7, src: "/sample/7.png", category: "Mesotherapy" },
        { id: 8, src: "/about-img1.jpg", category: "Fat Dissolving" },
        { id: 9, src: "/sample/filer.png", category: "Microneedling" },
        { id: 10, src: "/sample/1.png", category: "Bio Filler" },
        { id: 11, src: "/sample/1.png", category: "Anti Wrinkle" },
        { id: 12, src: "/about-img1.jpg", category: "Mesotherapy" },
    ];

    const categories = ["Show All", "Anti Wrinkle", "Mesotherapy", "Fat Dissolving", "Microneedling", "Bio Filler"];
    const [activeFilter, setActiveFilter] = useState("Show All");

    // Filter images based on selected category
    const filteredImages = activeFilter === "Show All"
        ? galleryData
        : galleryData.filter(img => img.category === activeFilter);

    // Distribute images evenly across columns
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
            <section className='relative h-[60dvh] w-full'>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/aboutcover.jpg')"
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
                    <h2>Gallery</h2>
                </div>
            </section>

            <section className='py-10 flex flex-col justify-center items-center'>
                <div className="flex flex-wrap justify-center gap-2 my-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 rounded-md transition-all ${activeFilter === category
                                ? 'bg-rose-400 text-white'
                                : 'bg-rose-100 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className='w-[90%]'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.values(columns).map((column, colIndex) => (
                            column.length > 0 && (
                                <div key={colIndex} className="flex flex-col gap-4">
                                    {column.map((image) => (
                                        <div key={image.id} className="w-full">
                                            <Image
                                                className="h-auto w-full rounded-lg transition-all duration-300 hover:opacity-80"
                                                width={500}
                                                height={500}
                                                src={image.src}
                                                alt={`Gallery image - ${image.category}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FilteredGallery;