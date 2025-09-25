'use client';

import React from 'react';

interface HeadlineLoopProps {
    texts?: string[];
    speed?: 'slow' | 'normal' | 'fast';
    customDuration?: string;
    showSparkles?: boolean;
}

export default function HeadlineHorizontalLoop({
    texts = ['DIA 24 E 25 DE OUTUBRO DE 2025', 'DIA 24 E 25 DE OUTUBRO DE 2025', 'DIA 24 E 25 DE OUTUBRO DE 2025' , 'DIA 24 E 25 DE OUTUBRO DE 2025' , 'DIA 24 E 25 DE OUTUBRO DE 2025'],
    speed = 'normal',
    customDuration,
}: HeadlineLoopProps) {
    const animationDurationMap = {
        slow: '20s',
        normal: '10s',
        fast: '5s',
    };

    const finalDuration = customDuration || animationDurationMap[speed];

    const duplicatedTexts = Array(15).fill(texts).flat();

    return (
        <section
            className="w-full bg-primary-dark/35 overflow-hidden py-2 shadow-lg"
            aria-live="off"
            aria-label="Manchetes em loop horizontal"
        >
            <div
                style={{ animationDuration: finalDuration }}
                className="flex items-center whitespace-nowrap font-bold text-base sm:text-lg md:text-xl lg:text-2xl animate-scrollLoop"
            >
                {duplicatedTexts.map((text, index) => (
                    <span
                        key={index}
                        className="flex flex-shrink-0 items-center mx-3 sm:mx-6 text-black font-raleway"
                    >
                        {text.toUpperCase()}
                    </span>
                ))}
            </div>
        </section>
    );
}
