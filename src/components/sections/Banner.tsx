'use client';

import React from 'react';
import Image from 'next/image';

interface BannerProps {
    imageUrl?: string;
    altText?: string;
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
}

export default function Banner({
    imageUrl = '/images/logo_com_subtitulo.png',
    altText = "Banner do congresso CSSI - Semana de TDAH",
    title = "Congresso CSSI",
    subtitle = "Semana de Conscientização sobre TDAH",
    ctaText = "Inscreva-se Agora",
    ctaLink = "#inscricao",
}: BannerProps) {
    return (
        <section
            className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden shadow-lg flex items-center justify-center" // ✅ Adicionei flexbox para centralizar a imagem
            id="banner"
            aria-labelledby="banner-title"
        >
            {/* Título da seção (mantido para acessibilidade, mas pode ser visualmente oculto se a imagem for o foco principal) */}
            <h2 id="banner-title" className="sr-only">{title} - {subtitle}</h2>
            <Image
                src={imageUrl}
                alt={altText}
                width={856}
                height={856}
                className="relative z-10 object-contain drop-shadow-xl rounded-lg w-full max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] h-auto" 
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, (max-width: 1280px) 50vw, 40vw"
                loading="eager" 
                priority 
            />
        </section>
    );
}
