'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

export const people = [
    {
            id: 1,
            name: "Jane Doe",
            profession: "Pesquisadora em Neurodesenvolvimento",
            image: "/images/speakers/jane.jpeg",
            description: `<p>Jane Doe é uma renomada pesquisadora com foco em neurodesenvolvimento e primeira infância. Possui doutorado pela Universidade Federal e é autora de diversos artigos científicos e livros na área.</p>`,
            socialMedia: [
                { platform: "linkedin", url: "https://linkedin.com/in/janedoe" },
                { platform: "twitter", url: "https://twitter.com/janedoe" },
                { platform: "website", url: "https://janedoe.com" },
            ],
        },
        {
            id: 2,
            name: "John Smith",
            profession: "Psicólogo Clínico",
            image: "/images/speakers/john.jpeg",
            description: `<p>John Smith é psicólogo clínico com vasta experiência no atendimento de adolescentes e adultos. Especialista em terapia cognitivo-comportamental, atua também como supervisor clínico e palestrante.</p>`,
            socialMedia: [
                { platform: "linkedin", url: "https://linkedin.com/in/johnsmith" },
                { platform: "twitter", url: "https://twitter.com/johnsmith" },
            ],
        },
        {
            id: 3,
            name: "Alice Johnson",
            profession: "Pedagoga e Mestre em Educação Inclusiva",
            image: "/images/speakers/alice.jpeg",
            description: `<p>Alice Johnson é pedagoga e mestre em Educação Inclusiva. Com mais de 15 anos de experiência em sala de aula, desenvolve metodologias inovadoras para a aprendizagem de alunos com necessidades especiais.</p>`,
            socialMedia: [
                { platform: "linkedin", url: "https://linkedin.com/in/alicej" },
            ],
        },
        {
            id: 4,
            name: "Bob Brown",
            profession: "Terapeuta Ocupacional",
            image: "/images/speakers/bob.jpeg",
            description: `<p>Bob Brown é terapeuta ocupacional e especialista em integração sensorial. Seu trabalho visa promover a autonomia e participação em atividades diárias para pessoas de todas as idades, com foco em desenvolvimento infantil.</p>`,
            socialMedia: [
                { platform: "website", url: "https://bobbrowntherapy.com" },
            ],
        },
        {
            id: 5,
            name: "Caio Silva",
            profession: "Médico Psiquiatra",
            image: "/images/speakers/caio.jpeg",
            description: `<p>Caio Silva é médico psiquiatra com especialização em saúde mental infanto-juvenil. Atua em consultório particular e em hospitais, dedicando-se ao diagnóstico e tratamento de transtornos psiquiátricos em crianças e adolescentes.</p>`,
            socialMedia: [
                { platform: "linkedin", url: "https://linkedin.com/in/caiosilva" },
            ],
        },
        {
            id: 6,
            name: "Lucas Silva",
            profession: "Neuropsicólogo",
            image: "/images/speakers/lucas.jpeg",
            description: `<p>Lucas Silva é neuropsicólogo, com foco em avaliação e reabilitação cognitiva. Sua pesquisa aborda os impactos da tecnologia no cérebro em desenvolvimento e estratégias para otimizar o aprendizado.</p>`,
            socialMedia: [
                { platform: "linkedin", url: "https://linkedin.com/in/lucassilva" },
                { platform: "twitter", url: "https://twitter.com/lucassilva" },
            ],
        },
        {
            id: 7,
            name: "Paulo Souza",
            profession: "Educador Físico e Psicomotricista",
            image: "/images/speakers/paulo.jpeg",
            description: `<p>Paulo Souza é educador físico e especialista em desenvolvimento motor e psicomotricidade. Trabalha com a aplicação de atividades lúdicas e esportivas para o aprimoramento de habilidades motoras em crianças.</p>`,
            socialMedia: [
                { platform: "linkedin", url: "https://linkedin.com/in/paulosouza" },
                { platform: "website", url: "https://paulosouzaedu.com" },
            ],
        },
];

export default function CarouselCircular() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayCount, setDisplayCount] = useState(1);
    const router = useRouter();
    const carouselRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateDisplayCount = () => {
            if(window.innerWidth >= 1024){
                setDisplayCount(4);
            } else if(window.innerWidth >= 768){
                setDisplayCount(2);
            }else{
                setDisplayCount(1);
            }
        };
        
        updateDisplayCount();

        window.addEventListener('resize', updateDisplayCount);
        return () => window.removeEventListener('resize', updateDisplayCount);
    }, []);

    const getDisplayIndexes = () => {
        const indexes = [];
        const totalPeople = people.length;
        for(let i = 0; i < displayCount; i++){
            indexes.push((currentIndex + i) % totalPeople);
        }
        return indexes;
    };

    const displayIndexes = getDisplayIndexes();

    const next = () =>{
        setCurrentIndex((prev) => (prev + 1) % people.length);
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + people.length) % people.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleViewDetails = (id: number) => {
        router.push(`/participantes/${id}`);
    };

    const sectionBackgroundImage = '/images/images/bg-site_01.jpg';

    //! Função Auxiliar rede sociais.
    const getSocialIcon = (platform: string) => {
        switch (platform){
            case 'linkedin':
                return <FaLinkedin size={20} />;
            case 'twiter':
                return <FaTwitter size={20} />;
            case 'website':
                return <FaGlobe size={20} />;
            default:
                return null;
        }
    };

    return (
        <section
            id="speakers"
            className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative shadow-lg carousel-bg font-raleway"
            aria-labelledby="speakers-title"
        >
            <h2
                id="speakers-title"
                className="relative z-20 text-gabigol-orange text-4xl sm:text-5xl font-bold mb-12 text-center drop-shadow-md"
            >
                Palestrantes:
            </h2>

            <div className="relative z-20 flex flex-col items-center w-full max-w-7xl">
                <div
                    ref={carouselRef}
                    className={`flex flex-row justify-center items-stretch gap-8 w-full overflow-x-hidden p-4 no-scrollbar
                                ${displayCount === 1 ? 'max-w-xs' : 'max-w-full'} `}
                >
                    {displayIndexes.map((personIndex) => {
                        const person = people[personIndex];
                        return (
                            <div
                                key={person.id}
                                className={`relative flex-shrink-0 w-72 h-[400px] overflow-hidden shadow-lg transition-all duration-500 ease-in-out rounded-xl group border border-accent-yellow
                                        ${displayCount === 1 ? 'w-full max-w-xs' : ''}`}
                            >
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    fill
                                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, (max-width: 1024px) 25vw, 20vw"
                                    className="object-cover rounded-xl"
                                    loading="lazy"
                                />

                                {/* Sobreposição que desaparece ao passar o mouse */}
                                <div className="absolute inset-0 bg-white/30 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-0 rounded-xl z-10" />

                                {/* Conteúdo que aparece/é aprimorado ao passar o mouse */}
                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dark/90 to-transparent p-4 text-center z-20 flex flex-col items-center justify-end h-full">
                                    <h3 className="text-white font-semibold text-lg mb-2">
                                        {person.name}
                                    </h3>
                                    {/* Profissão - sempre visível, mas com opacidade que se revela no hover */}
                                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                                        {person.profession}
                                    </p>

                                    {/* Links das Redes Sociais */}
                                    {person.socialMedia && person.socialMedia.length > 0 && (
                                        <div className="flex gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
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

                                    <button
                                        onClick={() => handleViewDetails(person.id)}
                                        className="mt-2 px-4 py-2 text-sm font-bold rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white transition opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2"
                                    >
                                        Ver detalhes
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 z-30">
                    <button
                        onClick={prev}
                        className="p-2 bg-brand-orange/80 hover:bg-brand-orange rounded-full shadow-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="p-2 bg-brand-orange/80 hover:bg-brand-orange rounded-full shadow-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2"
                        aria-label="Próximo"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="flex gap-2 mt-4 z-20">
                    {people.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-brand-orange' : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Ir para o slide ${index + 1}`}
                        />
                    ))}
                </div>
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

