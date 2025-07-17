import Image from 'next/image';

interface BannerProps{
    imageUrl?: string;
    altText?: string;
    title?: string
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
}

export default function Banner({
    imageUrl = '/images/bannersite.png',
    altText = "Banner do congresso CSSI - Semana de TDAH",
    title = "Congresso CSSI",
    subtitle = "Semana de Conscientização sobre TDAH",
    ctaText = "Inscreva-se Agora",
    ctaLink = "#inscricao",
}: BannerProps){
    return (
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden" id="banner" aria-labelledby="banner-title">
            <Image
                src={imageUrl}
                alt={altText}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                loading="eager" //!Carregando a imagem imediatamente.
            />
        </section>
    )
}