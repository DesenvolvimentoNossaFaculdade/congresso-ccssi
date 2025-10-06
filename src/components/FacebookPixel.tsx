'use client'

import { useEffect } from 'react';

export function FacebookPixel() {
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
      const existing = document.getElementById("fb-pixel-script");
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return null; // Não renderiza nada visualmente
}
