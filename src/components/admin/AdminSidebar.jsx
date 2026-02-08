import { motion } from 'framer-motion';
import { LayoutDashboard, Users, ShoppingBag, FileCheck, Shield, BarChart2, Settings, Package } from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'approvals', label: 'Vendor Approvals', icon: FileCheck },
        { id: 'products', label: 'Products', icon: Package },
        { id: 'services', label: 'Services', icon: Shield },
        { id: 'orders', label: 'Orders', icon: ShoppingBag },
        { id: 'users', label: 'Users', icon: Users },
        { id: 'reports', label: 'Reports', icon: BarChart2 },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-paper dark:bg-brand-dark-bg border-r border-on-light-border/20 dark:border-on-dark-border z-40 hidden lg:flex flex-col text-on-light-text dark:text-on-dark-text">
            {/* Logo Area */}
            <div className="h-20 flex items-center px-8 border-b border-on-light-border/20 dark:border-on-dark-border">
                <h2 className="font-display text-xl font-bold tracking-tight text-brand-primary">
                    ArtVPP <span className="text-on-light-text dark:text-on-dark-text">Admin</span>
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
                            className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${isActive ? 'text-white' : 'text-on-light-text-muted dark:text-on-dark-text-muted hover:text-brand-primary dark:hover:text-white hover:bg-brand-primary/5 dark:hover:bg-white/5'}`}
                        >
                            {/* Active Indicator & Background */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeAdminTab"
                                    className="absolute inset-0 bg-brand-primary shadow-lg shadow-brand-primary/20 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <item.icon className={`relative z-10 w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-current group-hover:text-brand-primary dark:group-hover:text-white'}`} />
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            {/* Admin Profile */}
            <div className="p-4 border-t border-on-light-border/20 dark:border-on-dark-border">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-primary/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold border border-white/10">
                        AD
                    </div>
                    <div>
                        <p className="text-sm font-bold text-on-light-text dark:text-on-dark-text">Admin User</p>
                        <p className="text-xs text-brand-secondary">Super Admin</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;
