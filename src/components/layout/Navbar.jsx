import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Added useNavigate
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react'; // Added User icon
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Renamed to match usage

    const { isAuthenticated, logout } = useAuth(); // Auth Hook, 'user' removed
    const { cart, setIsCartOpen } = useCart(); // Cart Hook
    const navigate = useNavigate();

    // Handle Scroll Effect (Smart Hide/Show)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled (for background blur)
            setIsScrolled(currentScrollY > 20);

            // Determine visibility (Hide on down, Show on up)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling DOWN and past threshold -> Hide
                setIsVisible(false);
            } else {
                // Scrolling UP -> Show
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Services', path: '/services' },
        // Vendor link is publicly visible, but protected on click/route
        { name: 'Vendors', path: '/vendor' },
    ];

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/'); // Redirect to home after logout
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform 
            ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
            ${isScrolled ? 'bg-brand-light-bg/95 dark:bg-brand-dark-bg/95 backdrop-blur-xl border-b border-on-light-border/20 dark:border-on-dark-border py-2 shadow-sm' : 'bg-transparent py-4'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer flex items-baseline select-none" onClick={() => navigate('/')}>
                        <span className="font-serif italic text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600 drop-shadow-sm">
                            art
                        </span>
                        <span className="font-serif text-4xl font-bold text-[#6C0102] dark:text-[#ff4d4d]">
                            VPP
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative text-sm font-bold transition-colors hover:text-brand-accent group ${isActive ? 'text-brand-accent' : 'text-on-light-text dark:text-on-dark-text'}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-80' : 'w-64'}`}>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className={`h-4 w-4 transition-colors ${isSearchFocused ? 'text-brand-primary' : 'text-on-light-text-muted dark:text-on-dark-text-muted'}`} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search art..."
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className="bg-paper border border-on-light-border/30 dark:bg-brand-dark-bg/50 dark:border-on-dark-border text-sm rounded-full pl-10 pr-4 py-2.5 w-full focus:outline-none focus:ring-1 focus:ring-brand-primary/50 text-on-light-text dark:text-on-dark-text placeholder-on-light-text-muted dark:placeholder-on-dark-text-muted"
                            />
                        </div>

                        <ThemeToggle />

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="p-2 text-on-light-text dark:text-on-dark-text hover:bg-brand-primary/10 dark:hover:bg-white/10 rounded-full transition-colors relative group"
                        >
                            <ShoppingBag className="h-5 w-5 group-hover:text-brand-primary dark:group-hover:text-white transition-colors" />
                            {cart.length > 0 && (
                                <span className="absolute top-1 right-1 h-2 w-2 bg-brand-primary rounded-full ring-1 ring-white"></span>
                            )}
                        </button>

                        {isAuthenticated ? (
                            <div className="flex items-center gap-3">
                                {/* User Avatar / Profile Link could go here */}
                                <Button variant="outline" size="sm" onClick={handleLogoutClick} className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                                    Log out
                                </Button>
                            </div>
                        ) : (
                            <Button variant="primary" size="sm" onClick={handleLoginClick} className="shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30">
                                Log in
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 -mr-2 text-on-light-text dark:text-white rounded-md"
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Full Screen Overlay) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-brand-light-bg/95 dark:bg-brand-dark-bg/95 backdrop-blur-xl md:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-3xl font-display font-bold text-on-light-text dark:text-white hover:text-brand-primary transition-colors"
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <div className="pt-8 space-y-4 max-w-xs mx-auto w-full">
                                {isAuthenticated ? (
                                    <Button className="w-full justify-center text-lg py-4" variant="outline" onClick={() => { handleLogoutClick(); setIsMenuOpen(false); }}>
                                        Log out
                                    </Button>
                                ) : (
                                    <>
                                        <Button className="w-full justify-center text-lg py-4" variant="primary" onClick={() => { handleLoginClick(); setIsMenuOpen(false); }}>
                                            Log in
                                        </Button>
                                        <Button className="w-full justify-center text-lg py-4" variant="secondary" onClick={() => { navigate('/register'); setIsMenuOpen(false); }}>
                                            Sign up
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
