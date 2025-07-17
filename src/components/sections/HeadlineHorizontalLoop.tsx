
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
    texts = ['UM EVENTO ESPECIAL'],
    speed = 'normal',
    customDuration,
    showSparkles = true,
}: HeadlineLoopProps) {
    const animationDurationMap = {
        slow: '60s',
        normal: '30s',
        fast: '1s',
    };

    const finalDuration = customDuration || animationDurationMap[speed];

    const duplicatedTexts = Array(15).fill(texts).flat(); 

    return (
        <section
        className="w-full bg-primary-dark overflow-hidden py-2" 
        aria-live="off"
        aria-label="Manchetes em loop horizontal"
        >
        <div
            className={`flex items-center whitespace-nowrap text-orange font-bold text-base sm:text-lg md:text-xl lg:text-2xl animate-scrollLoop`}
        >
            {duplicatedTexts.map((text, index) => (
                <span key={index} className="flex flex-shrink-0 items-center mx-3 sm:mx-6 text-orange-100">
                    {showSparkles && <Sparkles className="w-4 h-4 mr-2 text-orange" aria-hidden="true" />}
                    {text.toUpperCase()}
                </span>
            ))}
        </div>

        
        <style jsx>{`
                @keyframes scrollLoop {
                0% {
                    transform: translateX(0%);
                }
                100% {
                    transform: translateX(-100%);
                }
                }

                .animate-scrollLoop {
                animation: scrollLoop ${finalDuration} linear infinite;
                }
        `}</style>
        </section>
    );
}