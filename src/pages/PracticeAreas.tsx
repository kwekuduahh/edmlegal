import { motion } from "framer-motion";
import { practiceAreas } from "../data/practiceAreas";
import { Hammer, Stethoscope, HardHat, Gavel, Users, Briefcase } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { useEffect } from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    'Hammer': Hammer,
    'Stethoscope': Stethoscope,
    'HardHat': HardHat,
    'Gavel': Gavel,
    'Users': Users,
    'Briefcase': Briefcase,
};

export default function PracticeAreas() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden text-white bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/pexels-pavel-danilyuk-8111865.jpg)' }}>
                <div className="absolute inset-0 z-10 bg-orange-500/20"></div>
                <div className="container relative z-20 px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl">Practice Areas</h1>
                        <hr className="w-40 mx-auto border-t-2 border-[#eaa636] mb-4" />
                        <p className="text-sm font-light text-gray-300 md:text-base lg:text-lg">
                            Reputation. Respect. Result.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Practice Areas Grid with Hover Animation */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
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
                                    <div className="absolute inset-0 transition-all duration-300 bg-black/60 group-hover:bg-black/70"></div>

                                    {/* Content Container */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transition-transform duration-300 group-hover:-translate-y-16">
                                        {/* Icon and Title - Always Visible */}
                                        <div className="flex items-center gap-3 mb-4">
                                            {IconComponent && (
                                                <div className="w-12 h-12 bg-[#eaa636] rounded-full flex items-center justify-center flex-shrink-0">
                                                    <IconComponent size={24} />
                                                </div>
                                            )}
                                            <h3 className="text-xl font-bold md:text-2xl">{area.title}</h3>
                                        </div>

                                        {/* Description - Hidden by default, revealed on hover */}
                                        <div className="overflow-hidden transition-opacity duration-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-32">
                                            <p className="text-sm leading-relaxed text-gray-200">
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
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col items-center justify-between max-w-6xl gap-6 mx-auto md:flex-row">
                        <h2 className="text-2xl font-bold text-center text-white md:text-3xl md:text-left">
                            Contact Us Now! Get a Free Consultation for Your Case.
                        </h2>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="px-8 py-6 text-base font-semibold text-white bg-black hover:bg-gray-900 whitespace-nowrap"
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

