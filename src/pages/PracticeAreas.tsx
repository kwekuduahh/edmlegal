import { motion } from "framer-motion";
import { practiceAreas } from "../data/practiceAreas";
import { Hammer, Stethoscope, HardHat, Gavel, Users, Briefcase } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Link } from "react-router";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    'Hammer': Hammer,
    'Stethoscope': Stethoscope,
    'HardHat': HardHat,
    'Gavel': Gavel,
    'Users': Users,
    'Briefcase': Briefcase,
};

export default function PracticeAreas() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-cover bg-center bg-no-repeat text-white py-32 overflow-hidden" style={{ backgroundImage: 'url(/pexels-pavel-danilyuk-8111865.jpg)' }}>
                <div className="absolute inset-0 bg-orange-500/20 z-10"></div>
                <div className="relative container mx-auto px-4 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Practice Areas</h1>
                        <hr className="w-40 mx-auto border-t-2 border-[#eaa636] mb-4" />
                        <p className="text-sm md:text-base lg:text-lg text-gray-300 font-light">
                            Reputation. Respect. Result.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Practice Areas Grid with Hover Animation */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  max-w-7xl mx-auto">
                        {practiceAreas.map((area, index) => {
                            const IconComponent = area.icon ? iconMap[area.icon] : null;

                            return (
                                <motion.div
                                    key={area.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative h-[350px] overflow-hidden group cursor-pointer"
                                    style={{
                                        backgroundImage: `url(${area.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300"></div>

                                    {/* Content Container */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transition-transform duration-300 group-hover:-translate-y-16">
                                        {/* Icon and Title - Always Visible */}
                                        <div className="flex items-center gap-3 mb-4">
                                            {IconComponent && (
                                                <div className="w-12 h-12 bg-[#eaa636] rounded-full flex items-center justify-center flex-shrink-0">
                                                    <IconComponent size={24} />
                                                </div>
                                            )}
                                            <h3 className="text-xl md:text-2xl font-bold">{area.title}</h3>
                                        </div>

                                        {/* Description - Hidden by default, revealed on hover */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                                            <p className="text-gray-200 text-sm leading-relaxed">
                                                {area.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#eaa636] py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
                            Contact Us Now! Get a Free Consultation for Your Case.
                        </h2>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-base font-semibold whitespace-nowrap"
                            >
                                MAKE APPOINTMENT
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

