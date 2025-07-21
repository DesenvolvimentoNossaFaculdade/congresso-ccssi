'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeadlineLoopProps {
    texts?: string[];
    speed?: 'slow' | 'normal' | 'fast';
    customDuration?: string;
    showSparkles?: boolean;
}

export default function HeadlineHorizontalLoop({
    texts = ['DIA 26 E 27 DE SETEMBRO DE 2025', 'DIA 26 E 27 DE SETEMBRO DE 2025', 'DIA 26 E 27 DE SETEMBRO DE 2025' , 'DIA 26 E 27 DE SETEMBRO DE 2025' , 'DIA 26 E 27 DE SETEMBRO DE 2025'],
    speed = 'normal',
    customDuration,
    showSparkles = true,
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
            className="w-full bg-primary-dark/20 overflow-hidden py-2"
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
                        className="flex flex-shrink-0 items-center mx-3 sm:mx-6 text-white font-raleway"
                    >
                        {text.toUpperCase()}
                    </span>
                ))}
            </div>
        </section>
    );
}
