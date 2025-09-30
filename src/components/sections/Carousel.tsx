'use client'; 

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaTwitter, FaGlobe, FaChevronLeft,  FaChevronRight} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SocialMedia = {
  platform: 'linkedin' | 'twitter' | 'website' | 'instagram';
  url: string;
}

type Person = {
  id: number;
  name: string;
  profession: string;
  image: string;
  description: string;
  socialMedia: SocialMedia[];
}


export const people: Person[] = [
    {
        id: 1,
        name: "Cida Bezerra",
        profession: "Psicanalista, Mentora e Analista corporal",
        image: "/images/speakers/cida-bezerra.jpg",
        description: `<p>PSICANALISTA, MENTORA E ANALISTA CORPORAL</p>`,
        socialMedia: [],
    },
    {
        id: 2,
        name: "Emanuela Jamacarú",
        profession: "Psicopedagoga e Terapeuta ABA",
        image: "/images/speakers/emanuela-jamacaru.jpeg",
        description: `<p></p>`,
        socialMedia: [],
    },
    {
        id: 3,
        name: "Patrícia Santos",
        profession: "Escritora e Psicóloga ABA, TCC e Neuropsicologia",
        image: "/images/speakers/patricia-santos.jpg",
        description: `<p></p>`,
        socialMedia: [],
    },
    {
        id: 4,
        name: "Ilma Gabriely Ribeiro Franco",
        profession: "Terapeuta Ocupacional pós-graduada em Autismo, Tecnologia Assistiva e Reabilitação Visual",
        image: "/images/speakers/ilma-gabriely.jpg",
        description: `<p></p>`,
        socialMedia: [],
    },
    {
        id: 5,
        name: "Leticia Nascimento",
        profession: "Terapeuta Ocupacional - Especialista em TCC na infância e na adolescência, ABA e Seletividade Alimentar",
        image: "/images/speakers/leticia-nascimento.jpeg",
        description: `<p></p>`,
        socialMedia: [],
    },
    {
        id: 6,
        name: "Alêudo Alves Coelho",
        profession: "Enfermeiro, Terapeuta Holístico e mestrando em Ciências da Saúde",
        image: "/images/speakers/aleudo-alves-coelho.jpeg",
        description: `<p></p>`,
        socialMedia: [],
    },
    {
        id: 7,
        name: "Isadora Nascimento",
        profession: "Musicoterapeuta com ênfase no Transtorno do Espectro Autista em crianças e adolescente",
        image: "/images/speakers/isadora-nascimento.jpeg",
        description: `<p></p>`,
        socialMedia: [],
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

export default function SpeakersCarousel() {
  const sectionBackgroundImage = '/images/images/bg-site_01.jpg';

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const [isNavReady, setIsNavReady] = useState(false);

  // Espera o DOM montar para ativar os botões
  useEffect(() => {
    setIsNavReady(true);
  }, []);

  return (
    <section
      id="speakers"
      className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative shadow-lg carousel-bg font-raleway"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75 z-0" />

      <h2 className="relative z-20 text-gabigol-orange text-4xl sm:text-5xl font-bold mb-12 text-center drop-shadow-md">
        Palestrantes:
      </h2>

    <div className="relative z-20 w-full max-w-6xl mx-auto overflow-visible">
        {isNavReady && (
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              // Faz os botões funcionarem após render
              // @ts-expect-error: Swiper navigation refs precisam ser setadas manualmente após init
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error: Swiper navigation refs precisam ser setadas manualmente após init
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {people.map((person) => (
              <SwiperSlide key={person.id}>
                <div className="relative w-full h-[400px] overflow-hidden from-primary-dark/45 shadow-lg transition-all duration-500 ease-in-out rounded-xl group border border-accent-yellow">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary-dark/70 to-transparent p-4 text-center z-20 flex flex-col items-center justify-end h-full opacity-100">
                    <h3 className="text-black font-semibold text- text-xl mb-5 text-balance" style={{ textShadow: '0 2px 8px white' }}>
                      {person.name}
                    </h3>
                    <p className="text-black mb-5 text-sm font-bold text-balance" style={{ textShadow: '1px 1px 6px white' }}>{person.profession}</p>

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
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Botões personalizados */}
            <div
                ref={prevRef}
                className="swiper-button-custom absolute top-1/2 left-2 transform -translate-y-1/2 z-30 cursor-pointer bg-white/90 text-black hover:bg-black hover:text-white transition-all p-2 rounded-full shadow-md"
            >
              <FaChevronLeft size={20} />
            </div>
           <div
                ref={nextRef}
                className="swiper-button-custom absolute top-1/2 right-2 transform -translate-y-1/2 z-30 cursor-pointer bg-white/90 text-black hover:bg-black hover:text-white transition-all p-2 rounded-full shadow-md"
            >
              <FaChevronRight size={20} />
            </div>
          </Swiper>
        )}
      </div>

      {/* Estilo de fundo */}
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