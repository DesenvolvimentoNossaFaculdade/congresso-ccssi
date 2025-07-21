// src/data/ingressos.ts

export interface IngressoItem {
  id: string;
  title: string;
  preco: string;
  parcelas: string | null;
  benefits: string[]; // Lista de benefícios do ingresso
  logoSrc?: string; // Caminho para a logo do ingresso no card
}

export const ingressos: IngressoItem[] = [
  {
    id: 'passaporte-lote-0',
    title: 'PASSAPORTE LOTE 0',
    preco: 'R$ 200,00',
    parcelas: '12x de R$ 20,00',
    benefits: ['Acesso a dois dias de evento', 'Welcome kit', 'Certificado de participação'],
    logoSrc: '/images/LogoSimbolo.png', // Caminho da logo
  },
  {
    id: 'passaporte-meia-lote-0',
    title: 'PASSAPORTE MEIA LOTE 0',
    preco: 'R$ 100,00',
    parcelas: '12x de R$ 10,00',
    benefits: ['Acesso a dois dias de evento', 'Welcome kit', 'Certificado de participação'],
    logoSrc: '/images/LogoSimbolo.png',
  },
  {
    id: 'somente-palestras-lote-0',
    title: 'INGRESSO SOMENTE PALESTRAS LOTE 0',
    preco: 'R$ 100,00',
    parcelas: '12x de R$ 10,00',
    benefits: ['Acesso a palestras do Palco Principal', 'Certificado de participação'],
    logoSrc: '/images/LogoSimbolo.png',
  },
];
