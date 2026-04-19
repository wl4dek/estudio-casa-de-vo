import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { fadeIn } from '@/hooks';

export const TestimonialInstagram = () => {
    return (
        <section className="py-24 bg-brand-light">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <Camera className="w-10 h-10 text-brand-terracotta mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">Acompanhe nosso dia a dia</h2>
                    <p className="text-brand-brown font-body text-lg max-w-2xl mx-auto mb-8">
                        Siga <a href="https://www.instagram.com/estudiocasadevo/" target="_blank" rel="noopener noreferrer" className="text-brand-terracotta font-semibold hover:underline">@estudiocasadevo</a> e confira nossos ensaios mais recentes.
                    </p>
                    <a
                        href="https://www.instagram.com/estudiocasadevo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-full font-medium hover:bg-brand-brown transition-colors"
                    >
                        <FaInstagram size={20} />
                        Seguir no Instagram
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
