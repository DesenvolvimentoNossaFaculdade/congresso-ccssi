'use client';

import React from 'react';
import { Plus, Minus} from 'lucide-react';
import { FaqItem } from '@/data/faq';

interface FaqAccordionItemProps {
    item: FaqItem;
    isOpen: boolean;
    toggle: () => void;
}


export default function FaqAccordionItem({ item, isOpen, toggle }: FaqAccordionItemProps) {
    return (
        <div className="border border-orange-400/30 rounded-lg overflow-hidden backdrop-blur-md bg-primary-dark/70 shadow-lg">
            
            <button
                onClick={toggle}
                className="flex items-center justify-between w-full px-4 py-3 font-medium text-left text-white hover:bg-primary-dark/80 transition-all duration-300"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
                >
                    {item.question}
                    <span className="ml-4 flex-shrink-0">
                        {isOpen ? (
                            <Minus className="w-5 h-5 text-accent-yellow" aria-hidden="true" />
                        ) : (
                            <Plus className="w-5 h-5 text-accent-yellow" aria-hidden="true" />
                        )}
                    </span>
                </button>
                    {isOpen && (
                        <div
                            id={`faq-answer-${item.id}`}
                            role="region"
                            aria-labelledby={`faq-question-${item.id}`}
                            className="px-4 py-3 text-white/90 bg-primary-dark/50 backdrop-blur-sm border-t border-orange-400/30 transition-all duration-300"
                        >
                            {item.answer}
                        </div>
                    )}
        </div>
    );
}