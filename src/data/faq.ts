// src/data/faq.ts

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "comprar-ingressos-fora",
    question: "Posso comprar ingressos fora do site oficial do Congresso Caririense de Saúde Integral?",
    answer: "Não. Os ingressos só estão disponíveis no site oficial. Compras por terceiros não são autorizadas.",
  },
  {
    id: "receber-ingresso",
    question: "Como vou receber meu ingresso?",
    answer: "Você receberá seu ingresso por e-mail após a confirmação do pagamento.",
  },
  {
    id: "parcelar-valor",
    question: "É possível parcelar o valor do ingresso?",
    answer: "Sim! O pagamento pode ser parcelado no cartão de crédito.",
  },
  {
    id: "comprar-mais-de-um",
    question: "Posso comprar mais de um ingresso?",
    answer: "Sim, você pode comprar quantos ingressos quiser no mesmo pedido.",
  },
  {
    id: "meia-entrada",
    question: "Existe meia entrada para estudantes?",
    answer: "Sim, estudantes têm direito à meia entrada mediante comprovação.",
  },
  {
    id: "formas-pagamento",
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos cartão de crédito, PIX e boleto bancário.",
  },
  {
    id: "nao-encontrou-resposta",
    question: "Não encontrou resposta para a sua dúvida?",
    answer: "Entre em contato conosco pelo WhatsApp: (88) 99991-3997.", // Adicionei o número para clareza
  },
];
