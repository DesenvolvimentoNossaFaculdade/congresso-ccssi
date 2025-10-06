'use client';

import { useCallback } from 'react';

interface PixelEventParams {
  [key: string]: any;
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
