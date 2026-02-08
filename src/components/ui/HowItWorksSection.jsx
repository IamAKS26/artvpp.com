import { motion } from 'framer-motion';
import { Search, PenTool, CheckCircle, CreditCard, Package } from 'lucide-react';

const steps = [
    { icon: Search, title: "Browse Artists", desc: "Explore portfolios and find the perfect style for your vision." },
    { icon: PenTool, title: "Request Custom Work", desc: "Share your idea, reference images, and budget requirements." },
    { icon: CheckCircle, title: "Agreement", desc: "Artist confirms availability, price, and delivery timeline." },
    { icon: CreditCard, title: "Secure Payment", desc: "Funds are held safely in escrow until the work is approved." },
    { icon: Package, title: "Receive Artwork", desc: "Get high-res digital files or tracked shipping for physical art." },
];

const HowItWorksSection = () => {
    return (
        <section className="py-20 bg-gray-50/50 rounded-[3rem] my-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How it Works</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">From concept to masterpiece in five simple steps.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-1/10 right-1/10 h-0.5 bg-gray-200 -z-10" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 border border-gray-100">
                                <step.icon className="w-7 h-7 text-gray-800" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed px-2">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
