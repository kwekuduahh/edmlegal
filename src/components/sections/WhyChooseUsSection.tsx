import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCountUp } from '../../hooks/useCountUp';
import { statistics } from '../../data/statistics';

const StatCounter = ({
    value,
    suffix = '',
    prefix = '',
    label,
}: {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useIntersectionObserver(ref);
    const count = useCountUp(value, 2000, isInView);

    return (
        <div ref={ref} className="text-center pb-2">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
                {prefix}
                {count}
                {suffix}
            </div>
            <div className="text-[#eaa636] text-sm">{label}</div>
        </div>
    );
};

export const WhyChooseUsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const imageContainerRef = useRef(null);

    // Track scroll progress of the image container
    const { scrollYProgress } = useScroll({
        target: imageContainerRef,
        offset: ["start end", "end start"]
    });

    // Transform values based on scroll
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <>
            <section ref={ref} className="bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.6 }}
                            className="relative lg:sticky lg:top-24 h-[500px] lg:h-[600px]"
                        >
                            <div ref={imageContainerRef} className="relative h-[500px] lg:h-[600px] w-full overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 z-10"></div>
                                {/* Image with parallax effect - scaled up to allow movement */}
                                <motion.img
                                    src="/10.jpg"
                                    alt="Why Choose Us"
                                    className="absolute w-full h-[120%] object-cover"
                                    style={{ scale, y, originY: 0.5 }}
                                />
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-sm text-[#eaa636] font-semibold uppercase tracking-wider mb-2">
                                EXPERIENCES
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                                Why Choose Us?
                            </h2>

                            <Tabs defaultValue="attorneys" className="mb-8">
                                <TabsList className="grid w-full grid-cols-3 mb-6 bg-white font-bold">
                                    <TabsTrigger
                                        value="attorneys"
                                        className="data-[state=active]:bg-[#eaa636] data-[state=active]:text-white"
                                    >
                                        Our Attorneys
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="expertise"
                                        className="data-[state=active]:bg-[#eaa636] data-[state=active]:text-white"
                                    >
                                        Our Expertise
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="firm"
                                        className="data-[state=active]:bg-[#eaa636] data-[state=active]:text-white"
                                    >
                                        Our Firm
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="attorneys" className="text-gray-700">
                                    <p className="leading-relaxed">
                                        Our attorneys are the cornerstone of our commitment to
                                        providing exceptional legal services. Each member of our team
                                        brings a wealth of experience, specialized knowledge, and a
                                        deep dedication to achieving the best outcomes for our
                                        clients. We pride ourselves on our collaborative approach,
                                        ensuring that every case benefits from the collective
                                        expertise of our diverse legal team.
                                    </p>
                                </TabsContent>

                                <TabsContent value="expertise" className="text-gray-700">
                                    <p className="leading-relaxed">
                                        We bring extensive experience and specialized knowledge to a
                                        wide range of legal practice areas. We are dedicated to
                                        providing top-tier legal services, tailored to meet the unique
                                        needs of each client. Whether you're facing a personal legal
                                        challenge or require sophisticated business counsel, our
                                        attorneys are here to guide you with unparalleled expertise
                                        and unwavering commitment.
                                    </p>
                                </TabsContent>

                                <TabsContent value="firm" className="text-gray-700">
                                    <p className="leading-relaxed">
                                        We are dedicated to providing exceptional legal services
                                        tailored to meet the unique needs of our clients. Our firm is
                                        built on a foundation of integrity, professionalism, and a
                                        commitment to excellence. Whether you're facing a personal
                                        legal challenge or require sophisticated business counsel, our
                                        team of experienced attorneys is here to guide you through
                                        every step of the legal process.
                                    </p>
                                </TabsContent>
                            </Tabs>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section ref={ref} className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    {/* Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
                        {statistics.map((stat) => (
                            <StatCounter
                                key={stat.id}
                                value={stat.value}
                                suffix={stat.suffix}
                                prefix={stat.prefix}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

