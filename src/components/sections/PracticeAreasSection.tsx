import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { practiceAreas } from '../../data/practiceAreas';
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic';

const iconMap: Record<string, keyof typeof dynamicIconImports> = {
    labor: 'clipboard-pen-line',
    medical: 'heart-pulse',
    mining: 'compass',
    civil: 'scale',
    family: 'users',
    corporate: 'briefcase',
};

export const PracticeAreasSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Practice Areas
                    </h2>
                    <div className='w-40 h-0.5 bg-yellow-500 mx-auto mt-6'></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {practiceAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex gap-4 p-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-[#eaa636] rounded-sm flex items-center justify-center shadow-md">
                                        <span className="text-2xl text-white">
                                            <DynamicIcon name={iconMap[area.id]} size={24} />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {area.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

