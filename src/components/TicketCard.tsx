import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { IngressoItem } from '@/data/ingresso';

interface TicketCardProps{
    item: IngressoItem;
    whatsappLink?: string;
}

export default function TicketCard({ item, whatsappLink = 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154?_gl=1*ty4lem*_gcl_au*MTUzNzI2MzY0Mi4xNzU4MDQ1MDc4*_ga*MTMwNjYxODE5OC4xNzU4MDQ1MDc4*_ga_KXH10SQTZF*czE3NTgwNDUwNzckbzEkZzEkdDE3NTgwNDU0NjYkajYwJGwwJGg0NzA4ODIzMjc' }: TicketCardProps) {
    return(
        <div
            className="flex flex-col justify-between w-full sm:w-[45%] md:w-[22%] rounded-2xl p-6 border border-accent-yellow/50 bg-primary-dark/70 backdrop-blur-xl shadow-xl text-center transition-transform hover:scale-105 transform hover:-translate-y-2 relative z-10"
        >
            {item.logoSrc && (
                <Image
                    src={item.logoSrc}
                    alt={`Logo do ${item.title}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 mx-auto mb-4 drop-shadow-lg object-contain"
                    loading="lazy"
                />
            )}

            <h3 className="text-sm text-orange-400/80 mb-4 text-center space-y-1 text-balance">
                {item.title}
            </h3>

            <ul className="text-sm text-white mb-4 text-left space-y-2">
                {item.benefits.map((benefit, idx) => (
                    <li key={idx} className='flex items-center gap-2'>
                        <CheckCircle className="w-4 h-4 text-accent-yellow flex-shrink-0" aria-hidden="true" />
                        {benefit}
                    </li>
                ))}
            </ul>


            <p className="text-3xl text-orange-400 font-extrabold mt-4 mb-2">
                {item.preco}
            </p>
            {item.parcelas && (
                <p className="text-sm text-orange-400 mb-3">{item.parcelas}</p>
            )}

            <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full bg-brand-orange text-white font-semibold py-3 px-4 rounded-full hover:bg-brand-orange/90 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2"
                aria-label={`Adquirir ${item.title} via Whatsapp`}
            >
                Adquira já
            </Link>
        </div>
    );
}