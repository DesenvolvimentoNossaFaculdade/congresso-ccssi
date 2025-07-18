'use client';

import React, {useState} from 'react';
import FaqAccordionItem from '../FaqAccordionItem';
import { faqData } from '@/data/faq';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section
            id="faq"
            className="relative z-20 flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-transparent shadow-lg"
            aria-labelledby="faq-section-title"
        >
            <h2
                id="faq-scetion-title"
                className="text-orange-400 text-5xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg font-arsenica"
            >
                F.A.Q
            </h2>
            <p className="text-xl text-white/80 mb-10 text-center font-raleway">
                Perguntas Frequentes
            </p>

            {/* Container dos Itens do FAQ */}
            <div className="max-w-3xl mx-auto px-6 py-10 rounded-2xl border border-orange-400/30 backdrop-blur-md bg-primary-dark/50 shadow-2xl w-full relative z-10">
                <div className="space-y-4">
                {faqData.map((item, index) => (
                    <FaqAccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openIndex === index}
                    toggle={() => toggle(index)}
                    />
                ))}
                </div>
            </div>

        </section>
    )
}