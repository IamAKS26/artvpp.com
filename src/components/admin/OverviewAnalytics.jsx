import { motion } from 'framer-motion';
import { DollarSign, Users, ShoppingCart, UserCheck, TrendingUp } from 'lucide-react';

const StatsCard = ({ title, value, change, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-paper dark:bg-white/5 p-6 rounded-2xl shadow-sm border border-on-light-border/20 dark:border-on-dark-border flex items-start justify-between hover:shadow-md transition-shadow group"
    >
        <div>
            <p className="text-on-light-text-muted dark:text-on-dark-text-muted text-sm font-medium mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-on-light-text dark:text-on-dark-text tracking-tight group-hover:text-brand-primary transition-colors">{value}</h3>
            <span className={`text-xs font-semibold mt-2 inline-block ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {change} this week
            </span>
        </div>
        <div className="p-3 bg-brand-light-bg dark:bg-white/10 rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6 text-brand-primary dark:text-white group-hover:text-white" />
        </div>
    </motion.div>
);

const OverviewAnalytics = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text"
                >
                    Platform Overview
                </motion.h1>
                <div className="text-sm text-on-light-text-muted dark:text-on-dark-text-muted font-medium">Last 7 Days</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard title="Total Revenue" value="$45,231" change="+12%" icon={DollarSign} delay={0.1} />
                <StatsCard title="Total Orders" value="1,204" change="+8%" icon={ShoppingCart} delay={0.2} />
                <StatsCard title="New Users" value="340" change="+22%" icon={Users} delay={0.3} />
                <StatsCard title="Active Vendors" value="85" change="+3" icon={UserCheck} delay={0.4} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue Graph Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-paper dark:bg-white/5 rounded-3xl p-8 border border-on-light-border/20 dark:border-on-dark-border shadow-sm h-80 flex flex-col justify-between relative overflow-hidden"
                >
                    <div className="flex justify-between items-center z-10">
                        <h3 className="font-bold text-lg text-on-light-text dark:text-on-dark-text">Revenue Trend</h3>
                        <TrendingUp className="text-green-500 w-5 h-5" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-light-bg to-transparent opacity-50 dark:opacity-10" />
                    <div className="text-center z-10 flex-1 flex items-center justify-center">
                        <p className="text-on-light-text-muted dark:text-on-dark-text-muted font-medium">Chart Visualization Area</p>
                    </div>
                </motion.div>

                {/* Activity Feed */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-paper dark:bg-white/5 rounded-3xl p-8 border border-on-light-border/20 dark:border-on-dark-border shadow-sm h-80 overflow-y-auto"
                >
                    <h3 className="font-bold text-lg mb-4 text-on-light-text dark:text-on-dark-text">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-4 text-sm border-b border-on-light-border/10 dark:border-on-dark-border pb-2 last:border-0">
                                <div className="w-2 h-2 rounded-full bg-brand-primary" />
                                <p className="text-on-light-text-body dark:text-on-dark-text-body"><span className="font-bold text-on-light-text dark:text-on-dark-text">New Vendor</span> request from "Studio Art"</p>
                                <span className="ml-auto text-xs text-on-light-text-muted dark:text-on-dark-text-muted">2m ago</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OverviewAnalytics;
