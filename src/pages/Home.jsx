import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import ArtCardDetailed from '../components/ui/ArtCard';
import Button from '../components/ui/Button';
import WordReveal from '../components/ui/WordReveal';
import Footer from '../components/layout/Footer';
import ScrollFrameHeroBackground from '../components/ui/ScrollFrameHeroBackground';
import { motion, useScroll, useTransform } from 'framer-motion';



const Home = () => {
    const navigate = useNavigate();
    // Parallax Setup
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Dummy Data
    const categories = ['All', 'Paintings', 'Digital Art', 'Sculpture', 'Photography', 'Crafts', 'Services'];
    const artworks = [
        { id: 1, title: 'Abstract Harmony', artist: 'Elena R.', price: 120, image: 'https://images.unsplash.com/photo-1579783902614-a3fb39279c42?q=80&w=1000' },
        { id: 2, title: 'Mountain Whisper', artist: 'John Doe', price: 450, image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1000' },
        { id: 3, title: 'Urban Solitude', artist: 'Sarah K.', price: 200, image: 'https://images.unsplash.com/photo-1574180045003-7261d84af536?q=80&w=1000' },
        { id: 4, title: 'Golden Hour', artist: 'Mike B.', price: 85, image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000' },
        { id: 5, title: 'Digital Dreams', artist: 'Pixel Art', price: 60, image: 'https://images.unsplash.com/photo-1633167606204-20508f7aa90e?q=80&w=1000' },
        { id: 6, title: 'Sculpted Silence', artist: 'Davinci C.', price: 1200, image: 'https://images.unsplash.com/photo-1554188248-986adbb73be0?q=80&w=1000' },
        { id: 7, title: 'Neon Nights', artist: 'Cyber A.', price: 150, image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000' },
        { id: 8, title: 'Nature Pattern', artist: 'Green T.', price: 95, image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=1000' },
        { id: 9, title: 'Portraits VI', artist: 'Elena R.', price: 300, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000' },
        { id: 10, title: 'Ocean Depth', artist: 'See M.', price: 230, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000' },
    ];

    return (
        <div ref={ref} className="min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-white">
            <Navbar />

            {/* Scroll Frame Background - Fixed Layer z-0 */}
            <ScrollFrameHeroBackground />



            {/* Hero Section */}
            <main className="relative z-10 pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    // Reduced parallax intensity to prevent overlap
                    style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
                    className="text-center mb-16 md:mb-32 space-y-8 relative z-10" // Added z-index to ensure it sits above but spacing handles layout
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-block"
                    >
                        <span className="py-2 px-5 rounded-full bg-white/40 backdrop-blur-md text-on-light-text dark:text-white text-sm font-bold tracking-widest uppercase border border-on-light-border dark:border-on-dark-border shadow-sm">
                            Curated Art Marketplace
                        </span>
                    </motion.div>

                    <div className="overflow-hidden px-4">
                        <div className="text-6xl md:text-8xl font-display font-bold text-on-light-text dark:text-on-dark-text tracking-tight leading-[1.05]">
                            <WordReveal text="Discover Buy & Commission" delay={0.2} />
                            <div className="h-4"></div> {/* Spacer */}
                            <motion.span
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                className="block text-brand-primary dark:text-brand-secondary font-bold"
                            >
                                Stunning Art.
                            </motion.span>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-xl md:text-2xl text-on-light-text-body dark:text-on-dark-text-body max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Connect with the world's top creative talent.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex items-center justify-center gap-6 pt-6 pb-4" // Added bottom padding
                    >
                        <Button onClick={() => navigate('/shop')} isMagnetic variant="primary" size="lg" className="text-lg px-10">Explore Gallery</Button>
                        <Button isMagnetic variant="secondary" size="lg" className="text-lg px-10">Commission</Button>
                    </motion.div>
                </motion.div>

                {/* Filter Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 mb-20 sticky top-24 z-20 py-4 bg-background/0 backdrop-blur-[0px]" // Sticky removed or careful with blur
                >
                    {/* Note: Sticky interaction works best with a container. Keeping it simple for accurate recreation of video feel which is usually seamless */}
                    {categories.map((cat, idx) => (
                        <Button
                            key={idx}
                            isMagnetic={true}
                            variant="ghost"
                            className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 border ${idx === 0 ? 'bg-brand-primary text-white border-brand-primary shadow-lg hover:bg-brand-accent' : 'bg-white/80 dark:bg-black/40 backdrop-blur-md border-on-light-border dark:border-on-dark-border text-on-light-text-body dark:text-white hover:bg-white dark:hover:bg-white/10 hover:border-brand-primary dark:hover:border-white'}`}
                        >
                            {cat}
                        </Button>
                    ))}
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-8 space-y-8">
                    {artworks.map((art) => (
                        <ArtCardDetailed
                            key={art.id}
                            image={art.image}
                            title={art.title}
                            artist={art.artist}
                            price={art.price}
                        />
                    ))}
                </div>

                {/* Newsletter / CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'circOut' }}
                    className="mt-40 bg-black dark:bg-white/5 rounded-[3rem] p-16 text-center text-white relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 dark:from-black dark:to-transparent opacity-80"></div>
                    {/* Animated Circles */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white dark:text-on-dark-text">Join the Community</h2>
                        <p className="text-gray-400 dark:text-on-dark-text-muted text-lg">Get early access to exclusive drops and artist commissions.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input type="email" placeholder="Enter your email" className="flex-1 px-8 py-4 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-white/50 text-white placeholder-gray-500 transition-all focus:bg-white/10" />
                            <Button isMagnetic variant="primary" className="bg-white text-black hover:bg-gray-200 border-none px-10 py-4 h-auto text-lg">Subscribe</Button>
                        </div>
                    </div>
                </motion.div>
            </main>
            <Footer transparent />
        </div>
    );
};

export default Home;
