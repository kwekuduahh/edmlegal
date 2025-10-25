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
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-between text-center  md:flex-row md:text-left"
                >
                    <h2 className="m-0 mb-8 text-xl font-bold text-white md:text-2xl">
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

