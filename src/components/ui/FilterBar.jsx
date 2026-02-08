import { useState, memo } from 'react';
import { Search, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const FilterBar = memo(({ searchQuery, setSearchQuery, activeFilter, setActiveFilter, setSortBy }) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    // Memoized lists to prevent re-creation (could be props too)
    const filters = ['All', 'Paintings', 'Digital Art', 'Photography', 'Sculpture', 'Crafts'];

    return (
        <div className="w-full space-y-6">

            {/* Top Row: Search + Sort + Filter Toggle */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Animated Search */}
                <motion.div
                    layout // Use layout animation for smoother width changes
                    transition={{ duration: 0.3 }}
                    className={`relative group ${isSearchFocused ? 'md:max-w-md' : 'md:max-w-xs'} w-full`}
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className={`h-4 w-4 transition-colors ${isSearchFocused ? 'text-primary' : 'text-on-light-muted dark:text-white/60'}`} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search collection..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        className="w-full bg-white dark:bg-white/5 border border-on-light-border dark:border-white/10 text-sm rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm hover:shadow-md text-on-light-text dark:text-white placeholder-on-light-muted dark:placeholder-white/40"
                    />
                </motion.div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                    {/* Sort Dropdown (Mock) */}
                    <div className="relative hidden md:block group">
                        <button className="flex items-center gap-2 px-5 py-3.5 bg-white dark:bg-white/5 border border-on-light-border dark:border-white/10 rounded-full hover:shadow-md transition-all text-sm font-medium text-on-light-text-body dark:text-white hover:text-primary dark:hover:text-white hover:border-primary">
                            <span>Sort by: Trending</span>
                            <ChevronDown className="w-4 h-4 text-on-light-muted dark:text-white/60 group-hover:text-primary transition-colors" />
                        </button>
                    </div>

                    <Button
                        variant="outline"
                        className="flex items-center gap-2 px-6 py-3.5 h-auto border-on-light-border dark:border-dark-border text-on-light-text-body dark:text-white hover:border-primary hover:bg-white/80 dark:hover:bg-white/10"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span className="hidden sm:inline">Filters</span>
                    </Button>
                </div>
            </div>

            {/* Expanded Filters Area (AnimateHeight) */}
            <AnimatePresence>
                {showFilters && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'linear' }} // Faster transition
                        className="overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-sm will-change-[height,opacity]"
                    >
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Price Range */}
                            <div>
                                <h3 className="text-sm font-semibold mb-4">Price Range</h3>
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>$0</span>
                                    <span>$10,000+</span>
                                </div>
                            </div>
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-semibold mb-4">Colors</h3>
                                <div className="flex gap-2">
                                    {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-black', 'bg-yellow-500'].map(c => (
                                        <button key={c} className={`w-8 h-8 rounded-full ${c} ring-2 ring-offset-2 ring-transparent hover:ring-gray-200 transition-all`}></button>
                                    ))}
                                </div>
                            </div>
                            {/* Styles */}
                            <div>
                                <h3 className="text-sm font-semibold mb-4">Style</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Modern', 'Minimalist', 'Abstract', 'Classic'].map(s => (
                                        <span key={s} className="px-3 py-1 bg-gray-50 rounded-md text-xs font-medium text-gray-600 border border-gray-100 cursor-pointer hover:bg-gray-100 hover:text-black">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Categories Chips */}
            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar pt-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`
                    px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap
                    ${activeFilter === filter
                                ? 'bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-lg shadow-secondary/40 transform scale-105'
                                : 'bg-white dark:bg-white/5 backdrop-blur-md text-on-light-text-body dark:text-gray-200 border-on-light-border dark:border-white/10 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10'}
                `}
                    >
                        {filter}
                    </button>
                ))}
            </div>

        </div>
    );
});

FilterBar.displayName = 'FilterBar';

export default FilterBar;
