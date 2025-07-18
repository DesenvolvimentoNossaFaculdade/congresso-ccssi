import Image from 'next/image';
import Evento from './Evento';

interface BannerProps{
    imageUrl?: string;
    altText?: string;
    title?: string
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
}: BannerProps){
    return (
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden shadow-lg" id="banner" aria-labelledby="banner-title">
            <Image
                src={imageUrl}
                alt={altText}
                width={856}
                height={856}
                className="w-300 h-200 object-contain drop-shadow-xl rounded-lg px-20"
                loading="lazy"
            />
        </section>
    )
}