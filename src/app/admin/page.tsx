'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Users, Eye, Info, Clock } from 'lucide-react';

export default function AdminPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

  // Estados para dados reais do painel (serão buscados das APIs)
    const [pageViews, setPageViews] = useState<number | null>(null);
    const [uniqueVisitors, setUniqueVisitors] = useState<number | null>(null);
    const [lastUpdate, setLastUpdate] = useState<string | null>(null);
    const [loadingData, setLoadingData] = useState(false);

  //! SEM BACKEND SEGURO!
    const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // ! Credenciais
    const SECRET_USERNAME = 'admin';
    const SECRET_PASSWORD = 'password123';

        if (username === SECRET_USERNAME && password === SECRET_PASSWORD) {
            setIsLoggedIn(true);
        //! armazenar token de sessao aqui quando em produção.
        } else {
            setError('Credenciais inválidas. Tente novamente.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        
    };

  //! Buscando dados reais.
    useEffect(() => {
        if (isLoggedIn) {
        const fetchDashboardData = async () => {
            setLoadingData(true);
            try {
                //! Buscando dados de analytics
                const analyticsResponse = await fetch('/api/analytics');
                const analyticsData = await analyticsResponse.json();

                if (analyticsResponse.ok) {
                    setPageViews(analyticsData.totalViews);
                    setUniqueVisitors(analyticsData.uniqueVisitors);
                    setLastUpdate(new Date(analyticsData.lastUpdate).toLocaleString('pt-BR'));
                } else {
                    setError(analyticsData.error || 'Falha ao carregar dados de analytics.');
                }
            } catch (err) {
                console.error('Erro ao buscar dados do dashboard:', err);
                setError('Erro de rede ou servidor ao carregar dados do dashboard.');
            } finally {
                setLoadingData(false);
            }
        };
        fetchDashboardData();
    }
  }, [isLoggedIn]); //! A DEPENDER DO ESTADO DO LOGIN.

    if (!isLoggedIn) {
        return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <Card className="w-full max-w-sm bg-primary-dark/80 text-white border-accent-yellow">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center text-brand-orange">Acesso ao Painel Admin</CardTitle>
                <CardDescription className="text-center text-white/70">
                    Insira suas credenciais para continuar.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {error && (
                <Alert variant="destructive" className="bg-red-900/50 border-red-700 text-red-300">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Erro no Login</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
                )}
                <div className="grid gap-2">
                <Label htmlFor="username">Usuário</Label>
                <Input
                    id="username"
                    type="text"
                    placeholder="admin"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-white/10 text-white border-accent-yellow/50 focus:border-brand-orange"
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/10 text-white border-accent-yellow/50 focus:border-brand-orange"
                />
                </div>
            </CardContent>
            <CardFooter>
                <Button type="submit" onClick={handleLogin} className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                Entrar
                </Button>
            </CardFooter>
            </Card>
        </div>
        );
    }

  // Conteúdo do Painel Admin (após login)
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8 sm:p-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-orange text-center sm:text-left">Bem-vindo ao Painel Admin!</h1>
            <Button onClick={handleLogout} variant="destructive" className="bg-red-600 hover:bg-red-700">Sair</Button>
        </div>

        {/* Seção de Visão Geral do Dashboard */}
        <h2 className="text-2xl font-semibold text-accent-yellow mb-6 border-b border-accent-yellow/50 pb-2">Visão Geral</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card: Quantidade de Acessos à Página */}
            <Card className="bg-primary-dark/80 text-white border-accent-yellow font-raleway">
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
                    <p className="text-xs text-white/50 mt-1 ">Total de visualizações</p>
            </CardContent>
            </Card>

            {/* Card: Visitantes Únicos */}
            <Card className="bg-primary-dark/80 text-white border-accent-yellow font-raleway">
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

            {/* Card: Última Atualização dos Dados */}
            <Card className="bg-primary-dark/80 text-white border-accent-yellow font-raleway">
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
                <p className="text-xs text-white/50 mt-1">Dados reais do servidor</p>
            </CardContent>
            </Card>
        </div>

        {/* Seção de Funcionalidades do Painel */}
        <h2 className="text-2xl font-semibold text-accent-yellow mb-6 border-b border-accent-yellow/50 pb-2">Gerenciamento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card: Gerenciar Palestrantes */}
            <Card className="bg-primary-dark/80 text-white border-accent-yellow font-raleway">
            <CardHeader>
                <CardTitle className="text-xl text-accent-yellow">Gerenciar Palestrantes</CardTitle>
                <CardDescription className="text-white/70">Adicione, edite ou remova informações de palestrantes.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Última atualização: 15/07/2025</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">Acessar</Button>
            </CardFooter>
            </Card>

            {/* Card: Gerenciar Ingressos */}
            <Card className="bg-primary-dark/80 text-white border-accent-yellow font-raleway">
            <CardHeader>
                <CardTitle className="text-xl text-accent-yellow">Gerenciar Ingressos</CardTitle>
                <CardDescription className="text-white/70">Visualize e edite os tipos de ingressos disponíveis.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Lote 0: 50% vendidos</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">Acessar</Button>
            </CardFooter>
            </Card>

            {/* Placeholder para outras informações */}
            <Card className="bg-primary-dark/80 text-white border-accent-yellow font-raleway">
            <CardHeader>
                <CardTitle className="text-xl text-accent-yellow">Outras Informações</CardTitle>
                <CardDescription className="text-white/70">Espaço para futuras funcionalidades e dados.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Aqui você pode adicionar gráficos, relatórios ou outras ferramentas.</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">Configurar</Button>
            </CardFooter>
            </Card>
        </div>
    </div>
    );
}
