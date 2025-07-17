//! Objeto Seção
export interface Section {
    id: number;
    event_id: number;
    section_name: string;
    title: string | null;
    subtitle: string | null;
    description: string | null;
    background_image_url: string | null;
    call_to_action_text: string | null;
    call_to_action_link: string | null;
    display_order: number;
    created_at: string;
    updated_at: string;
}

//! Criação de Seção
export interface CreateSectionData {
    eventId: number;
    sectionName: string;
    title?: string;
    subtitle?: string;
    description?: string;
    backgroundImageUrl?: string;
    callToActionText?: string;
    callToActionLink?: string;
    displayOrder: number;
}


//! Atualização de Seção.
export interface UpdateSectionData {
    eventId?: number;
    sectionName?: string;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
    backgroundImageUrl?: string | null;
    callToActionText?: string | null;
    callToActionLink?: string | null;
    displayOrder?: number;
}