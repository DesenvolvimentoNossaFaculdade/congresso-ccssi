import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import localFont from "next/font/local";
import { FacebookPixel } from "@/components/FacebookPixel";
import "./globals.css";
//import { createTables } from "@/lib/db";

//! criação das tabelas:
//createTables();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ["latin"],
  display: 'swap',
});

const arsenica = localFont({
  src: "../fonts/ArsenicaTrial-Extrabold.ttf",
  variable: "--font-arsenica",
  display: "swap",
});

const demoVoguer = localFont({
  src: "../fonts/demo-voguer-caps.otf",
  variable: "--font-demovoguer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Congresso Caririense de Saúde Integrada",
  description: "Conhecer para incluir: práticas e reflexões sobre o neurodesenvolvimento no Cariri.",
  icons: {
    icon: "/images/ico/icone.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${arsenica.variable} ${demoVoguer.variable} antialiased`}
      >
         {/* Script do Pixel do Meta (Facebook Pixel) */}
        <FacebookPixel/>
        
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-black/10 z-10 mx-auto"></div>
          <div className="relative z-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
