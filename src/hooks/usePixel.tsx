'use client';

import { useCallback } from 'react';

type PixelEventName = 'PageView' | 'AddToCart' | 'Purchase' | 'onKitClick';

interface PixelEventParams {
  [key: string]: string | number | string[] | undefined;
}

export const usePixel = () => {
  const trackEvent = useCallback((eventName: string, params?: PixelEventParams) => {
    if (window.fbq) {
      window.fbq('track', eventName, params);
    } else {
      console.warn("Facebook Pixel não está carregado corretamente.");
    }
  }, []);

  return { trackEvent };
};

export default usePixel;
