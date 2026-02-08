import { useRef, memo } from 'react';
import { Heart, Plus, Eye, ShoppingBag } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const CinematicArtCard = memo(({ id, image, title, artist, price, index, onAddToCart }) => {
    const ref = useRef(null);
    // Use a larger margin so it triggers earlier but only once
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onAddToCart) {
            onAddToCart({ id, title, artist, price, image });
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.3), ease: "easeOut" }} // Cap delay to avoid long waits
            className="mb-8 break-inside-avoid relative group will-change-transform"
        >
            <Link to={`/product/${id}`}> {/* Dynamic ID */}
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-on-light-border dark:border-dark-border shadow-soft hover:shadow-2xl hover:shadow-secondary/20 dark:hover:shadow-secondary/20 transition-all duration-500 cursor-pointer transform-gpu">

                    {/* Image with Zoom & Lazy Loading */}
                    <div className="overflow-hidden bg-light/20 dark:bg-white/5 aspect-[3/4]">
                        <img
                            loading="lazy"
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 will-change-transform"
                        />
                    </div>

                    {/* Cinematic Overlay (Blur + Darken) */}
                    <div className="absolute inset-0 bg-darker/30 dark:bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity" />

                    {/* Quick Actions (Center) */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 will-change-transform">
                        <button className="p-3 bg-white dark:bg-dark-surface rounded-full text-darker dark:text-white hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all hover:scale-110 shadow-xl" title="View Details">
                            <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-white dark:bg-dark-surface rounded-full text-darker dark:text-white hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all hover:scale-110 shadow-xl" title="Add to Cart" onClick={handleAddToCart}>
                            <ShoppingBag className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Top Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 transform translate-x-4 group-hover:translate-x-0">
                        <button className="p-2.5 bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-primary hover:border-primary transition-all" onClick={(e) => e.preventDefault()}>
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Price Pill (Floating) */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform -translate-x-4 group-hover:translate-x-0">
                        <span className="px-3 py-1 bg-white/95 dark:bg-dark-surface/90 backdrop-blur-md rounded-full text-sm font-bold text-on-light-text dark:text-on-dark-text shadow-lg border border-on-light-border dark:border-dark-border">
                            ${price}
                        </span>
                    </div>
                </div>

                {/* Content Below */}
                <div className="mt-4 px-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold text-lg leading-tight text-on-light-text dark:text-on-dark-text group-hover:text-primary transition-colors">{title}</h3>
                            <p className="text-on-light-text-body/80 dark:text-on-dark-text-body text-sm mt-1">{artist}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
});

CinematicArtCard.displayName = 'CinematicArtCard';

export default CinematicArtCard;
