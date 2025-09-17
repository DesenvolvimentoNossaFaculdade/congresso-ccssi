'use client'; 

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';


export const people = [
    {
        id: 1,
        name: "Cida Bezerra",
        profession: "PSICANALISTA",
        image: "/images/speakers/cida-bezerra.jpg",
        description: `<p>PSICANALISTA, MENTORA E ANALISTA CORPORAL</p>`,
        socialMedia: [
            
        ],
    },
    {
        id: 2,
        name: "Emanuela Jamacarú",
        profession: "PSICOPEDAGOGA E TERAPEUTA ABA",
        image: "/images/speakers/emanuela-jamacaru.jpeg",
        description: `<p></p>`,
        socialMedia: [
        ],
    },
    {
        id: 3,
        name: "Patrícia Santos",
        profession: "Escritora e Psicóloga ABA, TCC e Neuropsicologia",
        image: "/images/speakers/patricia-santos.jpg",
        description: `<p></p>`,
        socialMedia: [
        ],
    },
    {
        id: 4,
        name: "Em breve...",
        profession: "",
        image: "/images/speakers/favicon.ico.png",
        description: `<p></p>`,
        socialMedia: [
            { platform: "website", url: "#" },
        ],
    },
];

const getSocialIcon = (platform: string) => {
    switch (platform) {
        case 'linkedin':
            return <FaLinkedin size={20} />;
        case 'twitter':
            return <FaTwitter size={20} />;
        case 'website':
            return <FaGlobe size={20} />;
        case 'instagram':
            return <FaInstagram size={20} />;
        default:
            return null;
    }
};

export default function SpeakersGrid() {
    const sectionBackgroundImage = '/images/images/bg-site_01.jpg';
    
    return (
        <section
            id="speakers"
            className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative shadow-lg carousel-bg font-raleway"
            aria-labelledby="speakers-title"
        >
            <div className="absolute inset-0 bg-black/40 backdrop-brightness-75 z-0"></div> 
            
            <h2
                id="speakers-title"
                className="relative z-20 text-gabigol-orange text-4xl sm:text-5xl font-bold mb-12 text-center drop-shadow-md"
            >
                Palestrantes:
            </h2>

            <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                {people.map((person) => (
                    <div
                        key={person.id}
                        className="relative w-72 h-[400px] overflow-hidden shadow-lg transition-all duration-500 ease-in-out rounded-xl group border border-accent-yellow"
                    >
                        {/* Imagem */}
                        <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                            className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        

                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dark/80 to-transparent p-4 text-center z-20 flex flex-col items-center justify-end h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                            <h3 className="text-white font-semibold text-xl mb-2 text-balance">{person.name}</h3>
                            <p className="text-white/90 text-sm">{person.profession}</p>
                            
                            {person.socialMedia && person.socialMedia.length > 0 && (
                                <div className="flex gap-4 mt-4">
                                    {person.socialMedia.map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-brand-orange transition-colors"
                                            aria-label={`Link para ${social.platform} de ${person.name}`}
                                        >
                                            {getSocialIcon(social.platform)}
                                        </a>
                                    ))}
                                </div>
                            )}

                            {/* Botão de detalhes */}
                            {/* <Link href={`/participante/${person.id}`} passHref>
                                <button className="mt-4 px-4 py-2 text-sm font-bold rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white transition-colors duration-300">
                                    Ver detalhes
                                </button>
                            </Link> */}
                        </div>
                    </div>
                ))}
            </div>
            
            <style jsx>{`
                .carousel-bg {
                    background-image: url('${sectionBackgroundImage}');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-position: center center;
                }
                @media (max-width: 767px) {
                    .carousel-bg {
                        background-position: right center;
                    }
                }
            `}</style>
        </section>
    );
}
