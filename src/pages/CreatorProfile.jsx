import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, MessageCircle, CheckCircle, Clock, Award, ArrowLeft, Globe } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { services } from '../data/services';

const CreatorProfile = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const artistName = decodeURIComponent(name);

    // Filter services for this artist (mock logic)
    // In a real app, this would query by artist ID
    const artistServices = services.filter(s => s.artist === artistName);

    // If no specific services found in mock data, show some random ones for demo
    const displayServices = artistServices.length > 0 ? artistServices : services.slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black/95 text-on-light-text dark:text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back
                </button>

                {/* Profile Header */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-sm mb-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-lg shrink-0">
                            <img
                                src={`https://ui-avatars.com/api/?name=${artistName}&background=random&size=200`}
                                alt={artistName}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{artistName}</h1>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                        <span className="flex items-center gap-1"><MapPin size={16} /> New York, USA</span>
                                        <span className="flex items-center gap-1 text-yellow-500 font-bold"><Star className="fill-current" size={16} /> 4.9 (150+ Reviews)</span>
                                        <span className="flex items-center gap-1 text-green-500 font-medium"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Online Now</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="primary" className="gap-2"><MessageCircle size={18} /> Contact Me</Button>
                                    <Button variant="outline" className="gap-2">Follow</Button>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                                Professional digital artist and illustrator with over 8 years of experience.
                                I specialize in character design, concept art, and custom portraits.
                                My goal is to bring your vision to life with vibrant colors and attention to detail.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-white/5">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold">98%</h3>
                            <p className="text-sm text-gray-500">Job Success</p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold">150+</h3>
                            <p className="text-sm text-gray-500">Projects Done</p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold">2hrs</h3>
                            <p className="text-sm text-gray-500">Avg. Response</p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold">English</h3>
                            <p className="text-sm text-gray-500">Language</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Services */}
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-bold font-display">My Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {displayServices.map((service, index) => (
                                <Link to={`/service/${service.id}`} key={service.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all group"
                                    >
                                        <div className="h-40 overflow-hidden relative">
                                            <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">{service.title}</h3>
                                            <div className="flex justify-between items-center mt-3">
                                                <span className="text-xs text-gray-500">Starting at</span>
                                                <span className="font-bold text-lg">${service.startingPrice}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        {/* Reviews (Mock) */}
                        <div className="pt-8">
                            <h2 className="text-2xl font-bold font-display mb-6">What people are saying</h2>
                            <div className="space-y-6">
                                {[1, 2].map((i) => (
                                    <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                            <div>
                                                <h4 className="font-bold">Happy Client {i}</h4>
                                                <div className="flex text-yellow-500 text-xs">★★★★★</div>
                                            </div>
                                            <span className="ml-auto text-xs text-gray-400">2 weeks ago</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            "Absolutely amazing work! {artistName} really understood what I was looking for and delivered ahead of schedule. Highly recommended!"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Sidebar Info */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Illustration', 'Photoshop', 'Character Design', 'Concept Art', 'Digital Painting'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">Certifications</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <Award className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="font-medium text-sm">Adobe Certified Expert</p>
                                        <p className="text-xs text-gray-500">2023</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <Award className="text-primary shrink-0" size={20} />
                                    <div>
                                        <p className="font-medium text-sm">Digital Arts Diploma</p>
                                        <p className="text-xs text-gray-500">2021</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CreatorProfile;
