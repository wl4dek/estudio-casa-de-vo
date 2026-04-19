import { motion } from 'framer-motion';
import { fadeIn, handlerOnClickService, annimateDescription } from '@/hooks';
import { services } from '@/data'
import { useState } from "react";


export const PortfolioSection = () => {
    const [active, setActive] = useState<string>('');

    return (
        <section id="portfolio" className="py-24 bg-brand-light relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Nossos Serviços</h2>
                    <div className="w-24 h-1 bg-brand-terracotta mx-auto mb-6 opacity-60"></div>
                    <p className="text-brand-brown font-body text-lg max-w-2xl mx-auto">
                        Cada ensaio é preparado com o máximo de cuidado para garantir fotos que irão emocionar a sua família por gerações.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: service.delay }}
                            className="group cursor-pointer"
                            id={`${index}`}
                            onClick={() => handlerOnClickService(service.title, active, setActive)}
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-md">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                                        <h3 className="font-serif text-2xl text-brand-dark mb-1">{service.title}</h3>
                                        <motion.p
                                            id={`description-${service.title.toLowerCase()}`}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={annimateDescription(service.title, active)}
                                            transition={{ duration: 0.4 }}
                                            className="overflow-hidden font-body text-sm text-brand-brown whitespace-pre-line">
                                            {service.description}
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};