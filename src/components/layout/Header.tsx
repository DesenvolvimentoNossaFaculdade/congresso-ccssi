'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X} from 'lucide-react';

const navItems = [
    {name: 'Home', href: '/#banner', isAnchor: true},
    {name: 'Sobre', href: '/#aboutus', isAnchor: true},
    {name: 'Palestrantes', href: '/#speakers', isAnchor: true},
    {name: 'FAQ', href: '/#faq', isAnchor: true},
    {name: 'Passaportes', href: '/#kit', isAnchor: true, isPrimary: true},
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();    

    
    const handleAnchor = (href: string) => {
        setMenuOpen(false);
        const [path, hash] = href.split('#');

        
        if (pathname === path && hash) {
        const el = document.getElementById(hash);
        if (el) {
            
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        } else {
        
        router.push(href);
        }
    };

    
    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    const isGlass = scrolled || pathname !== '/';

    return (
            <header
            className={`
                ${pathname === '/' ? 'fixed top-0 left-0' : ''}
                w-full z-50 px-4 py-2 transition-all duration-300
                ${isGlass ? 'bg-[#5F4235]/70 backdrop-blur-md border-b border-[#FCCD9A]/60 shadow-lg' : 'bg-transparent'} font-raleway
            `}
            >
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* LOGO */}
                <Link href="/" className="flex-shrink-0 p-2" aria-label="Voltar para a página inicial do congresso">
                {isGlass && (
                    <Image
                    src="/images/LogoSimbolo.png" 
                    alt="Logo do CCSI 2025"
                    width={70} 
                    height={70}
                    className=" w-auto" 
                    priority 
                    />
                )}
                
                {!isGlass && (
                    <Image
                    src="/images/simbolo.png" 
                    alt="Logo do CCSI 2025"
                    width={70}
                    height={70}
                    className=" w-auto"
                    priority
                    />
                )}
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-2" aria-label="Navegação principal do site">
                {navItems.map((item) => (
                    item.isAnchor ? (
                    <button
                        key={item.name}
                        onClick={() => handleAnchor(item.href)}
                        className={`text-sm font-semibold text-black px-3 py-2 rounded transition duration-200 ease-in-out
                        ${item.isPrimary ? 'bg-orange-600 hover:bg-orange-700 shadow-md' : 'hover:bg-orange-800'}
                        `}
                        aria-label={`Navegar para a seção ${item.name}`}
                    >
                        {item.name.toUpperCase()}
                    </button>
                    ) : (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`text-sm font-semibold text-white px-3 py-2 rounded transition duration-200 ease-in-out
                        ${item.isPrimary ? 'bg-orange-600 hover:bg-orange-700 shadow-md' : 'hover:bg-orange-800'}
                        `}
                        onClick={() => setMenuOpen(false)}
                        aria-label={`Navegar para a página ${item.name}`}
                    >
                        {item.name.toUpperCase()}
                    </Link>
                    )
                ))}
                </nav>

                {/* MOBILE MENU ICON */}
                <button
                className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                >
                {menuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
                </button>
            </div>

            {/* MOBILE NAV */}
                {menuOpen && (
                    <nav
                    id="mobile-menu"
                    className="md:hidden mt-2 px-4 py-3 flex flex-col gap-2 bg-[#5F4235]/90 backdrop-blur-sm rounded-lg shadow-xl animate-fade-in-down" // Estilos e animação
                    aria-label="Menu de navegação mobile"
                    >
                    {navItems.map((item) => (
                        item.isAnchor ? (
                        <button
                            key={item.name}
                            onClick={() => handleAnchor(item.href)}
                            className={`text-sm font-semibold text-white px-3 py-2 rounded transition duration-200 ease-in-out text-left
                            ${item.isPrimary ? 'bg-orange-600 hover:bg-orange-700 shadow-md' : 'hover:bg-orange-800'}
                            `}
                            aria-label={`Navegar para a seção ${item.name} (mobile)`}
                        >
                            {item.name}
                        </button>
                        ) : (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-semibold text-white px-3 py-2 rounded transition duration-200 ease-in-out text-left
                            ${item.isPrimary ? 'bg-orange-600 hover:bg-orange-700 shadow-md' : 'hover:bg-orange-800'}
                            `}
                            onClick={() => setMenuOpen(false)}
                            aria-label={`Navegar para a página ${item.name} (mobile)`}
                        >
                            {item.name}
                        </Link>
                        )
                    ))}
                    </nav>
                )}
            </header>
        );
}