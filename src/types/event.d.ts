//! Interface objeto Evento
export interface Event {
    id: number;
    event_name: string;
    site_title: string;
    event_date: string;
    location: string | null;
    description: string | null;
    created_at: string;
    updated_at: string;
}

//! Interface para criação de Evento
export interface CreateEventData{
    eventName: string;
    siteTitle: string;
    eventDate: string;
    location?: string;
    description?: string;
}

//! Interface para Atualização do Evento
export interface UpdateEventData{
    eventName?: string;
    siteTitle?: string;
    eventDate?: string;
    location?: string | null;
    description?: string | null;
}