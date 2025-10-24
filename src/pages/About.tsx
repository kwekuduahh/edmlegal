import { motion } from "framer-motion";
import { FeatureSection } from "@/components/sections/Features";

export default function About() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-cover bg-[0px_-60px] bg-no-repeat text-white py-32 overflow-hidden" style={{ backgroundImage: 'url(/pexels-august-de-richelieu-4427627.jpg)' }}>
                <div className="absolute inset-0 bg-orange-500/20 z-10"></div>
                <div className="relative container mx-auto px-4 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">About Us</h1>
                        <hr className="w-32 mx-auto border-t-2 border-[#eaa636] mb-4" />
                        <p className="text-sm md:text-base lg:text-lg text-gray-300 font-light">
                            Reputation. Respect. Result.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-sm text-[#eaa636] font-semibold uppercase tracking-wider mb-3">
                                WHO WE ARE
                            </p>
                            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold py-5 text-gray-900">
                                Your partner for legal
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                At Flints Legal Solutions, we're more than legal advisors—we're your partners in navigating the complex world of law. With a deep commitment to excellence, integrity, and personalized service, we stand by your side, providing expert guidance tailored to your unique needs. Whether you're an individual, a business, or an organization, trust us to be your unwavering advocate. Let's build a stronger legal future together.
                            </p>
                        </motion.div>

                        {/* Right Column - Images with Overlapping Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Main large image */}
                            <div className="relative h-[400px] md:h-[500px]">
                                <img
                                    src="/pexels-august-de-richelieu-4427612.jpg"
                                    alt="Legal team meeting"
                                    className="w-full h-full object-cover shadow-xl"
                                />
                            </div>

                            {/* Bottom right small image */}
                            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 transform translate-y-1/4 translate-x-1/4">
                                <img
                                    src="/pexels-sora-shimazaki-5668481.jpg"
                                    alt="Lawyer consultation"
                                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                                />
                            </div>

                            {/* Orange Card with Stats */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="absolute bottom-0 -left-6 bg-[#eaa636] text-white p-8 shadow-md transform -translate-x-1/4 translate-y-1/3 z-10"
                            >
                                <div className="text-5xl md:text-6xl font-bold mb-2">2500</div>
                                <div className="text-lg font-semibold">Solved Cases</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section (WhyChooseUs adapted) */}
            <FeatureSection />

            {/* Welcome Section */}
            <section className="py-20 bg-[#111111] text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Left Column - Years Display */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-block border-4 border-[#eaa636] p-8 md:p-12 rounded-lg">
                                <div className="text-8xl md:text-9xl font-bold leading-none mb-2">20</div>
                                <div className="text-lg md:text-xl text-[#eaa636] font-semibold uppercase tracking-wider">
                                    YEARS OF EXPERIENCE
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-sm text-[#eaa636] font-semibold uppercase tracking-wider mb-3">
                                WELCOME
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Flints Legal Solutions is Your Best Partner for Legal Solutions
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                We take pride in the depth and breadth of experience that our team of lawyers brings to the table. With years of dedicated practice in various areas of law, our attorneys have honed their skills, developed specialized knowledge, and earned a reputation for excellence in their respective fields.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

