import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { whatsAppUrl } from '@/utils';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        description: string;
        image: string;
    } | null;
}

export const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden overflow-y-auto flex items-center"
                    >
                        <div className="bg-brand-light rounded-2xl flex flex-col shadow-2xl">
                            <div className="relative h-48 shrink-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full rounded-t-2xl object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                                >
                                    <X size={24} className="text-brand-dark" />
                                </button>
                                <h3 className="absolute bottom-4 left-6 text-2xl md:text-3xl font-serif text-white">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="flex-1 p-6 md:p-8">
                                <p className="font-body text-brand-brown text-base md:text-lg whitespace-pre-line mb-6">
                                    {service.description}
                                </p>
                                <a
                                    href={whatsAppUrl(`Quero saber mais sobre ${service.title}`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-brand-terracotta text-white font-body py-3 px-6 rounded-xl hover:bg-brand-dark transition-colors"
                                >
                                    Quer saber mais?
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};