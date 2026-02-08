import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Footer = ({ transparent = false }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`relative z-10 pt-20 pb-10 transition-all duration-300 ${transparent
            ? 'bg-white/30 dark:bg-black/40 backdrop-blur-xl border-t border-white/20 dark:border-white/10 shadow-lg'
            : 'bg-white dark:bg-dark border-t border-gray-100 dark:border-white/10'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16"
                >
                    {/* Brand Column */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="flex items-baseline mb-6">
                            <span className="font-serif italic text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600 drop-shadow-sm">
                                art
                            </span>
                            <span className="font-serif text-3xl font-bold text-[#6C0102] dark:text-[#ff4d4d]">
                                VPP
                            </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            The premium marketplace for curated art, design, and creative commissions. Connecting visionaries with collectors.
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-gray-50 dark:bg-white/5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-black dark:hover:bg-primary hover:text-white transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Column 1 */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Marketplace</h3>
                        <ul className="space-y-3">
                            {['Paintings', 'Digital Art', 'Sculpture', 'Photography', 'NFTs'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-primary text-sm transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Links Column 2 */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Company</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-primary text-sm transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter Column */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Stay Updated</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Subscribe to our newsletter for the latest drops and artist features.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm rounded-full px-4 py-2 flex-grow focus:outline-none focus:border-black dark:focus:border-primary transition-colors text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500"
                                required
                            />
                            <button type="submit" className="p-2 bg-black dark:bg-primary text-white rounded-full hover:bg-gray-800 dark:hover:bg-accent transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    className="pt-8 border-t border-gray-100 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 dark:text-gray-500"
                >
                    <p>&copy; {currentYear} ArtVPP Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookies</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
