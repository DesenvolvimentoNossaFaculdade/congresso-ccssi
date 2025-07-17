

export interface Speaker {
    name: string;
    role: string;
    company: string;
    image: string;
}

export interface AgendaItem{
    id: string;
    time: string;
    title: string;
    track: string;
    type: 'Keynote' | 'Palestra' | 'Roda de Conversa' | 'Oficina';
    tags?: string[];
    speaker?: Speaker;
}

export const agenda: AgendaItem[] = [
    {
        id: 'ia-negocios',
        time: '09:40',
        title: 'Desenvolvimento com IA para negócios',
        track: 'Palco Principal',
        type: 'Keynote',
        speaker: {
        name: 'Leonardo Leitão',
        role: 'Fundador',
        company: 'Cod3r',
        image: '',
        },
    },
    {
        id: 'react-native-performance',
        time: '10:40',
        title: 'React Native: Do JS à Performance Nativa - Dominando Turbo Modules no Android',
        track: 'Palco Conexão',
        type: 'Palestra',
        tags: ['Mobile', 'React Native'],
        speaker: {
        name: 'Antony Lemos',
        role: 'Especialista Front-End',
        company: 'Magalu - Luiza Labs',
        image: '', // URL externa
        },
    },
    {
        id: 'saude-mental-digital',
        time: '11:40',
        title: 'Saúde Mental na Era Digital: Desafios e Soluções',
        track: 'Palco Principal',
        type: 'Palestra',
        tags: ['Saúde', 'Bem-estar'],
        speaker: {
        name: 'Maria Clara',
        role: 'Psicóloga Clínica',
        company: 'Mente Sã',
        image: '',
        },
    },
    {
        id: 'inclusao-educacional',
        time: '13:00',
        title: 'Inclusão Educacional: Estratégias para um Ambiente de Aprendizagem Diverso',
        track: 'Palco Conexão',
        type: 'Roda de Conversa',
        tags: ['Educação', 'Inclusão'],
        speaker: {
        name: 'Fernando Costa',
        role: 'Pedagogo',
        company: 'Escola do Futuro',
        image: '',
        },
    },
    {
        id: 'terapias-alternativas',
        time: '14:00',
        title: 'Terapias Alternativas no Tratamento do Neurodesenvolvimento',
        track: 'Palco Principal',
        type: 'Oficina',
        tags: ['Saúde', 'Terapias'],
        speaker: {
        name: 'Ana Paula',
        role: 'Terapeuta Ocupacional',
        company: 'Clínica Integrar',
        image: '',
        },
    },
]