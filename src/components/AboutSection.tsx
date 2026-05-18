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
                                    src="images/bia-rosa.jpeg"
                                    alt="Fotografia em Estúdio"
                                    className="w-full h-full object-cover filter sepia-[0.1]"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white rounded-2xl p-4 shadow-xl hidden md:block">
                                <img src="images/studio.jpeg" alt="Detalhe Newborn" className="w-full h-full object-cover rounded-xl" />
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
                                O <strong className="text-brand-dark">Estúdio Casa de Vó</strong> nasceu de um sonho:
                                criar um espaço onde a fotografia de excelência se une ao acolhimento. Um ambiente seguro, sofisticado e cheio de afeto, projetado para que cada cliente se sinta verdadeiramente acolhido e confortável.
                            </p>
                            <p>
                                Localizado em Macaé, RJ, e idealizado pelas irmãs Beatriz e Rosa Maria Leandro, nosso estúdio foi cuidadosamente estruturado para receber desde a espontaneidade do público infantil até a força e autoridade de ensaios corporativos. Nossa infraestrutura moderna conta com espaços totalmente acessíveis, climatização ideal e um acervo exclusivo para garantir produções impecáveis.
                            </p>
                            <p>
                                Acreditamos que a fotografia vai muito além do clique. É sobre contar a história da sua família ou da sua carreira com sensibilidade, capturando a essência, os olhares sinceros e os detalhes fundamentais para representar você através de imagens de altíssima qualidade.
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