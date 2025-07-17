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
                </div>
            
            <Footer />
        </>
    )
}