import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "../components/ui/card";
import { practiceAreas } from "../data/practiceAreas";

export default function PracticeAreas() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Practice Areas</h1>
                        <p className="text-xl text-blue-100">
                            Comprehensive legal services across multiple practice areas
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Practice Areas Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {practiceAreas.map((area, index) => (
                            <motion.div
                                key={area.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-8">
                                        <CardTitle className="text-2xl mb-4">{area.title}</CardTitle>
                                        <CardDescription className="text-gray-600 text-base leading-relaxed">
                                            {area.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Practice Areas */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-3">Corporate and M&A</h3>
                                <p className="text-gray-600">
                                    Expert guidance through complex mergers, acquisitions, and corporate restructuring.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-3">Construction and Real Estate</h3>
                                <p className="text-gray-600">
                                    Comprehensive legal support for construction projects and real estate transactions.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-3">Commercial Dispute Resolution</h3>
                                <p className="text-gray-600">
                                    Strategic representation in business disputes and commercial litigation.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-3">Banking and Finance</h3>
                                <p className="text-gray-600">
                                    Legal counsel for banking transactions, financing, and regulatory compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

