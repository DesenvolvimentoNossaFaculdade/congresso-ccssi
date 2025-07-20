import React from 'react';
import Image from 'next/image';
import { AgendaItem } from '@/data/agenda';

interface AgendaCardProps {
    item: AgendaItem;
}

export default function AgendaCard({ item }: AgendaCardProps) {
    const getTypeColorClass = (type: AgendaItem['type']) => {
        switch (type) {
        case 'Keynote': return 'bg-brand-orange text-white';
        case 'Palestra': return 'bg-accent-yellow text-primary-dark';
        case 'Roda de Conversa': return 'bg-blue-400 text-white';
        case 'Oficina': return 'bg-green-400 text-white';
        default: return 'bg-gray-200 text-gray-800';
        }
    };

    return (
        <div className="text-card-foreground shadow-lg max-w-[500px] p-5 w-full flex flex-col items-start justify-center bg-primary-dark/70 backdrop-blur-sm border gap-4 border-accent-yellow/50 rounded-lg mb-8 relative z-10">
        
        <span className="w-full text-white bg-brand-orange text-sm px-4 py-2 rounded-lg font-semibold">
            Trilha: <b>{item.track}</b>
        </span>

        
        <div className="flex gap-3 justify-between items-start w-full">
            <span className="text-accent-yellow text-sm font-medium">{item.time}</span>
            <h3 className="text-white w-full text-wrap whitespace-normal text-lg sm:text-xl font-bold break-words">
            {item.title}
            <div className={`inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg ml-2 ${getTypeColorClass(item.type)}`}>
                {item.type}
            </div>
            </h3>
        </div>

        <div data-orientation="horizontal" role="separator" className="w-full h-[1px] mb-2 bg-accent-yellow/50 rounded-xl"></div>

        
        {item.tags && item.tags.length > 0 && (
            <div className="flex gap-2 w-full justify-start flex-wrap">
            {item.tags.map((tag, idx) => (
                <div key={idx} className="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white/20 text-white font-thin rounded-lg">
                {tag}
                </div>
            ))}
            </div>
        )}

        {item.speaker && (
            <div className="flex-cols p-2 w-full">
            <div className="flex items-center gap-2">
                <span className="relative shrink-0 overflow-hidden w-10 h-10 rounded-full flex justify-center border border-accent-yellow bg-white">
                <Image
                    className="aspect-square h-full w-full object-cover"
                    alt={item.speaker.name}
                    src={item.speaker.image}
                    width={40} 
                    height={40} 
                    loading="lazy"
                />
                </span>
                <div className="flex flex-col">
                <p className="font-semibold text-sm text-white">{item.speaker.name}</p>
                <span className="text-xs text-gray-300">
                    {item.speaker.role} <span> | {item.speaker.company}</span>
                </span>
                </div>
            </div>
            </div>
        )}
        </div>
    );
}