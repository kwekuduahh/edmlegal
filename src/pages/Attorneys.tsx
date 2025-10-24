import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";

export default function Attorneys() {
    const attorneys = [
        {
            id: "1",
            name: "Sarah Johnson",
            position: "Senior Partner",
            specialization: ["Corporate Law", "M&A"],
            bio: "Sarah has over 20 years of experience in corporate law and has successfully handled hundreds of complex merger and acquisition cases.",
        },
        {
            id: "2",
            name: "Michael Chen",
            position: "Partner",
            specialization: ["Criminal Defense", "Civil Litigation"],
            bio: "Michael is known for his strategic approach to criminal defense and has achieved numerous favorable outcomes for his clients.",
        },
        {
            id: "3",
            name: "Emily Rodriguez",
            position: "Partner",
            specialization: ["Family Law", "Estate Planning"],
            bio: "Emily brings compassion and expertise to family law matters, helping clients navigate difficult transitions with dignity.",
        },
        {
            id: "4",
            name: "David Thompson",
            position: "Senior Associate",
            specialization: ["Real Estate", "Construction Law"],
            bio: "David specializes in complex real estate transactions and construction disputes, providing practical solutions for clients.",
        },
        {
            id: "5",
            name: "Jennifer Lee",
            position: "Associate",
            specialization: ["Employment Law", "Labor Relations"],
            bio: "Jennifer advocates for workers' rights and helps employers navigate complex employment regulations.",
        },
        {
            id: "6",
            name: "Robert Martinez",
            position: "Associate",
            specialization: ["Healthcare Law", "Medical Malpractice"],
            bio: "Robert combines his legal expertise with a deep understanding of healthcare regulations to serve medical professionals and patients.",
        },
    ];

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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Attorneys</h1>
                        <p className="text-xl text-blue-100">
                            Meet our experienced legal professionals dedicated to your success
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Attorneys Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {attorneys.map((attorney, index) => (
                            <motion.div
                                key={attorney.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                                            {attorney.name.split(" ").map(n => n[0]).join("")}
                                        </div>
                                        <h3 className="text-xl font-bold text-center mb-2">{attorney.name}</h3>
                                        <p className="text-center text-gray-600 mb-3">{attorney.position}</p>
                                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                                            {attorney.specialization.map((spec) => (
                                                <span
                                                    key={spec}
                                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-sm text-center">{attorney.bio}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">Our Team by the Numbers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-4xl font-bold text-blue-900 mb-2">37</div>
                                <div className="text-gray-600">Legal Professionals</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-900 mb-2">150+</div>
                                <div className="text-gray-600">Years Combined Experience</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-900 mb-2">3+</div>
                                <div className="text-gray-600">Countries</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-900 mb-2">95%</div>
                                <div className="text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

