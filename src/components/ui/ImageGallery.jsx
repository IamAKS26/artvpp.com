import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="space-y-6">
            {/* Main Image View */}
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden bg-gray-100 cursor-zoom-in group shadow-sm">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={selectedIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        src={images[selectedIndex]}
                        alt="Artwork Preview"
                        className="w-full h-full object-cover will-change-transform"
                    />
                </AnimatePresence>

                {/* Hover Hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={`
                    relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300
                    ${selectedIndex === idx ? 'ring-2 ring-black ring-offset-2 scale-105' : 'opacity-70 hover:opacity-100 hover:scale-105'}
                `}
                    >
                        <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
