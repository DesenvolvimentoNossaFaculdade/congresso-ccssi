

//! Objeto Ticket
export interface Ticket{
    id: number;
    event_id: number;
    ticket_type: string;
    price: string;
    currency: string;
    available_quantity: number | null;
    description: string | null;
    starts_selling_at: string | null;
    ends_selling_at: string | null;
    created_at: string;
    updated_at: string;
}

//! Criação do Ticket
export interface CreateTicketData{
    eventId: number;
    ticketType: string;
    price: number | string;
    currency?: string;
    availableQuantity?: number;
    description?: string;
    startsSellingAt?: string;
    endsSellingAt?: string;
}

export interface UpdateTicketData{
    eventId?: number;
    ticketType?: string;
    price?: number | string;
    currency?: string;
    availableQuantity?: number | null;
    description?: string | null;
    startsSellingAt?: string | null;
    endsSellingAt?: string | null;
}