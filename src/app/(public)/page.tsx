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
// import Agenda from '@/components/sections/Agenda';


export default function PublicHomePage() {
    

    return (
        <>
            <Header />
            <Banner />
            <HeadlineHorizontalLoop/>
            <Evento />
                {/* Content */}
                <div className="relative z-20">
                    <Carousel />
                    <Local />
                    <Kit />
                    <Faq />
                    <Lead />
                </div>
            
            <Footer />
        </>
    )
}