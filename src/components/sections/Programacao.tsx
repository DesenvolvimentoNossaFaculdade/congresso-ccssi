'use client';

import { useState } from 'react';
import { FaMicrophone, FaCoffee, FaUsers, FaGraduationCap, FaFlagCheckered } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Participant {
  name: string;
  role?: string;
}

interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  type: 'palestra' | 'conversa' | 'intervalo' | 'abertura' | 'encerramento' | 'workshop' | 'almoco';
  workshops?: { title: string; description: string }[];
  participants?: Participant[];
}

const scheduleData: Record<string, ScheduleItem[]> = {
  '2025-10-24': [
    { time: '17:30', title: 'Credenciamento e acolhimento do evento', type: 'abertura' },
    { time: '18:00', title: 'Abertura do Congresso', type: 'abertura' },
    {
      time: '19:00',
      title: 'TEA, TOD E TDAH: Perspectiva interdisciplinar em saúde integrada',
      type: 'palestra',
      description: 'Palestra com Dr. Adalberto Cruz Sampaio',
    },
    {
      time: '20:00',
      title: 'A atuação do Terapeuta Ocupacional no TEA e TOD',
      type: 'palestra',
      description: 'Palestra com Letícia Nascimento',
    },
    {
      time: '20:30',
      title: 'Experiências clínicas multidisciplinares: A importância da intervenção precoce nos transtornos do neurodesenvolvimento',
      type: 'conversa',
      description: 'Roda de conversa',
      participants: [
        { name: 'Isadora Nascimento' },
        { name: 'Elane Galvão' },
        { name: 'Maria Arlaine Palacio', role: 'Mediadora' },
        { name: 'Cida Bezerra' },
      ],
    },
  ],
  '2025-10-25': [
    { time: '08:00', title: 'Acolhimento do evento', type: 'abertura' },
    {
      time: '08:30',
      title: 'Crises nos transtornos do neurodesenvolvimento: prevenção, manejo e caminhos de inclusão',
      type: 'palestra',
      description: 'Palestra com Dra Talita Miranda',
    },
    {
      time: '09:30',
      title: 'O processo de inclusão escolar entre a teoria e a prática: Vivências, desafios e superações',
      type: 'conversa',
      description: 'Roda de conversa',
      participants: [
        { name: 'Hannah Nassif' },
        { name: 'Ana Munisso' },
        { name: 'Elizângela Matias' },
        { name: 'Emanuela Jamacarú Duarte da Silva (Tia Manu)' },
      ],
    },
    {
      time: '11:00',
      title: 'Entre a adolescência e a vida adulta: O cuidado em jovens neurodivergentes',
      type: 'palestra',
      description: 'Palestra com Dr. Genner Barbosa',
    },
    { time: '12:00', title: 'Intervalo', type: 'intervalo' },
    {
      time: '14:00',
      title: 'Intervenção do Terapeuta Ocupacional no TEA e suas comorbidades',
      type: 'palestra',
      description: 'Palestra com Ilma Gabriely Ribeiro Franco',
    },
    {
      time: '15:00',
      title: 'Saúde mental e manejo de comorbidades de pessoas neurodivergentes: Avaliação/Intervenção ABA/psicomotoras e novas abordagens',
      type: 'conversa',
      description: 'Roda de conversa',
      participants: [
        { name: 'Patrícia Santos' },
        { name: 'Amanda Santiago' },
        { name: 'Aleudo Coelho' },
        { name: 'Luana Campos Viana', role: 'Mediadora' },
      ],
    },
    {
      time: '16:30',
      title: 'O preço do excesso: O impacto das telas no neurodesenvolvimento',
      type: 'palestra',
      description: 'Palestra com Dr. Dennysson Teles',
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
    case 'almoco':
      return <FaCoffee className="text-white" />;
    case 'workshop':
      return <FaGraduationCap className="text-white" />;
    case 'abertura':
    case 'encerramento':
      return <FaFlagCheckered className="text-white" />;
    default:
      return null;
  }
};

const Timeline = ({ items }: { items: ScheduleItem[] }) => (
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

        <div
          className={`p-6 rounded-lg shadow-lg border transition-colors duration-300
            ${
              item.type === 'palestra'
                ? 'bg-orange-100 border-orange-400 hover:border-orange-500'
                : 'bg-gray-800/80 border-gray-700 hover:border-orange-500'
            }`}
        >
          <time className="block mb-2 text-sm font-normal text-orange-400">{item.time}</time>
          <h3
            className={`text-xl font-semibold ${
              item.type === 'palestra' ? 'text-orange-600' : 'text-white'
            }`}
          >
            {item.title}
          </h3>

          {item.description && (
            <p className="mt-2 text-base font-normal text-orange-600">{item.description}</p>
          )}

          {item.participants && item.participants.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-orange-600 mb-2">Participantes:</h4>
              <ul className="list-disc list-inside space-y-1 text-white">
                {item.participants.map((p, i) => (
                  <li key={i}>
                    {p.name} {p.role && <span className="text-gray-700">({p.role})</span>}
                  </li>
                ))}
              </ul>
            </div>
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

export default function Programacao() {
  const [activeTab, setActiveTab] = useState<'2025-10-24' | '2025-10-25'>('2025-10-24');

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 font-raleway" id="programacao">
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