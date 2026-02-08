import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ImageGallery from '../components/ui/ImageGallery';
import StickyBuyPanel from '../components/ui/StickyBuyPanel';
import TabsSection from '../components/ui/TabsSection';
import CinematicArtCard from '../components/ui/CinematicArtCard';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    // Find the product
    const product = products.find(p => p.id === id);

    // Fallback if not found (or loading state)
    if (!product) {
        return <div className="min-h-screen flex items-center justify-center text-2xl">Product not found</div>;
    }

    // Related artworks (exclude current)
    const relatedArtworks = products.filter(p => p.id !== id).slice(0, 4);

    const handleAddToCart = () => {
        addToCart(product);
        // Optional: Show toast notification
    };

    return (
        <div className="min-h-screen text-on-light-text-body dark:text-on-dark-text-body selection:bg-black selection:text-white">
            <Navbar />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[0%] right-[0%] w-[50%] h-[50%] bg-brand-light/90 blur-[120px] rounded-full mix-blend-multiply opacity-80"></div>
                <div className="absolute top-[20%] left-[0%] w-[40%] h-[40%] bg-brand-soft/70 blur-[120px] rounded-full mix-blend-multiply opacity-80"></div>
            </div>

            <main className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Product Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 mb-20 lg:mb-32">

                    {/* Left: Gallery (7 Cols) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative lg:sticky lg:top-24"
                        >
                            {/* Pass array of images (mock data might only have one, so fallback) */}
                            <ImageGallery images={product.images || [product.image]} />

                            {/* Tabs below image on Desktop */}
                            <div className="mt-16 hidden lg:block">
                                <TabsSection product={product} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Info Panel (5 Cols) */}
                    <div className="lg:col-span-5 relative z-20">
                        <StickyBuyPanel
                            title={product.title}
                            artist={product.artist}
                            price={product.price}
                            isDigital={product.type === 'Digital'}
                            onAddToCart={handleAddToCart}
                        />

                        {/* Tabs on Mobile (below panel) */}
                        <div className="mt-12 lg:hidden">
                            <TabsSection product={product} />
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 lg:mb-32 bg-darker dark:bg-dark-surface rounded-[2rem] p-8 lg:p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl font-display font-bold text-white">Love this style?</h2>
                        <p className="text-white/90 font-medium">Request a custom one-of-a-kind commission from {product.artist} tailored to your space.</p>
                        <Button variant="primary" className="bg-white text-black hover:bg-gray-200 border-none px-8 w-full sm:w-auto">Request Commission</Button>
                    </div>
                </motion.div>

                {/* Related Artworks */}
                <div className="mb-20">
                    <h3 className="text-2xl font-display font-bold mb-8">You might also like</h3>
                    <div className="columns-2 gap-4 md:columns-4 md:gap-6 space-y-4 md:space-y-6">
                        {relatedArtworks.map((art, index) => (
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
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default ProductDetail;
