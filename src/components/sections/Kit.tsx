'use client';

import React from 'react';
import TicketCard from '../TicketCard';
import {ingressos} from '@/data/ingresso';

export default function Kit() {
    return (
        <section
            id="kit"
            className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-12 md:py-20 bg-transparent shadow-lg font-raleway"
            aria-labelledby="ingressos-section-title"
        >

            <h2
                id="ingressos-section-title"
                className="text-gabigol-orange text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 text-center drop-shadow-lg font-raleway"
            >
                Confira as opções de ingresso:
            </h2>


            {/** CONTAINER */}
            <div className="w-full max-w-7xl flex flex-wrap justify-center gap-8 relative z-10">
                {ingressos.map((item) => (
                    <TicketCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}