'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { PlusCircle, Edit, Trash2, Tag, DollarSign, List } from 'lucide-react';

interface Ingresso {
    id: string;
    title: string;
    price: number;
    installments?: string;
    benefits?: string[];
    logo_src?: string;
}

export default function IngressosPage() {
    const [ingressos, setIngressos] = useState<Ingresso[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchIngressos = async () => {
        setLoading(true);
        setError(null);
    try {
        const response = await fetch('/api/ingressos');
        const data = await response.json();
        if (response.ok) {
            setIngressos(data);
        } else {
            setError(data.error || 'Falha ao carregar ingressos.');
        }
    } catch (err) {
        console.error('Erro ao buscar ingressos:', err);
        setError('Erro de rede ou servidor ao carregar ingressos.');
    } finally {
        setLoading(false);
    }
    };

    useEffect(() => {
        fetchIngressos();
    }, []);

    
    const handleAddIngresso = () => {
        alert('Funcionalidade de Adicionar Ingresso (futuramente um formulário)');
    };

    const handleEditIngresso = (id: string) => {
        alert(`Funcionalidade de Editar Ingresso ID: ${id} (futuramente um formulário)`);
    };

    const handleDeleteIngresso = async (id: string) => {
    if (confirm(`Tem certeza que deseja deletar o ingresso com ID ${id}?`)) {
        try {
        const response = await fetch('/api/ingressos', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });
        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            fetchIngressos();
        } else {
            alert(data.error || 'Falha ao deletar ingresso.');
        }
        } catch (err) {
        console.error('Erro ao deletar ingresso:', err);
        alert('Erro de rede ou servidor ao deletar ingresso.');
        }
    }
    };

    return (
    <div className="space-y-8">
        <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-accent-yellow">Gerenciar Ingressos</h1>
        <Button onClick={handleAddIngresso} className="bg-brand-orange hover:bg-brand-orange/90">
            <PlusCircle className="w-4 h-4 mr-2" /> Adicionar Ingresso
        </Button>
        </div>
        <p className="text-gray-300">Visualize, adicione, edite e remova os tipos de ingressos disponíveis.</p>

        {error && (
        <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-md">
            <p>{error}</p>
        </div>
        )}

        {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="bg-primary-dark/80 text-white border-accent-yellow animate-pulse">
                <CardHeader><div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div></CardHeader>
                <CardContent><div className="h-4 bg-gray-700 rounded w-1/2"></div></CardContent>
            </Card>
            ))}
        </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingressos.length === 0 ? (
            <p className="text-gray-400 col-span-full text-center">Nenhum ingresso encontrado. Adicione um!</p>
            ) : (
            ingressos.map((ingresso) => (
                <Card key={ingresso.id} className="bg-primary-dark/80 text-white border-accent-yellow">
                <CardHeader>
                    <CardTitle className="text-xl text-accent-yellow flex items-center gap-2">
                        <Tag className="w-5 h-5" /> {ingresso.title}
                    </CardTitle>
                    <CardDescription className="text-white/70 flex items-center gap-1">
                    <DollarSign className="w-4 h-4" /> {ingresso.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        {ingresso.installments && ` em ${ingresso.installments}`}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {ingresso.logo_src && (
                        <img src={ingresso.logo_src} alt={`Logo ${ingresso.title}`} className="w-24 h-auto object-contain mb-4" />
                    )}
                    {ingresso.benefits && ingresso.benefits.length > 0 && (
                    <div className="mt-2 text-sm text-gray-300">
                        <h4 className="font-semibold mb-1 flex items-center gap-1"><List className="w-4 h-4" /> Benefícios:</h4>
                        <ul className="list-disc list-inside space-y-1">
                        {ingresso.benefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                        ))}
                        </ul>
                    </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditIngresso(ingresso.id)} className="border-accent-yellow text-accent-yellow hover:bg-accent-yellow/20">
                        <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteIngresso(ingresso.id)} className="bg-red-600 hover:bg-red-700">
                        <Trash2 className="w-4 h-4" />
                    </Button>
                </CardFooter>
                </Card>
            ))
            )}
        </div>
        )}
    </div>
    );
}
