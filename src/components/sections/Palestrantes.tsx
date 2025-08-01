// src/components/sections/StaticImageSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Importado para o botão 'Ver detalhes'
import { PlusCircle } from 'lucide-react'; // Ícone para o botão

interface ImageItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface StaticImageSectionProps {
  images?: ImageItem[];
  ctaPhrase?: string;
}

const defaultImages: ImageItem[] = [
  {
    src: '/images/gallery/image-1.jpg',
    alt: 'Crianças participando de uma atividade lúdica no congresso',
    title: 'Momento de Integração',
    description: 'Oficina prática sobre abordagens pedagógicas para o neurodesenvolvimento.',
  },
  {
    src: '/images/gallery/image-2.jpg',
    alt: 'Mesa redonda com especialistas discutindo temas da educação',
    title: 'Debate Interdisciplinar',
    description: 'Mesa com especialistas em saúde, educação e assistência social.',
  },
  {
    src: '/images/gallery/image-3.jpg',
    alt: 'Profissionais de saúde em uma palestra com a plateia atenta',
    title: 'Abertura do Evento',
    description: 'Palestra de abertura com a Keynote Speaker sobre inovações tecnológicas.',
  },
  {
    src: '/images/gallery/image-4.jpg',
    alt: 'Participantes conversando em um coffee break do congresso',
    title: 'Networking',
    description: 'Um espaço para troca de experiências e conexões valiosas entre os participantes.',
  },
];

export default function StaticImageSection({
  images = defaultImages,
  ctaPhrase = 'E muito mais...',
}: StaticImageSectionProps) {
  return (
    <section 
      id="galeria"
      className="w-full py-16 px-4 relative z-20 flex flex-col items-center justify-center bg-transparent"
      aria-labelledby="galeria-title"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12">
        <h2 id="galeria-title" className="sr-only">Galeria de imagens do evento</h2>

        {/* Grid de Imagens Responsivo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative w-full aspect-square overflow-hidden shadow-xl group rounded-lg border border-accent-yellow/50" // ✅ Adicionado estilo de card do carrossel
            >
              {/* Imagem */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 transform group-hover:scale-110" // Escala no hover
                loading="lazy"
              />
              
              {/* ✅ NOVO: Overlay que aparece no hover, estilo do carrossel */}
              <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
                <h3 className="text-xl font-bold text-accent-yellow drop-shadow mb-2">{image.title}</h3>
                <p className="text-sm text-white/90">{image.description}</p>
                {/* Botão de exemplo que aparece no hover */}
                <Link href="#" passHref>
                  <button className="mt-4 px-4 py-2 text-sm font-bold rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white transition-all duration-300 transform opacity-0 group-hover:opacity-100">
                    Ver detalhes
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Frase de Destaque */}
        <p className="text-3xl md:text-4xl font-bold text-accent-yellow drop-shadow-md text-center mt-8 font-arsenica">
          {ctaPhrase}
        </p>
      </div>
    </section>
  );
}
