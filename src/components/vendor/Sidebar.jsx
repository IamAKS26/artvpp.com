import { motion } from 'framer-motion';
import { Home, Image, Upload, PenTool, Layout, DollarSign, Settings, ShoppingBag } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'overview', label: 'Overview', icon: Home },
        { id: 'artworks', label: 'My Artworks', icon: Image },
        { id: 'upload', label: 'Upload New', icon: Upload },
        { id: 'services', label: 'My Services', icon: PenTool },
        { id: 'commissions', label: 'Requests', icon: Layout },
        { id: 'orders', label: 'Orders', icon: ShoppingBag },
        { id: 'earnings', label: 'Earnings', icon: DollarSign },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-paper dark:bg-brand-dark-bg border-r border-on-light-border/20 dark:border-on-dark-border z-40 hidden lg:flex flex-col">
            {/* Logo Area */}
            <div className="h-20 flex items-center px-8 border-b border-on-light-border/20 dark:border-on-dark-border">
                <h2 className="font-display text-xl font-bold tracking-tight text-on-light-text dark:text-white">
                    Artist<span className="text-brand-secondary">Panel</span>
                </h2>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${isActive ? 'text-on-light-text dark:text-white' : 'text-on-light-text-muted dark:text-on-dark-text-muted hover:text-on-light-text dark:hover:text-white hover:bg-brand-light-bg dark:hover:bg-white/5'}`}
                        >
                            {/* Active Indicator & Background */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-brand-light-bg dark:bg-white/10 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <item.icon className={`relative z-10 w-5 h-5 transition-colors ${isActive ? 'text-brand-primary dark:text-white' : 'text-on-light-text-muted dark:text-on-dark-text-muted group-hover:text-brand-primary dark:group-hover:text-white'}`} />
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            {/* Profile Snippet */}
            <div className="p-4 border-t border-on-light-border/20 dark:border-on-dark-border">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-light-bg dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <p className="text-sm font-bold text-on-light-text dark:text-on-dark-text">Sarah Jenkins</p>
                        <p className="text-xs text-on-light-text-muted dark:text-on-dark-text-muted">Pro Seller</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
