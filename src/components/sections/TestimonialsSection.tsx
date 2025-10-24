import { useRef, useEffect, useCallback, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '../ui/carousel';
import { testimonials } from '../../data/testimonials';

export const TestimonialsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [api, setApi] = useState<CarouselApi>();

    const scrollNext = useCallback(() => {
        api?.scrollNext();
    }, [api]);

    useEffect(() => {
        if (!api) return;

        const intervalId = setInterval(() => {
            scrollNext();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [api, scrollNext]);

    return (
        <section
            ref={ref}
            className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/7.jpg)' }}
        >
            {/* Content */}
            <div className="relative z-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Testimonials
                    </h2>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem
                                    key={testimonial.id}
                                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, scale: 1 }
                                                : { opacity: 0, scale: 0.9 }
                                        }
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="h-full"
                                    >
                                        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 h-full hover:bg-gray-800/80 transition-all duration-300">
                                            <div className="text-[#eaa636] text-4xl mb-4">"</div>
                                            <h3 className="text-lg font-semibold mb-3 text-white">
                                                {testimonial.title}
                                            </h3>
                                            <blockquote className="text-gray-300 mb-4 text-sm leading-relaxed">
                                                {testimonial.content}
                                            </blockquote>
                                            <div className="text-sm border-t border-gray-700 pt-4">
                                                <p className="font-semibold text-[#eaa636]">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 -translate-x-12 bg-[#eaa636] hover:bg-[#eaa636]/80 text-white border-none" />
                        <CarouselNext className="right-0 translate-x-12 bg-[#eaa636] hover:bg-[#eaa636]/80 text-white border-none" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

