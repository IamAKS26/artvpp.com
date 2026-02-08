import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import WordReveal from '../components/ui/WordReveal';
import ServiceCategoryCard from '../components/ui/ServiceCategoryCard';
import HowItWorksSection from '../components/ui/HowItWorksSection';
import FeaturedArtistsCarousel from '../components/ui/FeaturedArtistsCarousel';
import ServiceListingCard from '../components/ui/ServiceListingCard';
import CommissionCTA from '../components/ui/CommissionCTA';
import { services } from '../data/services'; // Import mock data

const Services = () => {
    // Parallax Setup
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const categories = [
        { title: "Portrait Painting", image: "https://images.unsplash.com/photo-1578301978018-285dd4e8d388?q=80&w=600" },
        { title: "Digital Illustration", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600" },
        { title: "Wall Murals", image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=600" },
        { title: "Calligraphy & Type", image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=600" },
        { title: "Logo & Branding", image: "https://images.unsplash.com/photo-1626785774573-4b7993143a23?q=80&w=600" },
        { title: "Sculpture & Crafts", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600" },
    ];

    return (
        <div ref={ref} className="min-h-screen text-primary selection:bg-black selection:text-white overflow-hidden">
            <Navbar />

            {/* Cinematic Background */}
            {/* Cinematic Background */}
            <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-light/40 blur-[80px] rounded-full opacity-60 animate-blob transform-gpu will-change-transform" />
                <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-brand-soft/40 blur-[80px] rounded-full opacity-60 animate-blob animation-delay-2000 transform-gpu will-change-transform" />
            </motion.div>

            <main className="relative z-10 pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Hero Section */}
                <div className="text-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-6"
                    >
                        <span className="py-2 px-5 rounded-full bg-white/90 backdrop-blur-md text-on-light-text dark:text-on-dark-text text-sm font-bold tracking-widest uppercase border border-on-light-border dark:border-white/50 shadow-sm">
                            Creative Services
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 tracking-tight text-on-light-text dark:text-on-dark-text">
                        <WordReveal text="Commission Custom Art & Design" delay={0.2} />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-xl text-on-light-text-body dark:text-on-dark-text-body max-w-2xl mx-auto font-medium leading-relaxed mb-10"
                    >
                        Hire verified artists for portraits, branding, murals, and more. Transform your vision into reality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Button isMagnetic variant="primary" size="lg" className="px-10 h-14 text-lg">Request Commission</Button>
                        <Button isMagnetic variant="secondary" size="lg" className="px-10 h-14 text-lg bg-white/90 hover:bg-white">Explore Services</Button>
                    </motion.div>
                </div>

                {/* Popular Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {categories.map((cat, idx) => (
                        <ServiceCategoryCard key={idx} index={idx} {...cat} />
                    ))}
                </div>

                {/* How It Works */}
                <HowItWorksSection />

                {/* Featured Artists */}
                <FeaturedArtistsCarousel />

                {/* Service Listings - Fiverr Style */}
                <div className="mb-20">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-2 text-on-light-text dark:text-white">Explore Marketplace</h2>
                            <p className="text-on-light-text-body dark:text-dark-text-muted">Popular services available right now</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link to={`/service/${service.id}`} key={service.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full"
                                >
                                    {/* Image */}
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                                            <span className="text-yellow-500">★</span> {service.rating}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                                                <img src={`https://ui-avatars.com/api/?name=${service.artist}&background=random`} alt={service.artist} />
                                            </div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{service.artist}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">{service.description}</p>

                                        <div className="border-t border-gray-100 dark:border-white/5 pt-4 flex items-center justify-between">
                                            <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Starting at</div>
                                            <div className="text-lg font-bold text-gray-900 dark:text-white">${service.startingPrice}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <CommissionCTA />

            </main>
            <Footer />
        </div>
    );
};

export default Services;
