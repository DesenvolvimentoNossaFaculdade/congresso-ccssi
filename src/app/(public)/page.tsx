'use client'

import { useEffect } from "react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {usePixel} from '@/hooks/usePixel';



//! --> Components - Sections
import Banner from '@/components/sections/Banner';
import Evento from '@/components/sections/Evento';
import HeadlineHorizontalLoop from '@/components/sections/HeadlineHorizontalLoop';
import Local from '@/components/sections/Local';
import Carousel from '@/components/sections/Carousel';
import Programacao from "@/components/sections/Programacao";
import Lead from '@/components/sections/Lead';
import Kit from '@/components/sections/Kit';
import Faq from '@/components/sections/Faq';
import CNPSection from '@/components/sections/CNPSection';

export default function PublicHomePage() {
const { trackEvent } = usePixel();

    const handleKitClick = (itemId: string) => {
    trackEvent('onKitClick', {
      content_name: `Item ${itemId}`,
      content_ids: [itemId],
    });
  };

  return (
    <>
      <Header />

      {/* BG 01 --> Padrão do Site. */}
      <div className="relative z-20">
        <Banner />
        <HeadlineHorizontalLoop />
        <Evento />
      </div>

      <div className="relative z-20">
        <Carousel />
        <Local />
        <Programacao />
        <CNPSection/>
        <Kit onKitClick={handleKitClick}/>
        <Lead />
        <Faq />
      </div>

      <Footer />
    </>
  );
}
