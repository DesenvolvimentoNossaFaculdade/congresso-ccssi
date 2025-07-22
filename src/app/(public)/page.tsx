//* --> Padrão
import Image from 'next/image';

//? --> Base layout
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

//! --> Components - Sections
import Banner from '@/components/sections/Banner';
import Evento from '@/components/sections/Evento';
import HeadlineHorizontalLoop from '@/components/sections/HeadlineHorizontalLoop';
import Local from '@/components/sections/Local';
import Carousel from '@/components/sections/Carousel';
import Lead from '@/components/sections/Lead';
import Kit from '@/components/sections/Kit';
import Faq from '@/components/sections/Faq';
import CNPSection from '@/components/sections/CNPSection';


export default function PublicHomePage() {
    

    return (
        <>
            <Header />

            {/* BG 01 --> Padrão do Site. */}
            <div className="relative z-20">
                <Banner />
                <HeadlineHorizontalLoop/>
                <Evento />
            </div>
                <div className="relative z-20">
                    <Carousel />
                    <Local />
                    <CNPSection />
                    <Kit />
                    <Lead />
                    <Faq />
                </div>
            
            <Footer />
        </>
    )
}