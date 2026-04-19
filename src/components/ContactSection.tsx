import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const phone_number = '22992392537'
const message = encodeURI('Oi Bia. Queria saber mais sobre o ensaio')

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
                            <a href={`https://wa.me/+55${phone_number}?text=${message}`} target='_blank' className="flex-1 flex flex-col items-center text-center">
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

                        {/* <div className="flex-1 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-brand-terracotta/20 text-brand-terracotta rounded-full flex items-center justify-center shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif text-xl mb-1">E-mail</h4>
                                <a href="mailto:contato@estudiocasadevo.com.br" className="text-brand-sand hover:text-white transition-colors">contato@estudiocasadevo.com.br</a>
                            </div>
                        </div> */}
                    </div>
                </motion.div>

                {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl text-brand-dark"
                    >
                        <h3 className="font-serif text-2xl mb-6 text-brand-dark">Envie uma mensagem</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-brand-brown mb-2" htmlFor="name">Nome completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-brand-light border border-brand-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-terracotta focus:border-transparent transition-all"
                                    placeholder="Como gostaria de ser chamado(a)?"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-brand-brown mb-2" htmlFor="phone">Telefone / WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 bg-brand-light border border-brand-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-terracotta focus:border-transparent transition-all"
                                        placeholder="(22) 90000-0000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-brown mb-2" htmlFor="interest">Tipo de Ensaio</label>
                                    <select
                                        id="interest"
                                        className="w-full px-4 py-3 bg-brand-light border border-brand-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-terracotta focus:border-transparent transition-all"
                                    >
                                        <option value="">Selecione...</option>
                                        <option value="gestante">Gestante</option>
                                        <option value="newborn">Newborn</option>
                                        <option value="acompanhamento">Acompanhamento do Bebê</option>
                                        <option value="evento">Evento Infantil</option>
                                        <option value="outro">Outro</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-brown mb-2" htmlFor="message">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-brand-light border border-brand-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-terracotta focus:border-transparent transition-all resize-none"
                                    placeholder="Conte-nos um pouco sobre o que você deseja..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-brand-terracotta text-white rounded-xl font-medium hover:bg-[#c07a6c] transition-colors shadow-md flex justify-center items-center gap-2"
                            >
                                Solicitar Orçamento
                            </button>
                        </form>
                    </motion.div> */}
                {/* </div> */}
            </div >
        </section >
    );
};