// src/data/ingressos.ts

export interface IngressoItem {
  id: string;
  title: string;
  preco: string;
  parcelas: string | null;
  benefits: string[];
  logoSrc?: string;
  symplaLink: string;
}

export const ingressos: IngressoItem[] = [
  {
    id: 'passaporte-lote-0',
    title: 'Passaporte',
    preco: 'R$ 247,00',
    parcelas: 'em até 12x',
    benefits: ['Acesso a dois dias de evento', 'Certificado de participação', 'Welcome kit'],
    logoSrc: '/images/LogoSimbolo.png',
    symplaLink: 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154?_gl=1*ty4lem*_gcl_au*MTUzNzI2MzY0Mi4xNzU4MDQ1MDc4*_ga*MTMwNjYxODE5OC4xNzU4MDQ1MDc4*_ga_KXH10SQTZF*czE3NTgwNDUwNzckbzEkZzEkdDE3NTgwNDU0NjYkajYwJGwwJGg0NzA4ODIzMjc'
  },
  {
    id: 'passaporte-meia-lote-0',
    title: 'Passaporte (meia-entrada)',
    preco: 'R$ 123,50',
    parcelas: 'em até 12x',
    benefits: ['Acesso a dois dias de evento', 'Certificado de participação', 'Welcome kit'],
    logoSrc: '/images/LogoSimbolo.png',
    symplaLink: 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154?_gl=1*ty4lem*_gcl_au*MTUzNzI2MzY0Mi4xNzU4MDQ1MDc4*_ga*MTMwNjYxODE5OC4xNzU4MDQ1MDc4*_ga_KXH10SQTZF*czE3NTgwNDUwNzckbzEkZzEkdDE3NTgwNDU0NjYkajYwJGwwJGg0NzA4ODIzMjc'
  },
  {
    id: 'somente-palestras-lote-0',
    title: 'Ingresso Coletivo',
    preco: 'R$ 99,99',
    parcelas: 'em até 12x',
    benefits: ['Acesso a dois dias de evento', 'Certificado de participação', 'Welcome kit'],
    logoSrc: '/images/LogoSimbolo.png',
    symplaLink: 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154?_gl=1*ty4lem*_gcl_au*MTUzNzI2MzY0Mi4xNzU4MDQ1MDc4*_ga*MTMwNjYxODE5OC4xNzU4MDQ1MDc4*_ga_KXH10SQTZF*czE3NTgwNDUwNzckbzEkZzEkdDE3NTgwNDU0NjYkajYwJGwwJGg0NzA4ODIzMjc'
  },
  {
    id: 'somente-professore-CNP',
    title: 'Ingresso exclusivo para professores CNP',
    preco: 'R$ 00,00',
    parcelas: 'Gratis',
    benefits: ['Acesso a dois dias de evento', 'Certificado de participação', 'Welcome kit'],
    logoSrc: '/images/LogoSimbolo.png',
    symplaLink: 'https://www.conapro.org/professor/criar'
  },

];
