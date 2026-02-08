import { motion } from 'framer-motion';
import Button from './Button';
import { Heart, Star, Palette, Truck, ShieldCheck, Download } from 'lucide-react';

const StickyBuyPanel = ({ title, artist, price, isDigital, onAddToCart }) => {
    return (
        <div className="sticky top-24 space-y-8">

            {/* Header Info */}
            <div className="space-y-2">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-on-light-muted dark:text-dark-text-muted font-medium"
                >
                    <span className="bg-black dark:bg-primary text-white px-2 py-0.5 rounded text-xs tracking-wider uppercase">
                        {isDigital ? "Digital Friend" : "Physical Art"}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> 4.9 (12 reviews)</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-display font-bold text-on-light-text dark:text-on-dark-text leading-tight"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 pt-1"
                >
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Artist" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-on-light-text dark:text-on-dark-text leading-none">{artist}</p>
                        <p className="text-xs text-primary font-medium flex items-center gap-1">Verified Artist <ShieldCheck className="w-3 h-3" /></p>
                    </div>
                </motion.div>
            </div>

            {/* Price & Actions */}
            <div className="space-y-6 pt-4 border-t border-gray-100 dark:border-white/10">
                <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-on-light-text dark:text-on-dark-text">${price}</span>
                    <span className="text-sm text-on-light-muted dark:text-on-dark-text-muted mb-2">USD</span>
                </div>

                <div className="flex flex-col gap-3">
                    <Button
                        variant="primary"
                        isMagnetic={true}
                        size="lg"
                        className="w-full text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30"
                        onClick={onAddToCart}
                    >
                        Add to Cart
                    </Button>
                    <div className="flex gap-3">
                        <Button variant="outline" className="flex-1 gap-2 border-on-light-border dark:border-dark-border hover:border-primary dark:hover:border-white text-on-light-text dark:text-on-dark-text">
                            <Heart className="w-4 h-4" /> Save
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2 border-on-light-border dark:border-dark-border hover:border-primary dark:hover:border-white text-on-light-text dark:text-on-dark-text">
                            <Palette className="w-4 h-4" /> Commission
                        </Button>
                    </div>
                </div>
            </div>

            {/* Assurance Badges */}
            <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/5">
                    <div className="p-2 bg-white dark:bg-white/10 rounded-full shadow-sm">
                        {isDigital ? <Download className="w-4 h-4 text-on-light-text-body dark:text-white" /> : <Truck className="w-4 h-4 text-on-light-text-body dark:text-white" />}
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-on-light-text dark:text-on-dark-text">{isDigital ? "Instant Download" : "Global Shipping"}</h4>
                        <p className="text-xs text-on-light-text-body/80 dark:text-on-dark-text-muted leading-relaxed">
                            {isDigital ? "High-res file available immediately after purchase." : "Tracked delivery within 5-7 business days."}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/5">
                    <div className="p-2 bg-white dark:bg-white/10 rounded-full shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-on-light-text-body dark:text-white" />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-on-light-text dark:text-on-dark-text">Buyer Protection</h4>
                        <p className="text-xs text-on-light-text-body/80 dark:text-on-dark-text-muted leading-relaxed">
                            Verified authenticity. 30-day money-back guarantee.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StickyBuyPanel;
