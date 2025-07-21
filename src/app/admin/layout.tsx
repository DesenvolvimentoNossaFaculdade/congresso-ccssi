import React from 'react';
import Link from 'next/link';
import { Home, Users, Ticket, BarChart, LogOut, Settings} from 'lucide-react';

interface AdminLayoutProps{
    children: React.ReactNode;
}

export default function AdminLayout({children}: AdminLayoutProps){
    //! criação da logica de autenticação.

    return (
        <div className="flex min-h-screen bg-gray-950 text-white font-raleway">
            {/* SIDEBAR DE NAVEGAÇÃO.*/}
            <aside className="w-64 bg-primary-dark border-r border-accent-yellow/30 p-6 felx flex-col shadow-lg">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-orange">Admin Panel</h2>
                </div>
                <nav className="flex-1 space-y-2">
                    <NavLink href="/admin" icon={<Home className="w-5 h-5"/>}>Dashboard</NavLink>
                    <NavLink href="/admin/speakers" icon={<Home className="w-5 h-5"/>}>Palestrantes</NavLink>
                    <NavLink href="/admin/ingressos" icon={<Home className="w-5 h-5"/>}>Ingressos</NavLink>
                    <NavLink href="/admin/analytics" icon={<Home className="w-5 h-5"/>}>Analytics</NavLink>
                </nav>

                <div className="mt-auto pt-6 border-t border-accent-yellow/20">
                    <NavLink href="#" icon={<Settings className="w-5 h-5" />}>Configurações</NavLink>
                </div>
            </aside>

            <main className="flex-1 p-8 sm:p-12 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

//! Component Auxiliar
interface NavLinkProps {
    href: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

function NavLink({ href, icon, children}: NavLinkProps){
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-4 py-2 rounded-md text-white/80 hover:bg-accent-yellow/20 hover:text-white transition-colors duration-200"
        >
            {icon}
            <span className="font-medium">{children}</span>
        </Link>
    );
}