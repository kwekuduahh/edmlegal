import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Attorneys() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const attorneys = [
        {
            id: "1",
            name: "Micheal D Stancil",
            position: "Senior Attorney",
            image: "/attorney-micheal.png",
        },
        {
            id: "2",
            name: "Fyoley Anderson",
            position: "Sports and Entertainment Lawyer",
            image: "/attorney-dleyon.png",
        },
        {
            id: "3",
            name: "Desmond Burke",
            position: "Criminal Lawyer",
            image: "/attorney-desmond.png",
        },
        {
            id: "4",
            name: "Richard Roman",
            position: "Intellectual Property Lawyer",
            image: "/attorney-richard.png",
        },
        {
            id: "5",
            name: "Mark Kimball",
            position: "Healthcare Lawyer",
            image: "/attorney-mark.png",
        },
        {
            id: "6",
            name: "Carrie Brown",
            position: "Immigration Lawyer",
            image: "/attorney-carrie.png",
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden text-white bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/pexels-august-de-richelieu-4427627.jpg)' }}>
                <div className="absolute inset-0 z-10 bg-orange-500/20"></div>
                <div className="container relative z-20 px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-3xl">Our Attorneys</h1>
                        <hr className="w-40 mx-auto border-t-2 border-[#eaa636] mb-4" />
                        <p className="text-sm font-light text-gray-300 md:text-base lg:text-lg">
                            Reputation. Respect. Result.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Head Lawyers Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold text-center text-gray-900 md:text-4xl"
                    >
                        <h2 className="py-5 text-2xl font-bold text-gray-900 md:text-2xl lg:text-3xl">Our Head Lawyers</h2>
                    </motion.h2>

                    <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
                        {attorneys.map((attorney, index) => (
                            <motion.div
                                key={attorney.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="overflow-hidden bg-white"
                            >
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200">
                                    <img
                                        src={attorney.image}
                                        alt={attorney.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="mb-2 text-lg font-bold text-gray-900">{attorney.name}</h3>
                                    <p className="text-sm text-gray-600">{attorney.position}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-20 bg-[#111111] text-white">
                <div className="container px-4 mx-auto">
                    <div className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
                        {/* Left Column - Years Display */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-block border-4 border-[#eaa636] p-8 md:p-12 rounded-lg">
                                <div className="mb-2 font-bold leading-none text-8xl md:text-9xl">20</div>
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
                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                                Stancil Legal Solutions is Your Best Partner for Legal Solutions
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-300">
                                We take pride in the depth and breadth of experience that our team of lawyers brings to the table. With years of dedicated practice in various areas of law, our attorneys have honed their skills, developed specialized knowledge, and earned a reputation for excellence in their respective fields.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

