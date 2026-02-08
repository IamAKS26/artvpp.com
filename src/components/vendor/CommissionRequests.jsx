import { motion } from 'framer-motion';
import { MessageCircle, Check, X } from 'lucide-react';
import Button from '../ui/Button';

const CommissionRequests = () => {
    const requests = [
        { id: 1, client: "Alice Cooper", type: "Oil Portrait", deadline: "Oct 24, 2024", budget: "$450" },
        { id: 2, client: "Design Agency", type: "Logo Bundle", deadline: "Nov 01, 2024", budget: "$1,200" },
        { id: 3, client: "Michael B.", type: "Digital Character", deadline: "Oct 15, 2024", budget: "$150" },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text">Commission Requests</h1>

            <div className="grid grid-cols-1 gap-6">
                {requests.map((req, idx) => (
                    <motion.div
                        key={req.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-paper dark:bg-white/5 p-6 rounded-2xl border border-on-light-border/20 dark:border-on-dark-border shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-bold text-lg text-on-light-text dark:text-on-dark-text">{req.type}</h3>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase rounded-full tracking-wide">Pending</span>
                            </div>
                            <p className="text-on-light-text-muted dark:text-on-dark-text-muted text-sm">Request from <span className="text-on-light-text dark:text-on-dark-text font-medium">{req.client}</span> • Deadline: {req.deadline}</p>
                        </div>

                        <div className="text-right pr-6 border-r border-on-light-border/20 dark:border-on-dark-border hidden md:block">
                            <span className="block text-xs text-on-light-text-muted/70 dark:text-on-dark-text-muted/70 uppercase tracking-wide">Offer</span>
                            <span className="text-xl font-bold text-green-600">{req.budget}</span>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <Button variant="outline" size="sm" className="flex-1 md:flex-none border-on-light-border/20 dark:border-on-dark-border text-on-light-text-body dark:text-on-dark-text-body hover:bg-brand-light-bg dark:hover:bg-white/5"><MessageCircle className="w-4 h-4 mr-2" /> Chat</Button>
                            <Button variant="primary" size="sm" className="bg-green-600 hover:bg-green-700 text-white border-none flex-1 md:flex-none"><Check className="w-4 h-4 mr-2" /> Accept</Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50 flex-1 md:flex-none"><X className="w-4 h-4" /></Button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {requests.length === 0 && (
                <div className="text-center py-20 bg-brand-light-bg dark:bg-white/5 rounded-3xl border border-on-light-border/20 dark:border-on-dark-border dashed">
                    <p className="text-on-light-text-muted dark:text-on-dark-text-muted">No pending requests.</p>
                </div>
            )}
        </div>
    );
};

export default CommissionRequests;
