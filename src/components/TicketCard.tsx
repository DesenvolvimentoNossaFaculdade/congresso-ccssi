import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { IngressoItem } from '@/data/ingresso'; 

interface TicketCardProps {
  item: IngressoItem;
  onClick: () => void;
}

export default function TicketCard({ item }: TicketCardProps) { 
  return (
    <div
      className="flex flex-col justify-between w-full sm:w-[45%] md:w-[22%] rounded-2xl p-6 border border-accent-yellow/50 bg-primary-dark/70 backdrop-blur-xl shadow-xl text-center transition-transform hover:scale-105 transform hover:-translate-y-2 relative z-10
      items-center sm:items-stretch sm:text-left"
    >
      <div>
        {item.logoSrc && (
          <Image
            src={item.logoSrc}
            alt={`Logo do ${item.title}`}
            width={200}
            height={200}
            className="w-60 h-50 mx-auto mb-4 drop-shadow-lg object-contain"
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
      </div>

      <Link
        href={item.symplaLink} 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block w-full bg-brand-orange text-white text-center font-semibold py-3 px-4 rounded-full hover:bg-brand-orange/90 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2"
        aria-label={`Adquirir ingresso para ${item.title}`} 
      >
        {item.id === 'somente-professore-CNP' ? 'Inscreva-se' : 'Adquira já'}
      </Link>
    </div>
  );
}