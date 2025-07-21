'use client';

import React, {useState, useEffect} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';
import {Eye, Users, Clock} from 'lucide-react';

export default function AnalyticsPage(){
    const [pageViews, setPageViews] = useState<number | null>(null);
    const [uniqueVisitors, setUniqueVisitors] = useState<number | null>(null);
    const [lastUpdate, setLastUpdate] = useState<string | null>(null);
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            setLoadingData(true);
            setError(null);

            try{
                const response = await fetch('/api/analytics');
                const data = await response.json();

                if(response.ok){
                    setPageViews(data.uniqueVisitors);
                    setUniqueVisitors(data.uniqueVisitors);
                    setLastUpdate(new Date(data.lastUpdate).toLocaleDateString('pt-BR'));
                }else{
                    setError(data.error || "Falha ao carregar dados de analytics.");
                }
            }catch(err){
                console.error('erro ao buscar dados de analytics:', err);
                setError('Erro de rede ou servidor ao carregar dados.');
            }finally{
                setLoadingData(false);
            }
        };
        fetchAnalyticsData();
    }, []);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-accent-yellow">Analytics do Site</h1>
            <p className="text-gray-300">Visão geral dos acessos e visitantes.</p>

            {error && (
                <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-md">
                    <p>{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-primary-dark/80 text-white border-accent-yellow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white/70">Acessos à Página</CardTitle>
                        <Eye className="h-4 w-4 text-white/70" />
                    </CardHeader>
                    <CardContent>
                        {loadingData ? (
                            <div className="h-8 w-24 bg-gray-700 animate-pulse rounded"></div>
                        ) : (
                            <div className="text-2xl font-bold">{pageViews?.toLocaleString() || 'N/A'}</div>
                        )}
                        <p className="text-xs text-white/50 mt-1">Total de visualizações</p>
                    </CardContent>
                </Card>

                <Card className="bg-primary-dark/80 text-white border-accent-yellow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white/70">Visitantes Únicos</CardTitle>
                        <Users className="h-4 w-4 text-white/70" />
                    </CardHeader>
                    <CardContent>
                        {loadingData ? (
                            <div className="h-8 w-20 bg-gray-700 animate-pulse rounded"></div>
                        ) : (
                            <div className="text-2xl font-bold">{uniqueVisitors?.toLocaleString() || 'N/A'}</div>
                        )}
                            <p className="text-xs text-white/50 mt-1">Usuários distintos</p>
                    </CardContent>
                    </Card>

                    <Card className="bg-primary-dark/80 text-white border-accent-yellow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white/70">Última Atualização</CardTitle>
                        <Clock className="h-4 w-4 text-white/70" />
                    </CardHeader>
                    <CardContent>
                        {loadingData ? (
                            <div className="h-8 w-32 bg-gray-700 animate-pulse rounded"></div>
                        ) : (
                            <div className="text-lg font-bold">{lastUpdate || 'N/A'}</div>
                        )}
                            <p className="text-xs text-white/50 mt-1">Dados do servidor</p>
                    </CardContent>
                    </Card>
            </div>
        </div>
    );

}