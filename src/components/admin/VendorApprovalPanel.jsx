import { motion } from 'framer-motion';
import { Check, X, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

const VendorApprovalPanel = () => {
    const vendors = [
        { id: 1, name: "Pixel Perfect", type: "Digital Artist", portfolio: "behance.net/pixel", status: "Pending" },
        { id: 2, name: "Clay & Co", type: "Sculptor", portfolio: "instagram.com/clayco", status: "Pending" },
        { id: 3, name: "Modern Canvas", type: "Painter", portfolio: "moderncanvas.art", status: "Reviewed" },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text">Vendor Approvals</h1>

            <div className="bg-paper dark:bg-white/5 rounded-2xl border border-on-light-border/20 dark:border-on-dark-border overflow-hidden shadow-sm">
                <table className="w-full">
                    <thead className="bg-brand-light-bg dark:bg-white/5 border-b border-on-light-border/20 dark:border-on-dark-border">
                        <tr>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Vendor Name</th>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Specialty</th>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Portfolio</th>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Status</th>
                            <th className="py-4 px-6 text-right text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-on-light-border/10 dark:divide-on-dark-border">
                        {vendors.map((vendor, idx) => (
                            <motion.tr
                                key={vendor.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group hover:bg-brand-light-bg/50 dark:hover:bg-white/5"
                            >
                                <td className="py-4 px-6 font-bold text-on-light-text dark:text-on-dark-text">{vendor.name}</td>
                                <td className="py-4 px-6 text-on-light-text-body dark:text-on-dark-text-body">{vendor.type}</td>
                                <td className="py-4 px-6">
                                    <a href="#" className="text-brand-primary hover:underline flex items-center gap-1 text-sm">
                                        View Portfolio <ExternalLink className="w-3 h-3" />
                                    </a>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold uppercase">{vendor.status}</span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button variant="primary" size="sm" className="bg-green-600 hover:bg-green-700 h-8 px-3 border-none">
                                            <Check className="w-4 h-4" />
                                        </Button>
                                        <Button variant="outline" size="sm" className="h-8 px-3 border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300">
                                            <X className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VendorApprovalPanel;
