'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

// const treatmentsData = [
//     {
//         id: 0,
//         title: "Dermal Fillers",
//         image: "https://www.ghbclinic.co.uk/home/DermaFillers.webp",
//         description: "Enhance your natural beauty with expert dermal filler treatments, tailored for volume, contour, and youthful rejuvenation.",
//         treatments: [
//             { id: 0, name: "Lip Filler", link: "/treatments/lip-filler", ariaLabel: "Learn more about Lip Filler treatment to enhance and volumize your lips." },
//             { id: 1, name: "Tear Trough Filler", link: "/treatments/tear-trough", ariaLabel: "Discover Tear Trough Filler treatment to reduce under-eye hollows and rejuvenate your appearance." },
//             { id: 2, name: "Cheek Filler", link: "/treatments/cheek-filler", ariaLabel: "Explore Cheek Filler treatment to add volume and contour to your cheeks." },
//             { id: 3, name: "Chin Correction Filler", link: "/treatments/chin-filler", ariaLabel: "Explore Chin Correction Filler treatment to refine and balance your facial profile." },
//             { id: 4, name: "Nose Filler", link: "/treatments/nose-filler", ariaLabel: "Learn about Non-Surgical Nose Filler treatment for a straighter, smoother nose." }
//         ]
//     },
//     // Add all other treatments data following the same structure...
// ];

const TreatmentsSection = () => {
    return (
        <section className="our-treatments testSection">
            <style jsx>{`
                 * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            a {
                text-decoration: none;
            }
            .our-treatments {
                margin-top: 5px;
            }
            .our-treatments > h2.content {
                font-size: 3.052em;
                font-family: Playfair Display, serif;
                color: #2a6171;
            }

            .our-treatments > p.content {
                font-size: 20px;
            }

            .treatments-gallery {
                display: flex;
                flex-direction: column;
                margin-top: 15px;
            }

.whole-container {
    display: flex;
    justify-content: center;
    width: min(1280px, 90%); /* Changed from 80% to 90% for more space on mobile */
    margin-inline: auto;
    color: #111;
    font-family: Raleway, sans-serif !important;
    font-weight: 400 !important;
    font-style: normal !important;
    line-height: normal !important;
}

.whole-container .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
    gap: 2rem;
    padding: 1rem;
}

/* Media Queries for fine-tuned control */
@media (min-width: 768px) {
    .whole-container .container {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }
}

@media (min-width: 1200px) {
    .whole-container .container {
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
    }
}

            .card {
                height: 350px;
            }

            .card .card-inner {
                position: relative;
                width: inherit;
                height: 200px;
                background: #fff0f1;
                border-radius: 1.25rem;
                border-bottom-right-radius: 0;
                overflow: hidden;
            }

            .card .card-inner .box {
                width: 100%;
                height: 100%;
                background: #fff0f1;
                border-radius: 1.25rem;
                overflow: hidden;
            }

            .card .card-inner .box .imgBox {
                position: absolute;
                inset: 0;
            }
            .card .card-inner .box .imgBox .treatments-list {
                position: relative;
                top: -200px;
                height: 175px;
            }
            .card .card-inner .box .imgBox .treatments-list ul {
                display: flex;
                flex-direction: column;
                align-content: flex-start;
                width: 60%;
                list-style-type: none;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 0.625rem;
            }
    .treatments-content{
    text-align: left;
    }

            .card .card-inner .box .imgBox .treatments-list ul li {
                background-color: #712a61c2 !important;
                width: 100%;
                opacity: 0;
                transform: scale(0.6);
                transition: opacity 0.5s ease, transform 0.5s ease;
                z-index: 22;
                transition-delay: 0.1s;
                text-transform: uppercase;
                color: #282828;
                font-weight: 700;
                font-size: 0.8rem;
                padding: 0.375rem 0.625rem;
                border-radius: 0.188rem;
            }
            .card .card-inner .box .imgBox .treatments-list ul li:nth-child(1) {
                transition-delay: 0.1s;
            }
            .card .card-inner .box .imgBox .treatments-list ul li a {
                font-family: Raleway, sans-serif;
                display: inline-block;
                text-decoration: none;
                color: #fff;
            }
            .card .card-inner:hover {
                cursor: pointer;
            }
            .card .card-inner:hover .treatments-list ul li {
                opacity: 1 !important;
                transform: scale(1) !important;
            }
            .card .card-inner .box .imgBox img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .card .card-inner .box .icon {
                position: absolute;
                bottom: -0.375rem;
                right: -0.375rem;
                width: 6rem;
                height: 6rem;
                background: #fff0f1;
                border-top-left-radius: 50%;
            }
            .card .card-inner .box .icon:hover .iconBox {
                transform: scale(1.1);
            }
            .card .card-inner .box .icon::before {
                position: absolute;
                content: "";
                bottom: 0.375rem;
                left: -1.25rem;
                background: transparent;
                width: 1.25rem;
                height: 1.25rem;
                border-bottom-right-radius: 1.25rem;
                box-shadow: 0.313rem 0.313rem 0 0.313rem #fff0f1;
            }
            .card .card-inner .box .icon::after {
                position: absolute;
                content: "";
                top: -1.25rem;
                right: 0.375rem;
                background: transparent;
                width: 1.25rem;
                height: 1.25rem;
                border-bottom-right-radius: 1.25rem;
                box-shadow: 0.313rem 0.313rem 0 0.313rem #fff0f1;
            }
            .card .card-inner .box .icon a {
                font-family: Raleway, sans-serif;
                display: inline-block;
                text-decoration: none;
                color: #fff0f1;
                background: #fb7286;
                position: absolute;
                inset: 0.625rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.3s;
            }
            `}</style>

            <section className="our-treatments testSection" style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <p className="content" style={{ width: "80%", textAlign: "center" }} >
                    At Panacea Clinic, we offer a wide range of treatments designed to rejuvenate, enhance, and maintain your natural beauty and well-being. Our expert team provides personalized care to help you look and feel your best.
                </p>
                <div className="treatments-gallery">
                    <section className="whole-container">
                        <div className="container" id="container">
                            <div className="card" key="0">
                                <div className="card-inner" style={{ color: "#fff0f1" }}>
                                    <div className="box">
                                        <div className="imgBox">
                                            <img
                                                src="https://www.ghbclinic.co.uk/home/DermaFillers.webp"
                                                alt="dermal Fillers"
                                            />
                                            <div className="treatments-list">
                                                <ul>
                                                    <li key="0">
                                                        <a
                                                            href="/servicesr"
                                                            aria-label="Learn more about Lip Filler treatment to enhance and volumize your lips."
                                                        >
                                                            Lip Filler
                                                        </a>
                                                    </li>
                                                    <li key="1">
                                                        <a
                                                            href="/services"
                                                            aria-label="Discover Tear Trough Filler treatment to reduce under-eye hollows and rejuvenate your appearance."
                                                        >
                                                            Tear Trough Filler
                                                        </a>
                                                    </li>
                                                    <li key="2">
                                                        <a
                                                            href="/services"
                                                            aria-label="Explore Cheek Filler treatment to add volume and contour to your cheeks."
                                                        >
                                                            Cheek Filler
                                                        </a>
                                                    </li>
                                                    <li key="3">
                                                        <a
                                                            href="/services"
                                                            aria-label="Explore Chin Correction Filler treatment to refine and balance your facial profile."
                                                        >
                                                            Chin Correction Filler
                                                        </a>
                                                    </li>
                                                    <li key="4">
                                                        <a
                                                            href="/services"
                                                            aria-label="Learn about Non-Surgical Nose Filler treatment for a straighter, smoother nose."
                                                        >
                                                            Nose Filler
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="icon">
                                            <a
                                                href="/services"
                                                aria-label="Explore Our Range Of Treatments at GHB Clinic London - Enhance Your Natural Beauty"
                                                className="iconBox"
                                            >
                                                <span
                                                    className="material-symbols-outlined"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#FFF"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-arrow-up-right"
                                                    >
                                                        <line
                                                            x1="7"
                                                            y1="17"
                                                            x2="17"
                                                            y2="7"
                                                        ></line>
                                                        <polyline
                                                            points="7 7 17 7 17 17"
                                                        ></polyline>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="treatments-content">
                                    <h3>Anti-Wrinkle Treatments</h3>
                                    <p className='text-left'>
                                        Smooth out fine lines and wrinkles with our advanced anti-wrinkle treatments, designed to rejuvenate your skin and restore youthful vitality.

                                    </p>
                                </div>
                            </div>
                            <div className="card" key="1">
                                <div className="card-inner" style={{ color: "#fff" }}>
                                    <div className="box">
                                        <div className="imgBox">
                                            <img
                                                src="https://www.ghbclinic.co.uk/home/DermaFillers.webp"
                                                alt="Acne &amp; Facial Treatments"
                                            />
                                            <div className="treatments-list">
                                                <ul>
                                                    <li key="0">
                                                        <a
                                                            href="/services"
                                                            aria-label="Discover our Deep Cleansing Facial treatment for purified and refreshed skin."
                                                        >
                                                            Deep Cleansing Treatment
                                                        </a>
                                                    </li>
                                                    <li key="1">
                                                        <a
                                                            href="/services"
                                                            aria-label="Explore our Brightening Treatment to reduce hyperpigmentation and achieve radiant, even-toned skin."
                                                        >
                                                            Brightening Treatment
                                                            for Hyperpigmentation
                                                        </a>
                                                    </li>
                                                    <li key="2">
                                                        <a
                                                            href="/services"
                                                            aria-label="Learn more about our effective Acne Treatments for clear, healthy skin."
                                                        >
                                                            Acne Treatments
                                                        </a>
                                                    </li>
                                                    <li key="3">
                                                        <a
                                                            href="/services"
                                                            aria-label="Experience the Red Carpet Facial for radiant, glowing skin before your next event."
                                                        >
                                                            Red Carpet Facial
                                                        </a>
                                                    </li>
                                                    <li key="4">
                                                        <a
                                                            href="/services"
                                                            aria-label="Hydrate and nourish your skin deeply with our Deep Hydration Facial treatment."
                                                        >
                                                            Deep Hydration Facial
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="icon">
                                            <a
                                                href="/services"
                                                aria-label="Explore Our Range Of Treatments at GHB Clinic London - Enhance Your Natural Beauty"
                                                className="iconBox"
                                            >
                                                <span
                                                    className="material-symbols-outlined"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#FFF"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-arrow-up-right"
                                                    >
                                                        <line
                                                            x1="7"
                                                            y1="17"
                                                            x2="17"
                                                            y2="7"
                                                        ></line>
                                                        <polyline
                                                            points="7 7 17 7 17 17"
                                                        ></polyline>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="treatments-content">
                                    <h3>Mesotherapy</h3>
                                    <p>
                                        A non-invasive treatment to target problem areas, delivering a blend of vitamins and nutrients directly into the skin to improve tone and texture.

                                    </p>
                                </div>
                            </div>
                            <div className="card" key="2">
                                <div className="card-inner" style={{ color: "#fff" }}>
                                    <div className="box">
                                        <div className="imgBox">
                                            <img
                                                src="https://www.ghbclinic.co.uk/home/DermaFillers.webp"
                                                alt="Chemical Peels"
                                            />
                                            <div className="treatments-list">
                                                <ul>
                                                    <li key="0">
                                                        <a
                                                            href="/services"
                                                            aria-label="Learn more about the P2 Chemical Peel to rejuvenate and refresh your skin."
                                                        >
                                                            P2 Chemical Peel
                                                        </a>
                                                    </li>
                                                    <li key="1">
                                                        <a
                                                            href="/services"
                                                            aria-label="Discover the P3 Chemical Peel for deep exfoliation and skin renewal."
                                                        >
                                                            P3 Chemical Peel
                                                        </a>
                                                    </li>
                                                    <li key="2">
                                                        <a
                                                            href="/services"
                                                            aria-label="Explore the Green Peel for natural skin rejuvenation and glowing results."
                                                        >
                                                            Green Peel
                                                        </a>
                                                    </li>
                                                    <li key="3">
                                                        <a
                                                            href="/services"
                                                            aria-label="Find out about the Botanical Peel for gentle and effective skin renewal."
                                                        >
                                                            Botanical Peel
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="icon">
                                            <a
                                                href="/services"
                                                aria-label="Explore Our Range Of Treatments at GHB Clinic London - Enhance Your Natural Beauty"
                                                className="iconBox"
                                            >
                                                <span
                                                    className="material-symbols-outlined"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#FFF"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-arrow-up-right"
                                                    >
                                                        <line
                                                            x1="7"
                                                            y1="17"
                                                            x2="17"
                                                            y2="7"
                                                        ></line>
                                                        <polyline
                                                            points="7 7 17 7 17 17"
                                                        ></polyline>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="treatments-content">
                                    <h3>Fat Dissolving</h3>
                                    <p>
                                        Achieve a more contoured appearance with fat-dissolving injections, which target stubborn fat areas for a slimmer silhouette.

                                    </p>
                                </div>
                            </div>
                            <div className="card" key="3">
                                <div className="card-inner" style={{ color: "#fff" }}>
                                    <div className="box">
                                        <div className="imgBox">
                                            <img
                                                src="https://www.ghbclinic.co.uk/home/DermaFillers.webp"
                                                alt="Laser Skin &amp; Lesion Treatments"
                                            />
                                            <div className="treatments-list">
                                                <ul>
                                                    <li key="0">
                                                        <a
                                                            href="/treatments/laser-skin-resurfacing"
                                                            aria-label="Explore Laser Skin Resurfacing to reduce wrinkles, scars, and pigmentation for a refreshed look."
                                                        >
                                                            Laser Skin Resurfacing
                                                        </a>
                                                    </li>
                                                    <li key="1">
                                                        <a
                                                            href="/treatments/acne-laser-treatment"
                                                            aria-label="Learn about Acne Laser Treatment for effective acne reduction and smoother skin."
                                                        >
                                                            Acne Laser Treatment
                                                        </a>
                                                    </li>
                                                    <li key="2">
                                                        <a
                                                            href="/treatments/hyperpigmentation-laser-treatment"
                                                            aria-label="Discover Laser for Hyperpigmentation to achieve a more even skin tone."
                                                        >
                                                            Laser for
                                                            Hyperpigmentation
                                                        </a>
                                                    </li>
                                                    <li key="3">
                                                        <a
                                                            href="/treatments/laser-skin-tightening"
                                                            aria-label="Find out about Laser Skin Tightening to enhance skin elasticity and reduce sagging."
                                                        >
                                                            Laser Skin Tightening
                                                        </a>
                                                    </li>
                                                    <li key="4">
                                                        <a
                                                            href="/treatments/acne-scarring-treatment"
                                                            aria-label="Learn about Scarring Laser Treatment to improve skin texture and reduce scars."
                                                        >
                                                            Scarring Laser Treatment
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="icon">
                                            <a
                                                href="/services"
                                                aria-label="Explore Our Range Of Treatments at GHB Clinic London - Enhance Your Natural Beauty"
                                                className="iconBox"
                                            >
                                                <span
                                                    className="material-symbols-outlined"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#FFF"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-arrow-up-right"
                                                    >
                                                        <line
                                                            x1="7"
                                                            y1="17"
                                                            x2="17"
                                                            y2="7"
                                                        ></line>
                                                        <polyline
                                                            points="7 7 17 7 17 17"
                                                        ></polyline>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="treatments-content">
                                    <h3>Microneedling</h3>
                                    <p>
                                        Promote collagen production and improve skin texture with this advanced treatment, ideal for reducing scarring, fine lines, and pore size.

                                    </p>
                                </div>
                            </div>
                            <div className="card" key="4">
                                <div className="card-inner" style={{ color: "#fff" }}>
                                    <div className="box">
                                        <div className="imgBox">
                                            <img
                                                src="https://www.ghbclinic.co.uk/home/DermaFillers.webp"
                                                alt="Skin Rejuvenation &amp; Anti Aging"
                                            />
                                            <div className="treatments-list">
                                                <ul>
                                                    <li key="0">
                                                        <a
                                                            href="/treatments/anti-wrinkle-injections"
                                                            aria-label="Discover Botox for Wrinkles treatment to smooth fine lines and rejuvenate your skin."
                                                        >
                                                            Anti Wrinkle Injections
                                                        </a>
                                                    </li>
                                                    <li key="1">
                                                        <a
                                                            href="/treatments/microneedling"
                                                            aria-label="Learn about Dermapen4 Microneedling for enhanced skin texture and collagen production."
                                                        >
                                                            Dermapen4 Microneedling
                                                        </a>
                                                    </li>
                                                    <li key="2">
                                                        <a
                                                            href="/treatments/plasma-pen-treatment"
                                                            aria-label="Find out about Plasma Pen Treatment for skin tightening and wrinkle reduction."
                                                        >
                                                            Plasma Pen Treatment
                                                        </a>
                                                    </li>
                                                    <li key="3">
                                                        <a
                                                            href="/treatments/profhilo"
                                                            aria-label="Learn more about Profhilo treatment for deep skin hydration and elasticity improvement."
                                                        >
                                                            Profhilo
                                                        </a>
                                                    </li>
                                                    <li key="4">
                                                        <a
                                                            href="/treatments/mesotherapy"
                                                            aria-label="Discover Mesotherapy treatment for revitalized and rejuvenated skin."
                                                        >
                                                            Mesotherapy
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="icon">
                                            <a
                                                href="/services"
                                                aria-label="Explore Our Range Of Treatments at GHB Clinic London - Enhance Your Natural Beauty"
                                                className="iconBox"
                                            >
                                                <span
                                                    class="material-symbols-outlined"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#FFF"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        class="feather feather-arrow-up-right"
                                                    >
                                                        <line
                                                            x1="7"
                                                            y1="17"
                                                            x2="17"
                                                            y2="7"
                                                        ></line>
                                                        <polyline
                                                            points="7 7 17 7 17 17"
                                                        ></polyline>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="treatments-content" style={{ textAlign: "left" }}>
                                    <h3>Vitamin B12 Injection
                                    </h3>
                                    <p>
                                        Boost your energy levels, enhance mood, and improve overall wellness with our safe and effective Vitamin B12 injections.

                                    </p>
                                </div>
                            </div>
                            <div className="card" key="5">
                                <div className="card-inner" style={{ color: "#fff" }}>
                                    <div className="box">
                                        <div className="imgBox">
                                            <img
                                                src="https://www.ghbclinic.co.uk/home/DermaFillers.webp"
                                                alt="Skin Rejuvenation &amp; Anti Aging"
                                            />
                                            <div className="treatments-list">
                                                <ul>
                                                    <li key="0">
                                                        <a
                                                            href="/treatments/anti-wrinkle-injections"
                                                            aria-label="Discover Botox for Wrinkles treatment to smooth fine lines and rejuvenate your skin."
                                                        >
                                                            Anti Wrinkle Injections
                                                        </a>
                                                    </li>
                                                    <li key="1">
                                                        <a
                                                            href="/treatments/microneedling"
                                                            aria-label="Learn about Dermapen4 Microneedling for enhanced skin texture and collagen production."
                                                        >
                                                            Dermapen4 Microneedling
                                                        </a>
                                                    </li>
                                                    <li key="2">
                                                        <a
                                                            href="/treatments/plasma-pen-treatment"
                                                            aria-label="Find out about Plasma Pen Treatment for skin tightening and wrinkle reduction."
                                                        >
                                                            Plasma Pen Treatment
                                                        </a>
                                                    </li>
                                                    <li key="3">
                                                        <a
                                                            href="/treatments/profhilo"
                                                            aria-label="Learn more about Profhilo treatment for deep skin hydration and elasticity improvement."
                                                        >
                                                            Profhilo
                                                        </a>
                                                    </li>
                                                    <li key="4">
                                                        <a
                                                            href="/treatments/mesotherapy"
                                                            aria-label="Discover Mesotherapy treatment for revitalized and rejuvenated skin."
                                                        >
                                                            Mesotherapy
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="icon">
                                            <a
                                                href="/services"
                                                aria-label="Explore Our Range Of Treatments at GHB Clinic London - Enhance Your Natural Beauty"
                                                className="iconBox"
                                            >
                                                <span
                                                    class="material-symbols-outlined"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#FFF"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        class="feather feather-arrow-up-right"
                                                    >
                                                        <line
                                                            x1="7"
                                                            y1="17"
                                                            x2="17"
                                                            y2="7"
                                                        ></line>
                                                        <polyline
                                                            points="7 7 17 7 17 17"
                                                        ></polyline>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="treatments-content" style={{ textAlign: "left" }}>
                                    <h3>Hopi Ear Candle</h3>
                                    <p> A relaxing treatment to help clear blocked sinuses and improve ear health, promoting relaxation and comfort.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </section>
            <Link href={'/services'}>
                <Button
                    variant="default"
                    className="mt-4 bg-rose-400 px-8 py-6 text-base hover:bg-rose-400 hover:text-black"
                >
                    VIEW MORE
                </Button>
            </Link>
        </section>
    );
};

export default TreatmentsSection;