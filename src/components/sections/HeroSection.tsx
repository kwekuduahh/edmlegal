import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { featureCards } from '../../data/featureCards';
import { Link } from 'react-router';
import { Scale, Search, ClipboardPenLine } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="relative">
            {/* Hero Background */}
            <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-white overflow-hidden" style={{ backgroundImage: 'url(/pexels-ekaterina-bolovtsova-6077861.jpg)' }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-700/70 to-gray-900/20 z-10"></div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 pt-32 pb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl space-y-4"
                    >
                        <p className="text-sm uppercase tracking-wider text-gray-300">
                            Flints Legal Solutions
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight py-5">
                            WE HAVE 95% CASE
                            <br />
                            WINNING RATE
                        </h1>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="bg-[#eaa636] text-white hover:bg-[#eaa636]/80 px-8 py-6 text-base font-semibold"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Feature Cards - Overlapping */}
            <div className="relative z-30 -mt-32">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto shadow-2xl">
                        {featureCards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                className={`bg-gradient-to-br ${index === 0
                                    ? 'from-[#d29530] to-[#d29530]'
                                    : index === 1
                                        ? 'from-[#bb842b] to-[#bb842b]'
                                        : 'from-[#a37425] to-[#a37425]'
                                    } text-white p-8 md:p-10`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                                        {index === 0 ? <ClipboardPenLine size={32} /> : index === 1 ? <Search size={32} /> : <Scale size={32} />}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

