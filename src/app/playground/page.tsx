'use client'; // Este componente é um Client Component para permitir interatividade

import React from 'react';
import Link from 'next/link'; // Para navegação de volta à home ou admin


import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/label';
// import { Checkbox } from '@/components/ui/checkbox';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
// import { Switch } from '@/components/ui/switch';


export default function ComponentPlaygroundPage() {
    return (
        <div className="min-h-screen bg-gray-950 text-white p-8 sm:p-12 flex flex-col items-center">
            <div className="w-full max-w-4xl flex justify-end mb-8">
                <Link href="/" className="px-4 py-2 bg-brand-orange text-white rounded-md hover:bg-brand-orange/90 transition-colors">
                    Voltar para Home
                </Link>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-accent-yellow mb-10 text-center font-arsenica drop-shadow-lg font-raleway">
                Playground de Componentes
            </h1>

            <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl font-raleway">
                Página destinada à testes de estilização de components
            </p>

            
            <div className="w-full max-w-4xl bg-primary-dark/70 border border-accent-yellow/50 rounded-lg p-6 sm:p-8 shadow-2xl space-y-8 font-raleway">
                <h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/20 pb-4">
                    Textes e Estilização de components
                </h2>

                {/* ==================================================================== */}
                {/*  CONSTRUÇÃO DE COMPONENTES A PARTIR DAQUI */}
                {/* ==================================================================== */}

                
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium text-white">Botões</h3>
                    <div className="flex flex-wrap gap-4">
                    <Button>Botão Padrão</Button>
                    <Button variant="outline">Botão Outline</Button>
                    <Button variant="secondary">Botão Secundário</Button>
                    <Button variant="destructive">Botão Destrutivo</Button>
                    <Button variant="ghost">Botão Ghost</Button>
                    <Button variant="link">Botão Link</Button>
                </div>
                </div>


                
                
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium text-white">Inputs</h3>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="seuemail@exemplo.com" className="max-w-md" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" id="password" placeholder="********" className="max-w-md" />
                    </div>
                </div>

            </div>
        </div>
    );
}
