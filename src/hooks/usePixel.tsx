'use client';

import { useCallback } from 'react';

type PixelEventName = 'PageView' | 'AddToCart' | 'Purchase' | 'onKitClick';

interface PixelEventParams {
  [key: string]: string | number | string[] | undefined;
}

export const usePixel = () => {
  const trackEvent = useCallback((eventName: PixelEventName, params?: PixelEventParams) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, params);
    } else {
      console.warn("Facebook Pixel não está carregado corretamente.");
    }
  }, []);

  return { trackEvent };
};
