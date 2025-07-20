'use client';

import React from 'react';
import AgendaCard  from '@/components/AgendaCard';
import {agenda} from '@/data/agenda';

export default function Agenda() {
    return (
        <section
            id="agenda"
            className="relative z-20 min-h-screen flex flex-col items-center py-12 px-4 bg-transparent"
            aria-labelledby='agenda-section-title'
        >
            
            <h2
                id="agenda-section-title"
                className="text-brand-orange text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 font-arsenica text-center drop-shadow-lg"
            >
                Agenda do Evento
            </h2>

            <div className="w-full max-w-2xl flex flex-col items-center gap-8 relative z-10">
                {agenda.map((item) => (
                    <AgendaCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}
