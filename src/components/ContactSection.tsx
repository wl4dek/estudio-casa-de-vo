import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsAppUrl } from '@/utils';

export const ContactSection = () => {
    return (
        <section id="contato" className="py-24 bg-brand-dark text-white relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-10 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* <div className="grid grid-cols-1 lg:grid-cols-1 gap-16"> */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Vamos conversar?</h2>
                    <p className="text-brand-sand mb-12 font-body text-lg leading-relaxed">
                        Estamos ansiosos para conhecer a sua história. Entre em contato para agendar o seu ensaio ou tirar dúvidas sobre nossos pacotes.
                    </p>

                    <div className="flex content-between">
                        <div className="flex-1 flex flex-col items-center text-center">
                            <a href={whatsAppUrl()} target='_blank' className="flex-1 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-brand-terracotta/20 text-brand-terracotta rounded-full flex items-center justify-center shrink-0">
                                    <FaWhatsapp size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl mb-1">WhatsApp</h4>
                                    <p className="text-brand-sand hover:text-white transition-colors cursor-pointer">(22) 99239-2537</p>
                                    <span className="text-sm text-brand-sand/60 block mt-1">Seg a Sex: 09h às 18h</span>
                                </div>
                            </a>
                        </div>

                        <div className="flex-1 flex flex-col items-center text-center">
                            <a href="https://maps.app.goo.gl/HGT6T3yGZwrLLVw38" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-brand-terracotta/20 text-brand-terracotta rounded-full flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl mb-1">Localização</h4>
                                    <p className="text-brand-sand">Macaé, RJ</p>
                                    <span className="text-sm text-brand-sand/60 block mt-1">Atendimento apenas com hora marcada</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};