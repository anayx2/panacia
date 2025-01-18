import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const posts = [
    { id: 1, image: '/about-img1.jpg' },
    { id: 2, image: '/sample/3.png' },
    { id: 3, image: '/sample/4.png' },
    { id: 4, image: '/sample/5.png' },
    { id: 5, image: '/sample/6.png' },
    { id: 6, image: '/sample/7.png' },
    { id: 7, image: '/sample/8.png' },
];

const MarqueeCarousel = () => {
    const scrollerRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const animationRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const duplicatedPosts = [...posts, ...posts, ...posts];

    useEffect(() => {
        const scroller = scrollerRef.current;
        let scrollPosition = 0;

        const scroll = () => {
            if (!isMouseDown && !isHovered) {  // Add isHovered check here
                scrollPosition += 1.5;
                if (scrollPosition >= scroller.scrollWidth / 3) {
                    scrollPosition = 0;
                }
                scroller.scrollLeft = scrollPosition;
            }
            animationRef.current = requestAnimationFrame(scroll);
        };

        scroll();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isMouseDown, isHovered]);  // Add isHovered to dependency array

    const handleMouseDown = (e) => {
        e.preventDefault(); // Prevent default dragging behavior
        setIsMouseDown(true);
        const scroller = scrollerRef.current;
        const startX = e.pageX - scroller.offsetLeft;
        setStartX(startX);
        setScrollLeft(scroller.scrollLeft);
        scroller.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsMouseDown(false);
        if (scrollerRef.current) {
            scrollerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        if (scrollerRef.current) {
            scrollerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const scroller = scrollerRef.current;
        const x = e.pageX - scroller.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjusted sensitivity
        scroller.scrollLeft = scrollLeft - walk;
    };

    // Prevent default drag behavior on images
    const preventDragHandler = (e) => {
        e.preventDefault();
        return false;
    };

    return (
        <>
            <div className="h-10 bg-rose-100" />
            <div className="relative w-full overflow-hidden bg-gradient-to-b from-rose-100 to-rose-300 py-20">
                <div
                    ref={scrollerRef}
                    className="py-20 flex overflow-x-hidden relative w-full cursor-grab select-none"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%)'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <Link href={'https://www.instagram.com/panaceaskinclinic/'}>
                        <div className="flex gap-4">
                            {duplicatedPosts.map((post, index) => (
                                <div
                                    key={`${post.id}-${index}`}
                                    className="flex-none w-[300px] md:w-[300px] p-4 transform transition-transform duration-300 hover:scale-105"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onDragStart={preventDragHandler}
                                >
                                    <div className="relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                                        {/* Instagram Post Header */}
                                        <div className="p-2 flex items-center space-x-2 select-none">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                                                <Image
                                                    src="/mini-logo.png"
                                                    width={40}
                                                    height={40}
                                                    alt="logo"
                                                    className="rounded-full bg-white select-none"
                                                    draggable="false"
                                                />
                                            </div>
                                            <div className="text-sm text-left">
                                                <p className="font-medium text-sm">Panacea Skin Clinic</p>
                                                <p className="text-xs text-gray-500">London</p>
                                            </div>
                                        </div>

                                        {/* Post Image */}
                                        <img
                                            src={post.image || "/placeholder.svg"}
                                            alt={`Instagram post ${post.id}`}
                                            className="w-full h-[250px] object-cover select-none"
                                            draggable="false"
                                            onDragStart={preventDragHandler}
                                        />

                                        {/* Post Actions */}
                                        <div className="p-3 flex justify-between items-center select-none">
                                            <div className="flex space-x-4">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                </svg>
                                            </div>
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Link>
                </div>

                {/* iPhone Mockup (unchanged) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] md:block py-10 pointer-events-none">
                    <div className="instagram__mockup">
                        <img
                            decoding="async"
                            src="https://p-de-p.co.uk/wp-content/themes/pdp/assets/img/iphone-mockup/border.png"
                            alt=""
                            className="instagram__mockup-border"
                            style={{ width: "350px" }}
                        />
                    </div>
                </div>

                {/* Instagram Button */}
                <div className="absolute left-1/2 -bottom-[1.8rem] -translate-x-1/2 -translate-y-1/2 w-[300px] block py-10">
                    <Link href={'https://www.instagram.com/panaceaskinclinic/'}>
                        <button className="w-[230px] p-2 rounded-full bg-black text-white">
                            Instagram
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MarqueeCarousel;