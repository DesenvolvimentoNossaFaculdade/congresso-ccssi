import Image from "next/image";
import React from "react";

export default function Footer(){
    const currentYear = new Date().getFullYear();


    return(
        <footer className="bg-[#5F4235] text-gray-300 text-sm boder-t border-yellow-300 px-4 py-8 w-full"
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">Informações do Rodapé</h2>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
                <div className="flex-1 order-2 md:order-1">
                    <p className="text-sm">
                        &copy; {currentYear}
                    </p>
                </div>
                
                <div className="md:w-auto flex-shrink-0 order-1 md:order-2">
                    <Image
                        src="/images/sigla_CCSI.png"
                        alt="Logotipo do Congresso Caririense de Saúde Integrada, TEA, TOD e TDAH"
                        width={144}
                        height={50}
                        className="w-36 h-auto object-contain mx-auto md:mx-0"
                        loading="lazy"
                    />
                </div>
            </div>
        </footer>
    );
}