import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabsSection = ({ product }) => {
    const [activeTab, setActiveTab] = useState('Description');
    const tabs = ['Description', 'Artist', 'Reviews', 'Shipping'];

    // Default Fallbacks
    const description = product?.description || "No description available.";
    const artist = product?.artist || "Unknown Artist";
    const category = product?.category || "Art";
    const type = product?.type || "Physical";

    return (
        <div className="w-full">
            {/* Tab Headers */}
            <div className="flex gap-8 border-b border-gray-100 dark:border-white/10 mb-8 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                             pb-4 text-sm font-medium transition-colors relative whitespace-nowrap
                             ${activeTab === tab ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}
                        `}
                    >
                        {tab}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 dark:text-gray-300 leading-relaxed font-light"
                >
                    {activeTab === 'Description' && (
                        <div className="space-y-4 max-w-2xl">
                            <p className="text-lg text-black dark:text-white mb-2">About the Artwork</p>
                            <p>{description}</p>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-white/10 mt-4">
                                <div>
                                    <span className="block text-xs uppercase tracking-wide text-gray-400">Category</span>
                                    <span className="font-medium">{category}</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wide text-gray-400">Type</span>
                                    <span className="font-medium">{type}</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wide text-gray-400">Authenticity</span>
                                    <span className="font-medium">Verified Original</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'Artist' && (
                        <div>
                            <p className="mb-4"><strong className="text-black dark:text-white">{artist}</strong> is a verified creator on ArtVPP. Known for their unique style in {category.toLowerCase()}.</p>
                            <a href="#" className="text-black dark:text-white underline hover:opacity-80">View full profile</a>
                        </div>
                    )}
                    {activeTab === 'Reviews' && (
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl font-bold text-black">4.9</span>
                                <div className="flex text-yellow-400">★★★★★</div>
                                <span className="text-sm text-gray-500">(12 Verified Reviews)</span>
                            </div>
                            <p className="italic">"Absolutely stunning in person. The textures are incredible." — Sarah J.</p>
                        </div>
                    )}
                    {activeTab === 'Shipping' && (
                        <div>
                            <p>Ships from New York, USA in a reinforced wooden crate.</p>
                            <p className="mt-2 text-sm text-gray-500">Free shipping worldwide for orders over $500.</p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TabsSection;
