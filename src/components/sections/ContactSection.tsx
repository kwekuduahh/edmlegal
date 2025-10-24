import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '../ui/button';
import { Link } from 'react-router';

export const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section
            ref={ref}
            className="py-6 bg-[#eaa636]"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className=" flex items-center justify-between"
                >
                    <h2 className="text-xl md:text-2xl font-bold mb-8 text-white m-0">
                        Contact Us Now! Get a Free Consultation for Your Case.
                    </h2>
                    <Link to="/contact">
                        <Button
                            size="lg"
                            className="bg-[#111111] text-white hover:bg-[#111111]/80 px-10 py-6 text-base font-semibold uppercase tracking-wide"
                        >
                            Make Appointment
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

