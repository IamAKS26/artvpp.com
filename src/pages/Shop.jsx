
import { useState, useMemo } from 'react';
import Navbar from '../components/layout/Navbar';
import CinematicArtCard from '../components/ui/CinematicArtCard';
import FilterBar from '../components/ui/FilterBar';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';

import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
    const { addToCart } = useCart();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [sortBy, setSortBy] = useState('Trending'); // Placeholder for now

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = activeFilter === 'All' || product.category === activeFilter;
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.artist.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

    return (
        <div className="min-h-screen text-primary selection:bg-black selection:text-white">
            <Navbar />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[35%] h-[35%] bg-brand-light/50 blur-[80px] rounded-full opacity-50 animate-float transform-gpu will-change-transform"></div>
                <div className="absolute bottom-[10%] left-[-5%] w-[35%] h-[35%] bg-brand-soft/40 blur-[80px] rounded-full opacity-50 animate-float transform-gpu will-change-transform"></div>
            </div>

            <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Shop Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight text-on-light-text dark:text-on-dark-text">Explore the Gallery</h1>
                    <p className="text-lg text-on-light-text-body dark:text-on-dark-text-body font-medium">
                        Discover original masterpieces, limited edition prints, and unique handcrafted objects from around the world.
                    </p>
                </motion.div>

                {/* Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative z-30 py-4 mb-8"
                >
                    <FilterBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        setSortBy={setSortBy}
                    />
                </motion.div>

                {/* Masonry Grid */}
                <div className="min-h-screen">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.length > 0 ? (
                            <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                                {filteredProducts.map((art, index) => (
                                    <CinematicArtCard
                                        key={art.id}
                                        id={art.id}
                                        index={index}
                                        image={art.image}
                                        title={art.title}
                                        artist={art.artist}
                                        price={art.price}
                                        onAddToCart={addToCart}
                                    />
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-20 text-center"
                            >
                                <p className="text-xl text-gray-500">No artworks found matching your criteria.</p>
                                <button
                                    onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                                    className="mt-4 text-primary hover:underline"
                                >
                                    Clear filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom CTA */}
                {filteredProducts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ margin: "100px" }}
                        className="mt-24 text-center"
                    >
                        <span className="inline-flex items-center gap-2 text-sm text-on-light-muted dark:text-on-dark-text-muted uppercase tracking-widest font-bold animate-pulse">
                            Loading more inspiration...
                        </span>
                        {/* Visual Loading Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                        </div>
                    </motion.div>
                )}

            </main>
            <Footer />
        </div>
    );
};

export default Shop;
