
declare global {
    interface Window {
    fbq: (event: string, eventName: string, data?: object) => void;
}
}

export {};
