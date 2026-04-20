
import { motion } from 'framer-motion';
import { fadeIn } from "@/hooks";

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export const Hero = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="images/hero.jpg"
                    alt="Bebê recém-nascido dormindo em ensaio newborn"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-brand-dark/30 md:bg-brand-dark/20 mix-blend-multiply"></div>
                {/* Soft gradient to blend with the rest of the page */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-black/30"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left w-full mt-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-2xl"
                >
                    <motion.p variants={fadeIn} className="text-white/90 font-accent italic text-xl mb-4 drop-shadow-md">
                        O conforto de casa, a magia da fotografia
                    </motion.p>
                    <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-lg">
                        Eternizando seus momentos mais <span className="text-brand-sand italic">preciosos</span>
                    </motion.h1>
                    <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/95 font-body mb-10 max-w-xl mx-auto md:mx-0 drop-shadow-md">
                        Especialistas em ensaios de gestante, acompanhamento e cobertura de eventos infantis em Macaé, RJ.
                    </motion.p>
                    <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="#sobre"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-brand-dark rounded-full font-medium hover:bg-brand-sand transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            Sobre Nós
                        </a>
                        <a
                            href="#contato"
                            className="w-full sm:w-auto px-8 py-4 bg-brand-terracotta text-white rounded-full font-medium hover:bg-[#c07a6c] transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            Agende seu ensaio
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};