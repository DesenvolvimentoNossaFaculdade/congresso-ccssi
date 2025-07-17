//! --> Base layout
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

//! --> Components - Sections
import Banner from '@/components/sections/Banner';
import Evento from '@/components/sections/Evento';
import HeadlineHorizontalLoop from '@/components/sections/HeadlineHorizontalLoop';

export default function PublicHomePage() {
    return (
        <>
            <Header />
            <Banner />
            <HeadlineHorizontalLoop/>
            <Evento />
            <Footer />
        </>
    )
}