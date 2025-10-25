import { motion } from "framer-motion";

export default function Attorneys() {
    const attorneys = [
        {
            id: "1",
            name: "Calvern Lenis Stancil",
            position: "Senior Attorney",
            image: "/attorney-calvern.jpg",
        },
        {
            id: "2",
            name: "Fyoley Anderson",
            position: "Sports and Entertainment Lawyer",
            image: "/attorney-fyoley.jpg",
        },
        {
            id: "3",
            name: "Desmond Burke",
            position: "Criminal Lawyer",
            image: "/attorney-desmond.jpg",
        },
        {
            id: "4",
            name: "Richard Roman",
            position: "Intellectual Property Lawyer",
            image: "/attorney-richard.jpg",
        },
        {
            id: "5",
            name: "Mark Kimball",
            position: "Healthcare Lawyer",
            image: "/attorney-mark.jpg",
        },
        {
            id: "6",
            name: "Carrie Brown",
            position: "Immigration Lawyer",
            image: "/attorney-carrie.jpg",
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-cover bg-center bg-no-repeat text-white py-32 overflow-hidden" style={{ backgroundImage: 'url(/pexels-august-de-richelieu-4427627.jpg)' }}>
                <div className="absolute inset-0 bg-orange-500/20 z-10"></div>
                <div className="relative container mx-auto px-4 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Our Attorneys</h1>
                        <hr className="w-40 mx-auto border-t-2 border-[#eaa636] mb-4" />
                        <p className="text-sm md:text-base lg:text-lg text-gray-300 font-light">
                            Reputation. Respect. Result.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Head Lawyers Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center  text-gray-900"
                    >
                        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold py-5 text-gray-900">Our Head Lawyers</h2>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {attorneys.map((attorney, index) => (
                            <motion.div
                                key={attorney.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="bg-white overflow-hidden"
                            >
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200">
                                    <img
                                        src={attorney.image}
                                        alt={attorney.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{attorney.name}</h3>
                                    <p className="text-sm text-gray-600">{attorney.position}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                                Stancil Legal Solutions is Your Best Partner for Legal Solutions
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

