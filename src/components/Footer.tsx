import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-brand-dark border-t border-brand-sand/10 py-10 text-center">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="w-26 h-26 rounded-full overflow-hidden border border-brand-sand/30 bg-white p-3">
                        <img src="/images/logo.png" alt="Estúdio Casa de Vó" className="w-full h-full" />
                    </div>
                    <p className="text-brand-sand/60 font-body text-sm max-w-md">
                        Estúdio fotográfico especializado em ensaios de gestante, acompanhamentos e cobertura de eventos infantis em Macaé.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/estudiocasadevo/" target="_blank" rel="noopener noreferrer" className="text-brand-sand hover:text-white transition-colors">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-brand-sand/10 text-brand-sand/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Estúdio Casa de Vó. Todos os direitos reservados.</p>
                    <p>Criado com amor para a sua família.</p>
                </div>
            </div>
        </footer>
    );
};