import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface LocalProps {
    backgroundImageUrl?: string;
    locationImageUrl?: string;
    locationAltText?: string;
    title?: string;
    address?: string;
    mapLink?: string; 
    buttonText?: string;
    mapEmbedUrl?: string; 
}

export default function Local({
    
    locationImageUrl = '/images/local.png', // Preferência por .webp para otimização, se disponível. Se for .png, mantenha .png
    locationAltText = 'Ilustração do Centro de Convenções do Cariri',
    title = 'CENTRO DE CONVENÇÕES DO CARIRI',
    address = 'Av. Padre Cícero, 4400 - Muriti, Crato',
    mapLink = 'https://www.google.com/maps/search/?api=1&query=Centro+de+Convecoes+do+Cariri,+Av.+Padre+Cicero,+4400+-+Muriti,+Crato', 
    buttonText = 'Ver no mapa',
}: LocalProps) {
    return (
        <section
            id="local"
            className="relative flex flex-col items-center justify-center gap-8 min-h-screen px-4 py-12 md:py-20 overflow-hidden"
            aria-labelledby="local-section-title"
        >
            {/* Imagem de Fundo Otimizada */}
            
            
            <div className="max-w-screen-xl w-full relative z-20 flex flex-col items-center text-center">
                
                <h2
                    id="local-section-title"
                    className="text-white text-4xl sm:text-5xl font-bold mb-8 font-arsenica drop-shadow-md"
                >
                    Onde será realizado:
                </h2>
                
                {/* Container da Imagem e Informações do Local (Este sim, flex-col md:flex-row) */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    {/* Imagem do Local */}
                    <div className="w-full md:w-1/2 flex justify-center items-center flex-shrink-0">
                        <Image
                            src={locationImageUrl}
                            alt={locationAltText}
                            width={856}
                            height={856}
                            className="w-108 h-108 object-contain drop-shadow-xl rounded-lg"
                            loading="lazy"
                        />
                    </div>

                    {/* Informações e Mapa */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
                        <h3
                            id="local-title"
                            className="text-3xl sm:text-4xl font-bold text-white drop-shadow"
                        >
                            {title}
                        </h3>
                        <p className="text-base sm:text-lg text-white/90 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-accent-yellow" aria-hidden="true" />
                            {address}
                        </p>

                        {/* Botão para abrir o mapa em nova aba */}
                        <Link
                            href={mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2 bg-brand-orange text-white font-semibold rounded-md hover:bg-brand-orange/90 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2 transition-all"
                            aria-label={`Abrir no Google Maps: ${title}`}
                            role="link"
                        >
                            {buttonText}
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}