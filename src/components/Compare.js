'use client'

import { useState, useEffect, useRef } from 'react';

export default function ImageComparison({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After',
}) {
    const [isResizing, setIsResizing] = useState(false);
    const [position, setPosition] = useState(30);
    const containerRef = useRef(null);

    const handleMove = (event) => {
        if (!isResizing || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
        const newPosition = ((x - rect.left) / rect.width) * 100;

        setPosition(Math.min(Math.max(newPosition, 0), 100));
    };

    const handleStart = () => {
        setIsResizing(true);
    };

    const handleEnd = () => {
        setIsResizing(false);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('touchend', handleEnd);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isResizing]);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-2xl mx-auto h-[250px] select-none overflow-hidden rounded-lg"
        >
            {/* Before Image */}
            <div className="absolute inset-0">
                <img src={afterImage} alt="Before" className="h-full w-full object-cover" />
                <div className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                    {afterLabel}
                </div>
            </div>

            {/* After Image */}
            <div className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <img src={beforeImage} alt="After" className="h-full w-full object-cover" />
                <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Handle */}
            <div className="absolute inset-y-0" style={{ left: `${position}%` }}>
                <div className="relative h-full">
                    <div className="absolute inset-y-0 -left-px w-0.5 bg-white" />
                    <button
                        onMouseDown={handleStart}
                        onTouchStart={handleStart}
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white shadow-lg cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label="Comparison slider"
                    >
                        <svg
                            className="h-9 w-9 stroke-slate-400"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.5 12L18 16.5L13.5 12M22.5 24L18 19.5L13.5 24"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
