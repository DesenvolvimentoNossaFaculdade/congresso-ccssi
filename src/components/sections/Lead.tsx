import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircleMore, CheckCircle, Users, Eye } from 'lucide-react';

interface LeadProps {
    logoSrc?: string;
    logoAlt?: string;
    title?: string;
    introText?: string; 
    benefits?: { icon: React.ElementType, text: string }[];
    buttonText?: string;
    whatsappLink?: string;
}

export default function Lead({
    logoSrc = '/images/CCSI2025.png',
    logoAlt = 'Logo do Congresso Caririense de Saúde Integrada 2025',
    title = 'Seja um Patrocinador',
    introText = 'Sua marca pode fazer parte do maior evento de saúde integrada do Cariri. Conecte-se com um público qualificado e fortaleça sua presença no mercado.',
    benefits = [
        { icon: Eye, text: 'Ampla visibilidade da marca' },
        { icon: Users, text: 'Networking com especialistas' },
        { icon: CheckCircle, text: 'Associação com inovação e impacto social' },
    ],
    buttonText = 'Entrar em contato',
    whatsappLink = 'https://wa.me/55889999139972',
}: LeadProps) {
    return (
        <section
            id="patrocinio"
            className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center bg-transparent shadow-lg"
            aria-labelledby="patrocinio-section-title"
        >
        
            <div className="relative z-20 w-full max-w-xl md:max-w-4xl flex flex-col items-center text-center gap-6">
                    <h2 
                        id="patrocinio-section-title"
                        className="text-brand-orange text-4xl sm:text-5xl font-bold mb-8 font-arsenica drop-shadow-md whitespace-nowrap"
                    >
                    {title}
                    </h2>

                    <p className="text-white text-lg mb-4 max-w-prose">
                    {introText}
                    </p>

                    {benefits.length > 0 && (
                    <ul className="text-white text-left w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-8"> 
                        {benefits.map((benefit, index) => (
                        <li key={index} className="flex flex-col items-center text-center gap-2 font-semibold text-lg md:text-xl p-4 bg-white/10 rounded-lg shadow-md border border-accent-yellow/30 text-balance">
                            <benefit.icon className="w-8 h-8 text-accent-yellow mb-2" aria-hidden="true" />
                            <span>{benefit.text}</span>
                        </li>
                        ))}
                    </ul>
                    )}

                    <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-xl gap-6 border border-accent-yellow/50 mb-8 ">
                        <Image
                            src={logoSrc}
                            alt={logoAlt}
                            width={250} 
                            height={150} 
                            className="w-full h-auto object-contain max-w-[250px]"
                            priority
                        />
                        <Link
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center bg-brand-orange hover:bg-brand-orange/90 text-white text-lg font-semibold py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2"
                            aria-label={`Entrar em contato via WhatsApp para ${buttonText}`}
                        >
                            <MessageCircleMore size={24} aria-hidden="true" /> 
                            {buttonText}
                        </Link>
                    </div>
            </div>
        </section>
    );
}