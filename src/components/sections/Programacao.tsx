// src/components/sections/Programacao.tsx
'use client';

import { useState } from 'react';
import { FaMicrophone, FaCoffee, FaUsers, FaGraduationCap, FaFlagCheckered } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  type: 'palestra' | 'conversa' | 'intervalo' | 'abertura' | 'encerramento' | 'workshop' | 'almoco';
  workshops?: { title: string; description: string }[];
}

const scheduleData: {
  [day: string]: ScheduleItem[];
} = {
  '2025-10-24': [
    { time: '17:30', title: 'Credenciamento e acolhimento do evento', type: 'abertura' },
    { time: '18:00', title: 'Abertura do Congresso', type: 'abertura' },
    {
      time: '19:00',
      title: 'TEA, TOD E TDAH: Perspectiva interdisciplinar em saúde integrada',
      type: 'palestra',
      description: 'Palestra com Dr. Adalberto Cruz Sampaio'
    },
    {
      time: '20:00',
      title: 'A atuação do Terapeuta Ocupacional no TEA e TOD',
      type: 'palestra',
      description: 'Letícia Nascimento'
    },
    {
      time: '20:30',
      title: 'Experiências clínicas multidisciplinares: A importância da intervenção precoce nos transtornos do neurodesenvolvimento',
      type: 'conversa',
      description: 'Roda de conversa com Isadora Nascimento'
    },
    {
      time: '20:30', // se quiser evitar duplicação de horário, pode ajustar
      title: 'Elane Galvão – aguardando conteúdo',
      type: 'palestra',
    },
    {
      time: '20:30',
      title: 'Maria Arlaine Palacio – aguardando conteúdo',
      type: 'palestra',
    },
    {
      time: '20:30',
      title: 'Cida Bezerra – Psicanalista / Mentor(a)',
      type: 'palestra',
      description: 'Cida Bezerra'
    },
  ],
  '2025-10-25': [
    { time: '08:00', title: 'Acolhimento do evento', type: 'abertura' },
    {
      time: '08:30',
      title: 'Crises nos transtornos do neurodesenvolvimento: prevenção, manejo e caminhos de inclusão',
      type: 'palestra',
      description: 'Dra Talita Miranda'
    },
    {
      time: '09:30',
      title: 'O processo de inclusão escolar entre a teoria e a prática: Vivências, desafios e superações.',
      type: 'conversa',
      description: 'Hannah Nassif'
    },
    {
      time: '09:30',
      title: 'Ana Munisso – Psicopedagoga / aguardando conteúdo',
      type: 'palestra',
    },
    {
      time: '09:30',
      title: 'Elizângela Matias – Neuropsicopedagoga / aguardando conteúdo',
      type: 'palestra',
    },
    {
      time: '09:30',
      title: 'Emanuela Jamacarú – Mãe atípica / aguardando conteúdo',
      type: 'palestra',
    },
    {
      time: '11:00',
      title: 'Entre a adolescência e a vida adulta: O cuidado em jovens neurodivergentes',
      type: 'palestra',
      description: 'Dr. Genner Barbosa'
    },
    { time: '12:00', title: 'Intervalo', type: 'intervalo' },
    {
      time: '14:00',
      title: 'Intervenção do Terapeuta Ocupacional no TEA e suas comorbidades',
      type: 'palestra',
      description: 'Ilma Gabriely Ribeiro Franco'
    },
    {
      time: '15:00',
      title: 'Saúde mental e manejo de comorbidades de pessoas neurodivergentes: Avaliação/Intervenção ABA/psicomotoras e novas abordagens',
      type: 'conversa',
      description: 'Patrícia Santos'
    },
    {
      time: '15:00',
      title: 'Amanda Santiago – Fisioterapeuta / aguardando conteúdo',
      type: 'palestra',
    },
    {
      time: '15:00',
      title: 'Aleudo Coelho – Enfermeiro / aguardando conteúdo',
      type: 'palestra',
    },
    {
      time: '15:00',
      title: 'Luana Campos Viana – Psicóloga / aguardando conteúdo',
      type: 'palestra',
    },
    {
      time: '16:30',
      title: 'O preço do excesso: O impacto das telas no neurodesenvolvimento',
      type: 'palestra',
      description: 'Dennysson'
    },
  ],
};

const getIcon = (type: ScheduleItem['type']) => {
  switch (type) {
    case 'palestra':
      return <FaMicrophone className="text-white" />;
    case 'conversa':
      return <FaUsers className="text-white" />;
    case 'intervalo':
      return <FaCoffee className="text-white" />;
    case 'almoco':
      return <FaCoffee className="text-white" />; // ou outro ícone se quiser diferenciar almoço
    case 'workshop':
      return <FaGraduationCap className="text-white" />;
    case 'abertura':
    case 'encerramento':
      return <FaFlagCheckered className="text-white" />;
    default:
      return null;
  }
};

const Timeline = ({ items }: { items: ScheduleItem[] }) => {
  return (
    <div className="relative border-l-2 border-orange-500 ml-6 md:ml-0">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="mb-10 ml-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full ring-8 ring-white/10">
            {getIcon(item.type)}
          </span>
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:border-orange-500 transition-colors duration-300">
            <time className="block mb-2 text-sm font-normal leading-none text-orange-400">
              {item.time}
            </time>
            <h3 className="text-xl font-semibold text-black">{item.title}</h3>
            {item.description && (
              <p className="mt-2 text-base font-normal text-black">
                {item.description}
              </p>
            )}
            {item.workshops && (
              <div className="mt-4 space-y-4">
                {item.workshops.map((ws, wsIndex) => (
                  <div
                    key={wsIndex}
                    className="p-4 bg-gray-700/50 rounded-md border-l-4 border-orange-600"
                  >
                    <h4 className="font-bold text-orange-300">{ws.title}</h4>
                    <p className="text-black text-sm">{ws.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Programacao() {
  const [activeTab, setActiveTab] = useState<'2025-10-24' | '2025-10-25'>('2025-10-24');

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 font-raleway">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-orange-500 sm:text-5xl drop-shadow-md">
            Programação Completa
          </h2>
          <p className="mt-4 text-xl text-black">
            Confira a programação do 1º Congresso Caririense de Saúde Integrada.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700">
            <button
              onClick={() => setActiveTab('2025-10-24')}
              className={`w-40 px-6 py-3 text-center font-semibold rounded-full transition-all duration-300 ${
                activeTab === '2025-10-24'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Dia 24/10
            </button>
            <button
              onClick={() => setActiveTab('2025-10-25')}
              className={`w-40 px-6 py-3 text-center font-semibold rounded-full transition-all duration-300 ${
                activeTab === '2025-10-25'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              Dia 25/10
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Timeline items={scheduleData[activeTab]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
