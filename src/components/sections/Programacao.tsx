// src/components/sections/Programacao.tsx

'use client';

import { useState } from 'react';
import { FaMicrophone, FaCoffee, FaUsers, FaGraduationCap, FaFlagCheckered, FaUtensils } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --> Tipagem para os itens da programação
interface ScheduleItem {
    time: string;
    title: string;
    description?: string;
    type: 'palestra' | 'conversa' | 'intervalo' | 'abertura' | 'encerramento' | 'workshop' | 'almoco';
    workshops?: { title: string; description: string }[];
}

// --> Dados da programação extraídos do PDF
const scheduleData = {
    dayOne: [
        { time: '08h00', title: 'Credenciamento e Acolhimento', type: 'abertura' },
        { time: '08h30', title: 'Abertura Oficial e Fala Institucional', type: 'abertura' },
        { time: '09h00', title: 'Abertura Cultural do Evento', type: 'abertura' },
        { time: '09h30', title: 'Palestra de Abertura', description: 'Transtornos do Neurodesenvolvimento no Brasil: panorama atual, desafios do diagnóstico e estratégias de intervenção na perspectiva da saúde integrada.', type: 'palestra' },
        { time: '10h30', title: 'Intervalo', type: 'intervalo' },
        { time: '10h30', title: 'Roda de Conversa', description: 'Experiências clínicas multidisciplinares: A importância da intervenção precoce nos transtornos do neurodesenvolvimento.', type: 'conversa' },
        { time: '12h00', title: 'Pausa para Almoço', type: 'almoco' },
        { time: '14h00', title: 'Palestra', description: 'Abordagens integrativas do diagnóstico à intervenção: desmistificando TEA, TOD e TDAH.', type: 'palestra' },
        { time: '15h00', title: 'Intervalo', type: 'intervalo' },
        { time: '15h30', title: 'Roda de Conversa', description: 'Saúde mental e manejo de comorbidades de pessoas neurodivergentes: Intervenção ABA e novas abordagens.', type: 'conversa' },
        { time: '17h00', title: 'Encerramento do Primeiro Dia', type: 'encerramento' },
    ] as ScheduleItem[],
    dayTwo: [
        { time: '08h00', title: 'Acolhimento do Evento', type: 'abertura' },
        { time: '08h30', title: 'Palestra', description: 'Neurodiversidade e Cidadania: desafios na garantia de direitos das pessoas neurodivergentes no Brasil.', type: 'palestra' },
        { time: '10h00', title: 'Intervalo', type: 'intervalo' },
        { time: '10h30', title: 'Roda de Conversa', description: 'O processo de inclusão escolar entre a teoria e a prática: Vivências, desafios e superações.', type: 'conversa' },
        { time: '12h00', title: 'Encerramento das Atividades da Manhã', type: 'encerramento' },
        {
            time: '14h00',
            title: 'Imersão e Workshops',
            type: 'workshop',
            workshops: [
                { title: 'Workshop 01', description: 'Práticas Inclusivas no Cotidiano Escolar: estratégias para apoiar estudantes neurodivergentes.' },
                { title: 'Workshop 02', description: 'Diagnóstico e Intervenção Precoce: construindo redes de cuidado para TEA, TDAH e TOD.' },
                { title: 'Workshop 03', description: 'Comunicação e Regulação Emocional: ferramentas para o desenvolvimento de habilidades socioemocionais em pessoas neurodivergentes.' },
                { title: 'Workshop 04', description: 'Família e Rede de Apoio: fortalecendo vínculos e estratégias de cuidado na neurodiversidade.' },
                { title: 'Workshop 05', description: 'Direitos e Inclusão: conhecendo e aplicando a legislação em prol das pessoas neurodivergentes no Brasil.' },
            ]
        },
        { time: '17h30', title: 'Encerramento Oficial do Evento', type: 'encerramento' },
    ] as ScheduleItem[],
};

// --> Função auxiliar para retornar o ícone correto com base no tipo de evento
const getIcon = (type: ScheduleItem['type']) => {
    switch (type) {
        case 'palestra': return <FaMicrophone className="text-white" />;
        case 'conversa': return <FaUsers className="text-white" />;
        case 'intervalo': return <FaCoffee className="text-white" />;
        case 'almoco': return <FaUtensils className="text-white" />;
        case 'workshop': return <FaGraduationCap className="text-white" />;
        case 'abertura':
        case 'encerramento': return <FaFlagCheckered className="text-white" />;
        default: return null;
    }
};

// --> Componente da Linha do Tempo
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
                        <time className="block mb-2 text-sm font-normal leading-none text-orange-400">{item.time}</time>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        {item.description && <p className="mt-2 text-base font-normal text-gray-400">{item.description}</p>}
                        {item.workshops && (
                            <div className="mt-4 space-y-4">
                                {item.workshops.map((ws, wsIndex) => (
                                    <div key={wsIndex} className="p-4 bg-gray-700/50 rounded-md border-l-4 border-orange-600">
                                        <h4 className="font-bold text-orange-300">{ws.title}</h4>
                                        <p className="text-gray-300 text-sm">{ws.description}</p>
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

// --> Componente Principal da Seção de Programação
export default function Programacao() {
    const [activeTab, setActiveTab] = useState<'dayOne' | 'dayTwo'>('dayOne');

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 font-raleway">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-orange-500 sm:text-5xl drop-shadow-md">
                        Programação Completa
                    </h2>
                    <p className="mt-4 text-xl text-gray-300">
                        Confira a programação do 1º Congresso Caririense de Saúde Integrada.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="flex p-1 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700">
                        <button
                            onClick={() => setActiveTab('dayOne')}
                            className={`w-40 px-6 py-3 text-center font-semibold rounded-full transition-all duration-300 ${
                                activeTab === 'dayOne' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            Dia 23/10
                        </button>
                        <button
                            onClick={() => setActiveTab('dayTwo')}
                            className={`w-40 px-6 py-3 text-center font-semibold rounded-full transition-all duration-300 ${
                                activeTab === 'dayTwo' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            Dia 24/10
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
                            {activeTab === 'dayOne' ? (
                                <Timeline items={scheduleData.dayOne} />
                            ) : (
                                <Timeline items={scheduleData.dayTwo} />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

