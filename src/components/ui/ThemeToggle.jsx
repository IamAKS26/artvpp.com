import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative w-16 h-9 rounded-full px-1 flex items-center transition-colors duration-500
                ${isDark ? 'bg-white/10 border border-white/20' : 'bg-gray-100 border border-gray-200'}
            `}
            aria-label="Toggle Theme"
        >
            {/* Sliding Thumb */}
            <motion.div
                className="absolute w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center z-10"
                layout
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30
                }}
                style={{
                    left: isDark ? 'calc(100% - 2rem)' : '0.25rem'
                }}
            >
                <div className="relative w-4 h-4 overflow-hidden">
                    {/* Icons Swap Animation */}
                    <motion.div
                        initial={false}
                        animate={{ y: isDark ? -20 : 0, opacity: isDark ? 0 : 1 }}
                        className="absolute inset-0 flex items-center justify-center text-primary"
                    >
                        <Sun className="w-4 h-4 fill-current" />
                    </motion.div>
                    <motion.div
                        initial={false}
                        animate={{ y: isDark ? 0 : 20, opacity: isDark ? 1 : 0 }}
                        className="absolute inset-0 flex items-center justify-center text-primary"
                    >
                        <Moon className="w-4 h-4 fill-current" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Background Icons (Static hints) */}
            <div className={`flex justify-between w-full px-2 text-[10px] font-bold ${isDark ? 'text-white/70' : 'text-dark/70'}`}>
                <span className="opacity-0">L</span> {/* Spacers */}
                <span className="opacity-0">D</span>
            </div>
        </button>
    );
};

export default ThemeToggle;
