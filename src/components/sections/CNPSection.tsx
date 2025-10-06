'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CNPSectionProps {
    cnpLogoSrc?: string;
    cnpLogoAlt?: string;
    title?: string;
    introParagraph1?: string;
    introParagraph2?: string;
    introParagraph3?: string;
    callToActionPhrase?: string;
    finalParagraph?: string;
    buttonText?: string;
    buttonLink?: string;
    buttonLogoSrc?: string;
    buttonLogoAlt?: string;
}

export default function CNPSection({
    cnpLogoSrc = "/images/CNP-logo.png",
    cnpLogoAlt = "Logo do Conselho Nacional de Professores (CNP)",
    title = "Realização: Conselho Nacional de Professores (CNP)",
    introParagraph1 = " é uma iniciativa do Conselho Nacional de Professores (CNP) — órgão responsável pelo cadastro e regulamentação dos professores em todo o Brasil.",
    introParagraph2 = "O CNP tem como missão promover a valorização e o reconhecimento da classe docente, contribuindo para a qualificação dos profissionais da educação e para a garantia de uma educação de qualidade em todo o país.",
    introParagraph3 = "o Conselho reafirma seu compromisso com uma formação interdisciplinar, humana e alinhada às necessidades contemporâneas das nossas comunidades.",
    callToActionPhrase = "Faça parte dessa rede!",
    finalParagraph = "Se você é professor ou atua na área da educação, cadastre-se no CNP e una-se a milhares de profissionais comprometidos com o futuro da educação no Brasil.",
    buttonText = "Cadastre-se agora",
    buttonLink = "#cadastro-cnp",
    buttonLogoSrc = "/images/CNP-logo.png", 
    buttonLogoAlt = "Logo do CNP",
}: CNPSectionProps) {
    return (
        <section 
            id="cnp-section" 
            className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-transparent text-white flex justify-center items-center relative z-10 font-raleway shadow-lg"
            aria-labelledby="cnp-title"
        >
            <div 
                className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-12 
                            bg-black/30 p-4 rounded-sm shadow-xl backdrop-blur-md" 
            >
                {/* Bloco da imagem com botão visível apenas no desktop */}
                <div className="w-full md:w-2/5 flex flex-col justify-center items-center flex-shrink-0">
                    <Image
                        src={cnpLogoSrc} 
                        alt={cnpLogoAlt} 
                        width={800} 
                        height={800} 
                        className="w-full max-w-[800px] md:max-w-[1000px] h-auto object-contain drop-shadow-xl rounded-lg"
                        loading="lazy"
                    />

                    {/* BOTÃO - visível somente no desktop */}
                    <Link href={buttonLink} passHref className="hidden md:block mt-6">
                        <button 
                            className="px-8 py-3 bg-brand-orange text-white text-lg font-bold rounded-full shadow-lg hover:bg-brand-orange/90 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2
                                    flex items-center justify-center gap-2"
                        >
                            <Image
                                src={buttonLogoSrc}
                                alt={buttonLogoAlt}
                                width={50} 
                                height={50} 
                                className="object-contain"
                            />
                            <span>{buttonText}</span>
                        </button>
                    </Link>
                </div>

                {/* Bloco de texto com botão visível apenas no mobile */}
                <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 text-balance">
                    <h2 id="cnp-title" className="text-center text-3xl sm:text-4xl font-bold text-gabigol-orange drop-shadow-md text-balance">
                        {title}
                    </h2>
                    <div className=" p-5 text-justify text-lg text-white md:text-black space-y-4 leading-relaxed text-balance">
                        <p className='tracking-tight'>
                            O <strong className="text-gabigol-orange">Congresso Caririense de Saúde Integrada (CCSI)</strong> {introParagraph1.split('—')[0]}—{introParagraph1.split('—')[1]}
                        </p>
                        <p className='tracking-tight'>
                            O <strong className="text-gabigol-orange">CNP</strong> {introParagraph2.split('—')[0]}
                        </p>
                        <p className='tracking-tight'>
                            Ao realizar o <strong className="text-gabigol-orange tracking-tight">CCSI</strong>, {introParagraph3.split('—')[0]}
                        </p>
                        <p className="font-semibold text-gabigol-orange ">
                            {callToActionPhrase}
                        </p>
                        <p className='tracking-tight'>
                            {finalParagraph}
                        </p>

                        {/* BOTÃO - visível somente no mobile */}
                        <div className="block md:hidden flex justify-center">
                            <Link href={buttonLink} passHref>
                                <button 
                                    className="mt-4 px-8 py-3 bg-brand-orange text-white text-lg font-bold rounded-full shadow-lg hover:bg-brand-orange/90 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2 flex items-center justify-center gap-2"
                                    
                                >
                                    <Image
                                        src={buttonLogoSrc}
                                        alt={buttonLogoAlt}
                                        width={50} 
                                        height={50} 
                                        className="object-contain"
                                    />
                                    <span>{buttonText}</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
