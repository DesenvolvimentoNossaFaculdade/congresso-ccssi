declare global {
  interface Window {
    fbq?: (
      event: string,
      eventName: string,
      data?: Record<string, string | number | string[] | undefined>
    ) => void;
  }
}

export {};
