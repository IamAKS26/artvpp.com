import { motion } from 'framer-motion';
import { DollarSign, ShoppingBag, Palette, TrendingUp } from 'lucide-react';

const StatsCard = ({ title, value, change, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-paper dark:bg-white/5 p-6 rounded-2xl shadow-sm border border-on-light-border/20 dark:border-on-dark-border flex items-start justify-between hover:shadow-md transition-shadow"
    >
        <div>
            <p className="text-on-light-text-muted dark:text-on-dark-text-muted text-sm font-medium mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-on-light-text dark:text-on-dark-text tracking-tight">{value}</h3>
            <span className={`text-xs font-semibold mt-2 inline-block ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {change} from last month
            </span>
        </div>
        <div className="p-3 bg-brand-light-bg dark:bg-white/10 rounded-xl">
            <Icon className="w-6 h-6 text-on-light-text-body dark:text-on-dark-text-body" />
        </div>
    </motion.div>
);

const OverviewStats = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text"
                >
                    Dashboard Overview
                </motion.h1>
                <div className="text-sm text-on-light-text-muted dark:text-on-dark-text-muted font-medium">Updated just now</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard title="Total Earnings" value="$12,450" change="+18%" icon={DollarSign} delay={0.1} />
                <StatsCard title="Active Orders" value="14" change="+4" icon={ShoppingBag} delay={0.2} />
                <StatsCard title="Total Artworks" value="32" change="+2" icon={Palette} delay={0.3} />
                <StatsCard title="Profile Views" value="4.2k" change="+12%" icon={TrendingUp} delay={0.4} />
            </div>

            {/* Placeholder for Graph */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-paper dark:bg-white/5 rounded-3xl p-8 border border-on-light-border/20 dark:border-on-dark-border shadow-sm h-80 flex items-center justify-center relative overflow-hidden"
            >
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-light-bg to-transparent dark:from-white/5" />
                <div className="text-center z-10">
                    <p className="text-on-light-text-muted dark:text-on-dark-text-muted font-medium">Sales Sparkline Graph (Placeholder)</p>
                    <p className="text-xs text-on-light-text-muted/70 dark:text-on-dark-text-muted/70">Requires chart.js integration</p>
                </div>
            </motion.div>
        </div>
    );
};

export default OverviewStats;
