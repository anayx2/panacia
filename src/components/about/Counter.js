'use client';

import React, { useEffect, useState } from 'react';

const counterData = [
    {
        endValue: 5000,
        label: 'Happy Clients',
        color: 'fill-rose-200',
    },
    {
        endValue: '98',
        label: 'Success Rate',
        color: 'fill-rose-200',
    },
    {
        endValue: 15,
        label: 'Years of Experience',
        color: 'fill-rose-200',
    },
    {
        endValue: 25,
        label: 'Expert Doctors',
        color: 'fill-rose-200',
    },
];

function CounterCard({ endValue, label, color }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 50;
        const stepValue = endValue / steps;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setCount(Math.min(Math.round(stepValue * currentStep), endValue));

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [endValue]);

    return (
        <div className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-[280px] h-[15rem] flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
            {/* Blob SVG Background */}
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute blur z-10 duration-500 group-hover:blur-none group-hover:scale-105 ${color}`}
            >
                <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                ></path>
            </svg>

            {/* Counter Content */}
            <div className="z-20 flex flex-col justify-center items-center">
                <span className="font-bold text-6xl">{count}+</span>
                <p className="font-bold">{label}</p>
            </div>
        </div>
    );
}




export default function CounterSection() {
    return (
        <section className="bg-white pb-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8">
                    {counterData.map((data, index) => (
                        <CounterCard
                            key={index}
                            endValue={data.endValue}
                            label={data.label}
                            color={data.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
