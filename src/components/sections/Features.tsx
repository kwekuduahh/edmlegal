import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export const FeatureSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const imageContainerRef = useRef(null);

    // Track scroll progress of the image container
    const { scrollYProgress } = useScroll({
        target: imageContainerRef,
        offset: ["start end", "end start"]
    });

    // Transform values based on scroll
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <>
            <section ref={ref} className="bg-[#111111]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                                    src="/pexels-august-de-richelieu-4427609.jpg"
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
                            className="space-y-4 text-white"
                        >
                            <p className="text-sm text-[#eaa636] font-semibold uppercase tracking-wider mb-2">
                                EXPERIENCES
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-80">
                                Why Choose Us?
                            </h2>

                            <Tabs defaultValue="attorneys" className="mb-8">
                                <TabsList className="grid w-full h-fit grid-cols-3 mb-6 bg-transparent font-bold">
                                    <TabsTrigger
                                        value="attorneys"
                                        className="data-[state=active]:bg-[#eaa636] data-[state=active]:text-white text-white"
                                    >
                                        Our Attorneys
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="expertise"
                                        className="data-[state=active]:bg-[#eaa636] data-[state=active]:text-white text-white"
                                    >
                                        Our Expertise
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="firm"
                                        className="data-[state=active]:bg-[#eaa636] data-[state=active]:text-white text-white"
                                    >
                                        Our Firm
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="attorneys" className="text-white">
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

                                <TabsContent value="expertise" className="text-white">
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

                                <TabsContent value="firm" className="text-white">
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
        </>
    );
};

