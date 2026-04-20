import { motion } from 'framer-motion';

export const AboutSection = () => {
    return (
        <section id="sobre" className="py-24 bg-brand-sand relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="images/service-maternity.jpg"
                                    alt="Fotografia em Estúdio"
                                    className="w-full h-full object-cover filter sepia-[0.1]"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white rounded-2xl p-4 shadow-xl hidden md:block">
                                <img src="images/service-newborn.jpg" alt="Detalhe Newborn" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Nossa História</h2>
                        <div className="w-16 h-1 bg-brand-terracotta mb-8 opacity-80"></div>

                        <div className="space-y-6 text-brand-dark/80 font-body text-lg leading-relaxed">
                            <p>
                                O <strong className="text-brand-dark">Estúdio Casa de Vó</strong> nasceu de um sonho: criar um espaço onde as famílias pudessem se sentir literalmente <span className="italic">na casa de vó</span>. Um ambiente aconchegante, seguro, cheio de carinho e afeto.
                            </p>
                            <p>
                                Localizado em Macaé, Rio de Janeiro, nosso estúdio foi todo pensado e preparado para receber desde bebês recém-nascidos até as gestantes mais radiantes. Nossa estrutura conta com climatização ideal para o bebê, higienização rigorosa e todos os acessórios para ensaios belíssimos.
                            </p>
                            <p>
                                Acreditamos que a fotografia vai além do clique. É sobre contar a história da sua família com sensibilidade, capturando os sorrisos espontâneos, os olhares de amor e os detalhes que passam tão rápido.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="font-serif text-4xl text-brand-terracotta">10+</span>
                                <span className="text-sm font-medium uppercase tracking-wider text-brand-brown mt-1">Anos de Experiência</span>
                            </div>
                            <div className="w-px h-12 bg-brand-dark/20"></div>
                            <div className="flex flex-col">
                                <span className="font-serif text-4xl text-brand-terracotta">2k+</span>
                                <span className="text-sm font-medium uppercase tracking-wider text-brand-brown mt-1">Famílias Fotografadas</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};