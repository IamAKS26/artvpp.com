import { memo } from 'react';
import { Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceListingCard = memo(({ title, artist, price, rating, reviews, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group cursor-pointer"
        >
            {/* Image Thumbnail */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-brand-light-bg/20 dark:bg-white/5">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 right-3 p-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full text-black dark:text-white hover:bg-white hover:text-brand-primary transition-colors">
                    <Heart className="w-4 h-4" />
                </div>
            </div>

            {/* Info */}
            <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-on-light-text dark:text-on-dark-text leading-tight group-hover:underline decoration-1 underline-offset-2 transition-colors">{title}</h3>
                    <div className="flex items-center gap-1 text-xs font-bold shrink-0 text-on-light-text dark:text-on-dark-text">
                        <Star className="w-3 h-3 fill-on-light-text dark:fill-white text-on-light-text dark:text-white" />
                        <span>{rating}</span>
                        <span className="text-on-light-text-muted dark:text-on-dark-text-muted font-normal">({reviews})</span>
                    </div>
                </div>

                <p className="text-sm text-on-light-text-muted dark:text-on-dark-text-body">by <span className="text-on-light-text dark:text-on-dark-text font-medium">{artist}</span></p>

                <div className="pt-2 flex items-center justify-between border-t border-on-light-border/20 dark:border-white/10 mt-3 text-sm">
                    <span className="text-on-light-text-muted dark:text-on-dark-text-muted text-xs uppercase tracking-wide">Starting at</span>
                    <span className="font-bold text-base text-on-light-text dark:text-on-dark-text">${price}</span>
                </div>
            </div>
        </motion.div>
    );
});

export default ServiceListingCard;
