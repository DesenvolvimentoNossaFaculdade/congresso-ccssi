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
    benefits: ['Acesso aos dois dias de evento', 'Certificado de participação', 'Welcome kit', 'Participação em sorteios', 'Networking qualificado'],
    logoSrc: '/images/LogoSimbolo.png',
    symplaLink: 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154'
  },
  {
    id: 'passaporte-meia-lote-0',
    title: 'Passaporte (meia-entrada)',
    preco: 'R$ 123,50',
    parcelas: 'em até 12x',
    benefits: ['Acesso aos dois dias de evento', 'Certificado de participação', 'Welcome kit', 'Participação em sorteios', 'Networking qualificado'],
    logoSrc: '/images/LogoSimbolo.png',
    symplaLink: 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154'
  },
  {
    id: 'ingresso-coletivo-lote-0',
    title: 'Passaporte Coletivo',
    preco: 'R$ 99,99',
    parcelas: 'em até 12x',
    benefits: ['Acesso aos dois dias de evento', 'Certificado de participação', 'Welcome kit', 'Participação em sorteios', 'Networking qualificado'],
    logoSrc: '/images/LogoSimbolo.png',
    symplaLink: 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154'
  },
  {
    id: 'somente-professore-CNP',
    title: 'Passaporte exclusivo para professores CNP',
    preco: 'Gratuito',
    parcelas: null,
    benefits: ['Acesso aos dois dias de evento', 'Certificado de participação', 'Welcome kit', 'Participação em sorteios', 'Networking qualificado'],
    logoSrc: '/images/LogoSimbolo.png',
    symplaLink: 'https://www.conapro.org/professor/criar'
  },
];