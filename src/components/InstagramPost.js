
'use client'
import React, { useRef, useState, useEffect } from 'react';

const InstagramFeed = () => {
    const scrollRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [autoScroll, setAutoScroll] = useState(true);

    const posts = [
        { id: 1, image: '/about-img1.jpg' },
        { id: 2, image: '/sample/3.png' },
        { id: 3, image: '/sample/4.png' },
        { id: 4, image: '/sample/5.png' },
        { id: 5, image: '/sample/6.png' },
        { id: 6, image: '/sample/7.png' },
        { id: 7, image: '/sample/8.png' },
    ];

    // Duplicate posts for infinite scroll effect
    const duplicatedPosts = [...posts, ...posts, ...posts];

    useEffect(() => {
        let animationFrame;
        const scroll = () => {
            if (!isMouseDown && autoScroll && scrollRef.current) {
                scrollRef.current.scrollLeft += 1;

                // Reset scroll position when reaching end
                if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2) {
                    scrollRef.current.scrollLeft = 0;
                }

                animationFrame = requestAnimationFrame(scroll);
            }
        };

        animationFrame = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrame);
    }, [isMouseDown, autoScroll]);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setAutoScroll(false);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        setTimeout(() => setAutoScroll(true), 1000);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (<>
        <div className='h-10 bg-rose-100'>

        </div>
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-rose-100 to-rose-300 py-20">
            {/* Feed Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-hidden select-none"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={(e) => {
                    setIsMouseDown(true);
                    setAutoScroll(false);
                    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
                    setScrollLeft(scrollRef.current.scrollLeft);
                }}
                onTouchEnd={handleMouseUp}
                onTouchMove={(e) => {
                    if (!isMouseDown) return;
                    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
                    const walk = (x - startX) * 2;
                    scrollRef.current.scrollLeft = scrollLeft - walk;
                }}
            >
                {duplicatedPosts.map((post, index) => (
                    <div
                        key={`${post.id}-${index}`}
                        className="flex-shrink-0 w-[300px] md:w-[250px] mx-2 transition-transform duration-300 ease-out"
                    >
                        <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
                            {/* Instagram Post Header */}
                            <div className="p-2 flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-white" />
                                </div>
                                <div className="text-sm text-left">
                                    <p className="font-medium text-sm">Panacea Skin Clinic</p>
                                    <p className="text-xs text-gray-500">London</p>
                                </div>
                            </div>

                            {/* Post Image */}
                            <img
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                className="w-full h-[300px] object-cover"
                            />

                            {/* Post Actions */}
                            <div className="p-3 flex justify-between items-center">
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

            {/* iPhone Mockup */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[275px] hidden md:block py-20">
                <div class="instagram__mockup">
                    <div class="instagram__mockup-username">
                        Panacea Skin Clinic                    </div>
                    <img decoding="async"
                        src="https://p-de-p.co.uk/wp-content/themes/pdp/assets/img/iphone-mockup/screen.png" alt=""
                        class="instagram__mockup-screen" />
                    <img decoding="async"
                        src="https://p-de-p.co.uk/wp-content/themes/pdp/assets/img/iphone-mockup/border.png" alt=""
                        class="instagram__mockup-border" />
                    {/* <a href="https://www.instagram.com/bojangleshairandbeauty/" target="_blank"
                        class="button button--solid button--black instagram__action"><svg width="46" height="13"
                            viewBox="0 0 46 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M2.3914 0.0557413C2.02986 0.181834 1.52007 0.546761 1.15075 0.943817C0.370117 1.78311 -0.102402 2.96005 0.0189004 3.76304C0.127779 4.48402 0.792407 5.22446 1.34728 5.24293C1.52281 5.24877 1.52639 5.24657 1.53813 5.12511C1.54671 5.03661 1.51252 4.93927 1.41828 4.7837C1.24667 4.50048 1.16657 4.25626 1.1243 3.88709C1.03608 3.11741 1.31576 2.04413 1.78024 1.36978C1.948 1.1262 2.22989 0.82956 2.29358 0.82956C2.35486 0.82956 2.35989 2.77645 2.30794 6.40588C2.27456 8.73883 2.27822 8.69372 2.05821 9.48067C2.01999 9.61746 1.99987 9.75827 2.01347 9.79362C2.04548 9.87662 2.23298 9.87807 2.39506 9.79651C2.93968 9.52243 3.33183 8.94553 3.51094 8.15487C3.5976 7.77211 3.64886 5.56795 3.63457 2.83366L3.62218 0.456326L3.52691 0.3547C3.40199 0.221438 3.13816 0.0907546 2.88671 0.0376468C2.63305 -0.0159162 2.59258 -0.0144369 2.3914 0.0557413ZM15.1207 0.0228904C14.9502 0.0535412 14.9204 0.16723 14.883 0.929895C14.8637 1.32327 14.8474 1.68892 14.8467 1.74241L14.8454 1.83971L14.205 1.82313C13.5647 1.80652 13.5646 1.80655 13.5057 1.89653C13.3578 2.12296 13.2973 2.56793 13.4007 2.66921C13.4399 2.70757 13.6322 2.72904 14.1118 2.74857L14.7692 2.77535V4.20729C14.7692 5.55801 14.7646 5.65395 14.6886 5.89927C14.546 6.35903 14.2113 6.92489 13.9248 7.19043L13.8355 7.27324L13.8354 6.92489C13.8354 6.61398 13.8227 6.5501 13.7174 6.33001C13.5488 5.97756 13.3216 5.74821 12.6224 5.22461C12.2835 4.97083 11.9923 4.75104 11.9753 4.73621C11.9583 4.72141 12.0226 4.59778 12.1183 4.46156C12.3703 4.10271 12.5333 3.73425 12.5517 3.48222C12.5808 3.08072 12.3973 2.91594 11.9209 2.91594C11.7028 2.91594 11.6159 2.93604 11.4255 3.03076C10.9984 3.24323 10.7007 3.67917 10.6629 4.14751C10.6406 4.42389 10.6914 4.60825 10.8559 4.84788L10.9713 5.01586L10.8265 5.29589C10.5955 5.74249 10.0167 6.73875 9.79366 7.07359C9.58177 7.39175 9.32286 7.6577 9.22503 7.6577C9.11764 7.6577 9.04778 7.4763 9.00529 7.08695C8.97366 6.79728 8.97549 6.32845 9.01265 5.21376C9.05678 3.89012 9.05579 3.71468 9.00396 3.6154C8.91882 3.45248 8.80343 3.35886 8.46208 3.17579C8.2024 3.03649 8.12557 3.01267 7.94372 3.01491C7.56689 3.01957 7.19315 3.2669 6.85931 3.73258C6.63416 4.04664 6.28786 4.77858 6.05635 5.42972L5.87064 5.952L5.85159 4.61413L5.83253 3.27631L5.62293 3.17457C5.50765 3.11866 5.31032 3.05349 5.1844 3.02978C4.88879 2.97413 4.76638 3.01574 4.73273 3.18326C4.6894 3.3988 4.70457 8.054 4.74927 8.26139C4.79881 8.49134 4.92202 8.68325 5.06364 8.75104C5.21348 8.82277 5.71069 8.82179 5.82144 8.74956C5.89575 8.70108 5.91713 8.63682 5.95776 8.33987C6.05871 7.60202 6.4483 6.27857 6.7805 5.54508C7.04376 4.96377 7.23019 4.6518 7.5638 4.2343C7.81327 3.92214 7.84539 3.93891 7.81761 4.36692C7.75595 5.31755 7.71251 6.81352 7.73526 7.20249C7.78758 8.09527 7.96014 8.56733 8.29821 8.74243C8.35484 8.77175 8.50152 8.79573 8.6242 8.79573C8.9157 8.79573 9.17221 8.66937 9.50235 8.3632C9.86314 8.02859 10.1293 7.65224 10.8128 6.5102C11.1469 5.95207 11.434 5.49546 11.451 5.49546C11.4679 5.49546 11.6959 5.70455 11.9576 5.96015C12.3221 6.31616 12.4591 6.47807 12.5434 6.65245C12.7655 7.11168 12.6911 7.6266 12.3722 7.83759C12.1354 7.99418 11.8666 7.93166 11.4121 7.61431C11.1352 7.42092 11.0052 7.40999 10.8383 7.56602C10.7055 7.69029 10.501 8.08602 10.501 8.21894C10.5009 8.54203 11.4319 8.86496 12.2349 8.82038C12.4445 8.80874 12.7103 8.77118 12.8256 8.73693C13.5504 8.52147 14.142 7.97574 14.6129 7.08831L14.7981 6.73939L14.8424 6.99939C15.0017 7.93481 15.3115 8.47534 15.8217 8.70784C16.0016 8.78985 16.0744 8.80161 16.3296 8.79008C16.6039 8.77767 16.6449 8.7647 16.8462 8.62669C17.1295 8.43247 17.3963 8.10142 17.6055 7.68475L17.7728 7.35146L17.8378 7.55198C17.9983 8.04717 18.3447 8.48501 18.7209 8.66823C19.4235 9.0104 20.3308 8.68667 20.8497 7.90864L20.9952 7.69059L21.0377 7.85701C21.2304 8.61254 22.0548 9.01381 22.7272 8.67935C22.9757 8.55572 23.1697 8.36089 23.3355 8.06845L23.436 7.89123L23.5394 8.07145C23.6867 8.32819 24.0251 8.6226 24.2836 8.71887C24.8866 8.94348 25.5939 8.72767 26.1162 8.15973L26.3162 7.94221L26.3159 8.20775L26.3157 8.47329L25.5883 9.13714C24.2871 10.3249 23.8997 10.8512 23.8505 11.4988C23.7874 12.3294 24.3779 12.936 25.3084 12.9963C26.1563 13.0512 26.8971 12.4925 27.1935 11.5745C27.4033 10.9249 27.4352 10.6381 27.438 9.37464L27.4406 8.22755L27.7073 7.8965C28.3721 7.07155 29.1005 5.80963 29.482 4.82213L29.6468 4.39537H30.0966C30.4314 4.39537 30.5463 4.40751 30.5459 4.44279C30.5456 4.46888 30.5214 4.59263 30.4922 4.71781C30.2609 5.70747 30.23 6.78495 30.4128 7.48048C30.5518 8.00932 30.8558 8.41927 31.2781 8.64706C31.4978 8.76557 31.5459 8.77661 31.8422 8.77668C32.0812 8.77672 32.2034 8.75833 32.3081 8.70651C32.5143 8.60446 32.7681 8.36988 32.9093 8.15085L33.0323 7.96L33.1355 8.12179C33.2899 8.36404 33.6073 8.62874 33.8543 8.72141C34.0339 8.78879 34.1321 8.80039 34.4197 8.78829C34.7306 8.77521 34.7994 8.75814 35.0622 8.62886C35.3906 8.46729 35.7308 8.15866 35.9031 7.86593L36.0084 7.6871L36.0905 7.9127C36.2906 8.46289 36.7415 8.80047 37.2762 8.80047C37.7061 8.80047 37.9905 8.62062 38.2556 8.18104L38.3861 7.96467L38.4102 8.25691C38.4378 8.59278 38.5069 8.68488 38.7883 8.76083C39.0068 8.81982 39.5099 8.81439 39.6411 8.75165C39.783 8.68375 39.7944 8.62085 39.8413 7.63874C39.8858 6.70715 39.9461 6.35224 40.1865 5.60642C40.3444 5.11665 40.6295 4.50561 40.7122 4.47977C40.7473 4.46881 40.76 4.53812 40.7604 4.74311C40.7618 5.42232 40.9035 6.97075 41.011 7.4829C41.0859 7.83964 41.1788 8.03363 41.3437 8.17771C41.5783 8.38278 41.9972 8.43699 42.2209 8.29113C42.3026 8.23779 42.3135 8.19584 42.3376 7.8407C42.3927 7.03043 42.5696 6.12782 42.8145 5.40745C42.9533 4.99947 43.1798 4.43914 43.2232 4.39677C43.2346 4.38558 43.2324 4.64099 43.2181 4.96438C43.1882 5.64101 43.2479 6.82421 43.3349 7.28079C43.5205 8.25452 44.0267 8.7991 44.7473 8.80013C45.0289 8.80055 45.196 8.73632 45.4071 8.54654C45.6852 8.29644 45.8499 7.93519 45.9653 7.3224C46.0342 6.95596 46.0007 6.74292 45.8626 6.66933C45.7175 6.59206 45.6189 6.70616 45.5265 7.058C45.3865 7.5914 45.2962 7.80037 45.1512 7.92707C44.806 8.2288 44.4913 7.82951 44.3777 6.94553C44.3504 6.73321 44.3398 6.06788 44.3481 5.09028L44.3612 3.56601L44.2468 3.44436C44.1153 3.30442 43.6843 3.09385 43.4148 3.0379C43.1708 2.98725 42.9964 3.03774 42.8806 3.19255C42.6598 3.48783 42.193 4.89966 42 5.85583L41.9158 6.27311L41.8863 5.95067C41.8701 5.77333 41.837 5.16566 41.8127 4.60033C41.7689 3.5824 41.7675 3.57091 41.6663 3.4186C41.5475 3.23997 41.2743 3.09127 40.944 3.02557C40.4799 2.93324 40.338 3.12841 39.8615 4.51478L39.5831 5.32475L39.5808 4.32728C39.5785 3.3383 39.5777 3.329 39.4907 3.24247C39.3291 3.08163 38.5812 2.96567 38.4632 3.08315C38.4064 3.13964 38.3589 4.483 38.3589 6.03075C38.3589 6.6922 38.3518 6.76599 38.2598 7.05827C38.0103 7.85136 37.6211 8.23958 37.3001 8.01576C37.0019 7.80785 36.923 6.99757 36.9888 4.81792L37.0304 3.43859L36.9442 3.34725C36.8344 3.23083 36.4298 3.10561 36.1636 3.10561C35.9116 3.10561 35.8056 3.19013 35.8056 3.39095V3.52451L35.601 3.32085C35.3139 3.03513 35.103 2.942 34.701 2.92356C34.4373 2.91146 34.3361 2.92379 34.1611 2.98949C33.7278 3.15211 33.3908 3.50801 33.0961 4.11412C32.7748 4.77482 32.6207 5.82264 32.718 6.6839C32.7872 7.29547 32.7826 7.38063 32.6669 7.62409C32.5376 7.89616 32.3853 8.03837 32.199 8.06106C31.7573 8.11481 31.4992 7.53415 31.4992 6.48649C31.4992 5.86554 31.5349 5.57626 31.7118 4.76303C31.7835 4.43323 31.8422 4.10009 31.8422 4.02274C31.8422 3.59428 31.4116 3.35612 30.8704 3.48518C30.7866 3.50517 30.5636 3.54788 30.375 3.58005C30.1864 3.61226 29.9871 3.64757 29.9322 3.65854L29.8323 3.67849L29.8488 3.4205C29.8687 3.1094 29.7956 2.94048 29.5938 2.83119C29.3939 2.72293 29.028 2.75714 28.8175 2.90372C28.6112 3.04734 28.4573 3.33333 28.426 3.63084C28.4048 3.83292 28.4146 3.88698 28.5059 4.07274C28.5631 4.18912 28.6498 4.3104 28.6986 4.34222L28.7873 4.40007L28.7165 4.65431C28.5353 5.30526 28.1963 6.06622 27.7881 6.73852C27.3751 7.41868 27.4149 7.57463 27.4332 5.34805C27.4517 3.10876 27.4876 3.31584 27.0577 3.18368C26.563 3.0316 26.2401 3.11293 26.2401 3.38958V3.51632L26.0341 3.31603C25.7148 3.0058 25.5369 2.9349 25.0778 2.9349C24.742 2.9349 24.6702 2.94727 24.4737 3.03888C24.1309 3.19874 23.8483 3.51621 23.593 4.02805C23.2321 4.75195 23.0741 5.61806 23.1351 6.53865C23.1517 6.78901 23.1653 7.06214 23.1653 7.14559C23.1655 7.37324 23.0148 7.71775 22.8318 7.90784C22.6973 8.04755 22.6473 8.07498 22.5272 8.07498C22.4153 8.07498 22.3555 8.04717 22.2576 7.94968C21.9698 7.66324 21.9035 6.97379 21.9651 4.90748C22.0058 3.54102 22.0045 3.46105 21.9394 3.37115C21.8486 3.24558 21.4458 3.10868 21.162 3.10694C20.8936 3.1053 20.7905 3.18531 20.7905 3.39527V3.53316L20.597 3.3375C20.4906 3.22988 20.3148 3.09529 20.2064 3.03839C20.0279 2.94473 19.9712 2.9349 19.6091 2.9349C19.2609 2.9349 19.1867 2.94663 19.0374 3.0253C18.7797 3.16114 18.5976 3.31637 18.4078 3.56188C17.9581 4.14364 17.7322 4.87694 17.6671 5.96603C17.6221 6.7202 17.4234 7.21547 16.9912 7.65046C16.7651 7.87806 16.7455 7.88922 16.5914 7.87806C16.4555 7.86824 16.4153 7.84533 16.3414 7.73596C16.1054 7.38621 16.0589 6.85521 16.1038 5.02128C16.1227 4.24932 16.1493 3.43419 16.1629 3.20993L16.1876 2.80213L16.7836 2.79838C17.1115 2.79633 17.474 2.78351 17.5893 2.76993C17.7908 2.74618 17.8022 2.73875 17.8846 2.57597C17.9713 2.405 17.9969 2.14383 17.9364 2.04876C17.9044 1.99846 17.6563 1.97244 16.5849 1.907L16.2094 1.88405L16.2229 1.10075L16.2364 0.317449L16.0649 0.234639C15.8115 0.112301 15.2828 -0.00628091 15.1207 0.0228904ZM20.2468 3.92794C20.6419 4.11458 20.8494 4.96651 20.7559 6.01865C20.663 7.06453 20.3818 7.74298 19.9503 7.96209C19.5067 8.18734 19.1368 7.85071 18.982 7.0808C18.914 6.74326 18.9032 5.7775 18.9627 5.36269C19.0727 4.59589 19.3324 4.06162 19.6655 3.91717C19.8259 3.8476 20.087 3.85245 20.2468 3.92794ZM25.7832 3.94964C25.8525 3.9966 25.9425 4.07972 25.9831 4.13438C26.3583 4.63864 26.2969 6.60746 25.8805 7.42536C25.5562 8.06246 25.051 8.22338 24.714 7.79692C24.2625 7.22556 24.2622 5.32195 24.7135 4.43949C24.8316 4.20873 25.0569 3.96747 25.2112 3.90666C25.3859 3.83777 25.647 3.85739 25.7832 3.94964ZM35.3392 3.9647C35.488 4.0738 35.64 4.36866 35.7178 4.69884C35.8168 5.11885 35.8082 6.14398 35.7016 6.63348C35.5181 7.47653 35.1891 7.97161 34.7757 8.0268C34.3684 8.0812 34.0909 7.6827 33.9792 6.88294C33.8675 6.08367 33.9971 4.87531 34.2468 4.38808C34.3483 4.19018 34.5439 3.97684 34.6806 3.91508C34.8446 3.841 35.208 3.86835 35.3392 3.9647ZM26.3171 10.8442C26.2394 11.5219 26.0913 12.0172 25.905 12.2221C25.7489 12.3938 25.4074 12.4912 25.1781 12.4295C24.6581 12.2894 24.6123 11.5987 25.0739 10.8543C25.2838 10.5157 25.4923 10.2571 25.9672 9.74624L26.3354 9.35013L26.3469 9.91695C26.3532 10.2287 26.3399 10.646 26.3171 10.8442Z"
                                fill="white"></path>
                        </svg>
                    </a> */}
                </div>
            </div>
        </div>
    </>
    );
};

export default InstagramFeed;