'use client'; 

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';


export const people = [
    {
        id: 1,
        name: "Dr. João Jorge Sousa",
        profession: "Terapeuta Ocupacional",
        image: "/images/speakers/dr-joao-jorge.jpg",
        description: `<p>Jane Doe é uma renomada pesquisadora com foco em neurodesenvolvimento e primeira infância. Possui doutorado pela Universidade Federal e é autora de diversos artigos científicos e livros na área.</p>`,
        socialMedia: [
            { platform: "instagram", url: "https://www.instagram.com/dr.joaojorge" },
        ],
    },
    {
        id: 2,
        name: "Cida Bezerra",
        profession: "Psicanalista e Analista Corporal",
        image: "/images/speakers/cida.jpg",
        description: `<p>John Smith é psicólogo clínico com vasta experiência no atendimento de adolescentes e adultos. Especialista em terapia cognitivo-comportamental, atua também como supervisor clínico e palestrante.</p>`,
        socialMedia: [
            { platform: "instagram", url: "https://www.instagram.com/cidabzerra.118/" },
        ],
    },
    {
        id: 3,
        name: "Alice Johnson",
        profession: "Pedagoga e Mestre em Educação Inclusiva",
        image: "/images/speakers/afavicon.ico.png",
        description: `<p>Alice Johnson é pedagoga e mestre em Educação Inclusiva. Com mais de 15 anos de experiência em sala de aula, desenvolve metodologias inovadoras para a aprendizagem de alunos com necessidades especiais.</p>`,
        socialMedia: [
            { platform: "linkedin", url: "https://linkedin.com/in/alicej" },
        ],
    },
    {
        id: 4,
        name: "Bob Brown",
        profession: "Terapeuta Ocupacional",
        image: "/images/speakers/favicon.ico.png",
        description: `<p>Bob Brown é terapeuta ocupacional e especialista em integração sensorial. Seu trabalho visa promover a autonomia e participação em atividades diárias para pessoas de todas as idades, com foco em desenvolvimento infantil.</p>`,
        socialMedia: [
            { platform: "website", url: "https://bobbrowntherapy.com" },
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
                        
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-0 rounded-xl z-10" />

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
