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

  useEffect(() => {
    if (document.getElementById("fb-pixel-script")) return;
    
    const script = document.createElement("script");
    script.id = "fb-pixel-script";
    script.innerHTML = `
      !function(f,b,e,v,n,t,s) {
        if(f.fbq)return;
        n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];
        t=b.createElement(e);t.async=!0;
        t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      
      fbq('init', '1318812019641102'); 
      fbq('track', 'PageView');
    `;
    
    document.head.appendChild(script);

   
    return () => {
      document.head.removeChild(script);
    };
  }, []); 

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
        {/* <Programacao /> */}
        <CNPSection/>
        <Kit onKitClick={handleKitClick}/>
        <Lead />
        <Faq />
      </div>

      <Footer />
    </>
  );
}
