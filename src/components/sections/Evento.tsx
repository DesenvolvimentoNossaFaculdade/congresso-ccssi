import Image from 'next/image';
import { Pin } from 'lucide-react';

export default function Evento(){

    return (
        <section
            id="aboutus"
            className="relative flex flex-col items-center justify-center px-4 py-12 md:py-20 min-h-screen text-center md:text-left overflow-hidden"
            aria-labelledby="aboutus-title"
        >
            

            {/* Content */}
            <div className="max-w-screen-xl w-full relative z-20">
                <h2 
                    id="aboutus-title"
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-400 mb-6  font-arsenica text-center md:text-left"
                >
                    O que esperar do CCSI {new Date().getFullYear()}?
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-white px-4 py-6 rounded-xl max-w-4xl leading-relaxed shadow-lg font-raleway bg-black/40 backdrop-blur-md mx-auto md:mx-0 text-justify text-balance">
                    O <strong className="text-orange-400">I Congresso Caririense de Saúde Integrada (CCSI)</strong> será um espaço de encontro entre ciência, prática profissional e identidade regional, reunindo estudantes, especialistas e profissionais das áreas da <strong className="text-orange-400">saúde, educação e assistência social.</strong>
                    <br /><br />
                    Com foco nos transtornos do neurodesenvolvimento — <strong className="text-orange-400">TDAH, TOD e TEA</strong> — o evento oferecerá palestras, rodas de conversa, oficinas práticas e mesas interdisciplinares que abordam desde os aspectos clínicos e pedagógicos até as políticas públicas e vivências familiares.
                    <br /><br />
                    <span className="inline-flex items-center gap-1">
                        <span className="sr-only">Localização:</span>
                        Realizado no coração do Cariri cearense
                    </span>
                    , o CCSI {new Date().getFullYear()} também valoriza o território, a cultura local e os desafios específicos da nossa região, promovendo uma formação que vai além do conteúdo técnico: <strong className="text-orange-400">integra conhecimento, empatia e compromisso social.</strong>
                    <br /><br />
                    Prepare-se para <strong className="text-orange-400">conectar saberes, ampliar visões e trocar experiências</strong> com quem está na linha de frente do cuidado e da inclusão.
                </p>
            </div>
        </section>
    );
}