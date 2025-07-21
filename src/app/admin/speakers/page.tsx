    // src/app/admin/speakers/page.tsx
    'use client';

    import React, { useState, useEffect } from 'react';
    import { Button } from '@/components/ui/Button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
    import { PlusCircle, Edit, Trash2 } from 'lucide-react';

    
    interface Speaker {
        id: number;
        name: string;
        role?: string;
        company?: string;
        image_url?: string;
        description?: string;
    }

    export default function SpeakersPage() {
        const [speakers, setSpeakers] = useState<Speaker[]>([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);

        const fetchSpeakers = async () => {
            setLoading(true);
            setError(null);
            try {
            const response = await fetch('/api/speakers');
            const data = await response.json();
            if (response.ok) {
                setSpeakers(data);
            } else {
                setError(data.error || 'Falha ao carregar palestrantes.');
            }
        } catch (err) {
            console.error('Erro ao buscar palestrantes:', err);
            setError('Erro de rede ou servidor ao carregar palestrantes.');
        } finally {
            setLoading(false);
        }
      };

      useEffect(() => {
        fetchSpeakers();
      }, []);

        const handleAddSpeaker = () => {
            alert('Funcionalidade de Adicionar Palestrante (futuramente um formulário)');
        };

        const handleEditSpeaker = (id: number) => {
            alert(`Funcionalidade de Editar Palestrante ID: ${id} (futuramente um formulário)`);

        };

        const handleDeleteSpeaker = async (id: number) => {
            if (confirm(`Tem certeza que deseja deletar o palestrante com ID ${id}?`)) {
                try {
                    const response = await fetch('/api/speakers', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id }),
                    });
                    const data = await response.json();
                    if (response.ok) {
                    alert(data.message);
                    fetchSpeakers();
                    } else {
                    alert(data.error || 'Falha ao deletar palestrante.');
                    }
                } catch (err) {
                    console.error('Erro ao deletar palestrante:', err);
                    alert('Erro de rede ou servidor ao deletar palestrante.');
                }
            }
        };

        return (
            <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-accent-yellow">Gerenciar Palestrantes</h1>
                <Button onClick={handleAddSpeaker} className="bg-brand-orange hover:bg-brand-orange/90">
                <PlusCircle className="w-4 h-4 mr-2" /> Adicionar Palestrante
                </Button>
            </div>
            <p className="text-gray-300">Visualize, adicione, edite e remova palestrantes do seu evento.</p>

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
                {speakers.length === 0 ? (
                    <p className="text-gray-400 col-span-full text-center">Nenhum palestrante encontrado. Adicione um!</p>
                ) : (
                    speakers.map((speaker) => (
                    <Card key={speaker.id} className="bg-primary-dark/80 text-white border-accent-yellow">
                        <CardHeader>
                        <CardTitle className="text-xl text-accent-yellow">{speaker.name}</CardTitle>
                        <CardDescription className="text-white/70">{speaker.role} {speaker.company && `(${speaker.company})`}</CardDescription>
                        </CardHeader>
                        <CardContent>
                        {speaker.image_url && (
                            <img src={speaker.image_url} alt={speaker.name} className="w-full h-32 object-cover rounded-md mb-4" />
                        )}
                        <p className="text-sm text-gray-300 line-clamp-3" dangerouslySetInnerHTML={{ __html: speaker.description || 'Sem descrição.' }}></p>
                        </CardContent>
                        <Button variant="outline" size="sm" onClick={() => handleEditSpeaker(speaker.id)} className="border-accent-yellow text-accent-yellow hover:bg-accent-yellow/20">
                            <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteSpeaker(speaker.id)} className="bg-red-600 hover:bg-red-700">
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </Card>
                    ))
                )}
                </div>
            )}
            </div>
        );
    }
    