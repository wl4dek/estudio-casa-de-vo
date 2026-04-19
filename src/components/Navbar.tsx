import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-light/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            {isScrolled ? (<div
                className="absolute inset-0 bg-[url('/images/gradiente.jpg')] bg-cover opacity-25"
                aria-hidden="true"
            ></div>) : ''}
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-brand-sand shadow-sm bg-white flex items-center justify-center">
                        <img src="/images/logo.png" alt="Estúdio Casa de Vó" className="w-10 h-10 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <span className={`font-serif text-xl md:text-2xl font-semibold tracking-wide ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white'}`}>
                        Casa de Vó
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center gap-8 font-body font-medium ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white/90'}`}>
                    <a href="#inicio" className="hover:text-brand-terracotta transition-colors">Início</a>
                    <a href="#portfolio" className="hover:text-brand-terracotta transition-colors">Portfólio</a>
                    <a href="#sobre" className="hover:text-brand-terracotta transition-colors">Sobre Nós</a>
                    <a href="#contato" className="hover:text-brand-terracotta transition-colors">Contato</a>
                    <a
                        href="https://www.instagram.com/estudiocasadevo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-current hover:bg-brand-terracotta hover:text-white hover:border-brand-terracotta transition-all"
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden p-2 ${isScrolled ? 'text-brand-dark' : 'text-brand-dark'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-light border-t border-brand-sand overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4 text-brand-dark font-medium text-lg">
                            <a href="#inicio" className="py-2 border-b border-brand-sand/30">Início</a>
                            <a href="#portfolio" className="py-2 border-b border-brand-sand/30">Portfólio</a>
                            <a href="#sobre" className="py-2 border-b border-brand-sand/30">Sobre Nós</a>
                            <a href="#contato" className="py-2 border-b border-brand-sand/30">Contato</a>
                            <a
                                href="https://www.instagram.com/estudiocasadevo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 py-2 text-brand-terracotta"
                            >
                                <FaInstagram size={24} /> <span>Siga no Instagram</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};