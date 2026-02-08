import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Check, Clock, MessageCircle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { services } from '../data/services';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-on-light-text dark:text-white">
                <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
                <Button onClick={() => navigate('/services')}>Back to Services</Button>
            </div>
        );
    }

    // Mock extra data specifically for the detail view
    const packages = [
        { name: 'Basic', price: service.startingPrice, delivery: '3 Days', revisions: 1, features: ['High Res File', 'Personal Use'] },
        { name: 'Standard', price: service.startingPrice * 1.5, delivery: '5 Days', revisions: 3, features: ['High Res File', 'Commercial Use', 'Source File'] },
        { name: 'Premium', price: service.startingPrice * 2.5, delivery: '10 Days', revisions: 'Unlimited', features: ['High Res File', 'Commercial Use', 'Source File', 'Priority Support', 'Social Media Kit'] },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black/95 text-on-light-text dark:text-white">
            <Navbar />

            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Media & Details */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Title & Artist */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{service.title}</h1>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                        <img src={`https://ui-avatars.com/api/?name=${service.artist}&background=random`} alt={service.artist} />
                                    </div>
                                    <span className="font-medium">{service.artist}</span>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 font-bold">
                                    <Star className="fill-current" size={16} /> {service.rating}
                                    <span className="text-gray-400 font-normal ml-1">(120 reviews)</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-3xl overflow-hidden aspect-video shadow-lg"
                        >
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        </motion.div>

                        {/* About Service */}
                        <div className="prose dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold mb-4">About This Gig</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                {service.description} I specialize in creating high-quality, unique artwork tailored to your specific needs.
                                Whether you're looking for a personal gift, brand assets, or commercial illustrations, I bring creativity and professionalism to every project.
                            </p>
                            <h3 className="text-xl font-bold mb-3">Why Choose Me?</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> 5+ Years of Experience</li>
                                <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> 100% Satisfaction Guarantee</li>
                                <li className="flex items-center gap-2"><Check className="text-green-500" size={18} /> Fast & Friendly Communication</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Key Info & Pricing */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Pricing Card */}
                            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 shadow-xl overflow-hidden">
                                <div className="flex border-b border-gray-100 dark:border-white/5">
                                    {packages.map((pkg, idx) => (
                                        <button
                                            key={idx}
                                            className="flex-1 py-4 text-sm font-bold text-center hover:bg-gray-50 dark:hover:bg-white/5 data-[active=true]:bg-primary/5 data-[active=true]:text-primary transition-colors border-r border-gray-100 dark:border-white/5 last:border-0"
                                            onClick={() => { /* Toggle logic could go here */ }}
                                        >
                                            {pkg.name}
                                        </button>
                                    ))}
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-baseline mb-6">
                                        <span className="text-sm font-bold uppercase text-gray-400">Standard Package</span>
                                        <span className="text-3xl font-bold">${packages[1].price}</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                                        Everything you need for a professional result. Includes commercial rights and source files.
                                    </p>

                                    <div className="flex justify-between text-sm font-medium mb-6">
                                        <div className="flex items-center gap-2"><Clock size={16} /> {packages[1].delivery} Delivery</div>
                                        <div className="flex items-center gap-2"><div className="rotate-45">⟳</div> {packages[1].revisions} Revisions</div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {packages[1].features.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                <Check size={16} className="text-green-500 shrink-0" /> {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button variant="primary" className="w-full py-4 text-lg">Continue (${packages[1].price})</Button>
                                    <Button variant="ghost" className="w-full mt-3">Compare Packages</Button>
                                </div>
                            </div>

                            {/* Contact Seller */}
                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm text-center">
                                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                                    <MessageCircle size={18} /> Contact {service.artist}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ServiceDetail;
