export interface IngressoItem {
  id: string;
  title: string;
  precoOriginal: string;
  precoPromocional: string;
  parcelas: string | null;
  benefits: string[];
  logoSrc?: string;
  symplaLink: string;
}

export const ingressos: IngressoItem[] = [
  {
    id: 'passaporte-lote-0',
    title: 'Passaporte',
    precoOriginal: 'R$ 247,00',
    precoPromocional: 'R$ 99,90',
    parcelas: 'em até 12x',
    benefits: [
      'Acesso aos dois dias de evento',
      'Certificado de participação',
      'Welcome kit',
      'Participação em sorteios',
      'Networking qualificado'
    ],
    logoSrc: '/images/LogoSimbolo.png',
    symplaLink: 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154?token=b41ece7a5612cb482bc84abdcdf86c3c'
  },
  // {
  //   id: 'passaporte-meia-lote-0',
  //   title: 'Passaporte (meia-entrada)',
  //   precoOriginal: 'R$ 123,50',
  //   parcelas: 'em até 12x',
  //   benefits: ['Acesso aos dois dias de evento', 'Certificado de participação', 'Welcome kit', 'Participação em sorteios', 'Networking qualificado'],
  //   logoSrc: '/images/LogoSimbolo.png',
  //   symplaLink: 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154',
  //   precoPromocional: ""
  // },
  // {
  //   id: 'ingresso-coletivo-lote-0',
  //   title: 'Passaporte Coletivo',
  //   precoOriginal: 'R$ 99,99',
  //   parcelas: 'em até 12x',
  //   benefits: ['Acesso aos dois dias de evento', 'Certificado de participação', 'Welcome kit', 'Participação em sorteios', 'Networking qualificado'],
  //   logoSrc: '/images/LogoSimbolo.png',
  //   symplaLink: 'https://www.sympla.com.br/evento/i-congresso-caririense-de-saude-integrada/3027154',
  //   precoPromocional: ""
  // },
  // {
  //   id: 'somente-professore-CNP',
  //   title: 'Passaporte exclusivo para professores CNP',
  //   precoOriginal: 'Gratuito',
  //   parcelas: null,
  //   benefits: ['Acesso aos dois dias de evento', 'Certificado de participação', 'Welcome kit', 'Participação em sorteios', 'Networking qualificado'],
  //   logoSrc: '/images/LogoSimbolo.png',
  //   symplaLink: 'https://www.conapro.org/professor/criar',
  //   precoPromocional: ""
  // },
];