import { motion } from 'framer-motion';
import { Edit, Trash2, Star } from 'lucide-react';
import Button from '../ui/Button';

const ProductManagementTable = () => {
    const products = [
        { id: 101, title: 'Abstract Harmony', vendor: 'Elena R.', price: '$3,200', category: 'Painting', status: 'Active' },
        { id: 102, title: 'Neon Nights', vendor: 'CyberArt', price: '$150', category: 'Digital', status: 'Active' },
        { id: 103, title: 'Golden Hour', vendor: 'Mike B.', price: '$850', category: 'Photography', status: 'Flagged' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text">Manage Products</h1>
                <input type="text" placeholder="Search products..." className="px-4 py-2 rounded-xl border border-on-light-border/20 dark:border-on-dark-border bg-paper dark:bg-white/5 text-on-light-text dark:text-on-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
            </div>

            <div className="bg-paper dark:bg-white/5 rounded-2xl border border-on-light-border/20 dark:border-on-dark-border overflow-hidden shadow-sm">
                <table className="w-full">
                    <thead className="bg-brand-light-bg dark:bg-white/5 border-b border-on-light-border/20 dark:border-on-dark-border">
                        <tr>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Product</th>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Vendor</th>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Category</th>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Price</th>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Status</th>
                            <th className="py-4 px-6 text-right text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-on-light-border/10 dark:divide-on-dark-border">
                        {products.map((product, idx) => (
                            <motion.tr
                                key={product.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group hover:bg-brand-light-bg/50 dark:hover:bg-white/5"
                            >
                                <td className="py-4 px-6 font-medium text-on-light-text dark:text-on-dark-text">{product.title}</td>
                                <td className="py-4 px-6 text-on-light-text-body dark:text-on-dark-text-body">{product.vendor}</td>
                                <td className="py-4 px-6 text-sm text-on-light-text-muted dark:text-on-dark-text-muted">{product.category}</td>
                                <td className="py-4 px-6 font-bold text-on-light-text dark:text-on-dark-text">{product.price}</td>
                                <td className="py-4 px-6">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-yellow-500"><Star className="w-4 h-4" /></Button>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-500"><Edit className="w-4 h-4" /></Button>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500"><Trash2 className="w-4 h-4" /></Button>
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

export default ProductManagementTable;
