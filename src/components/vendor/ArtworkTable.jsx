import { motion } from 'framer-motion';
import { MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';
import Button from '../ui/Button';

const ArtworkTable = () => {
    const artworks = [
        { id: 1, title: 'Abstract Harmony', price: 120, type: 'Physical', status: 'Active', image: 'https://images.unsplash.com/photo-1579783902614-a3fb39279c42?q=80&w=100' },
        { id: 2, title: 'Mountain Whisper', price: 450, type: 'Physical', status: 'Sold', image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=100' },
        { id: 3, title: 'Digital Dreams', price: 60, type: 'Digital', status: 'Active', image: 'https://images.unsplash.com/photo-1633167606204-20508f7aa90e?q=80&w=100' },
        { id: 4, title: 'Neon Nights', price: 150, type: 'Digital', status: 'Draft', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=100' },
        { id: 5, title: 'Sculpted Silence', price: 1200, type: 'Physical', status: 'Active', image: 'https://images.unsplash.com/photo-1554188248-986adbb73be0?q=80&w=100' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text">My Artworks</h1>
                <Button variant="primary" size="sm">Add New</Button>
            </div>

            <div className="bg-paper dark:bg-white/5 rounded-2xl border border-on-light-border/20 dark:border-on-dark-border overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-brand-light-bg dark:bg-white/5 border-b border-on-light-border/20 dark:border-on-dark-border text-left">
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Artwork</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Type</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Price</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Status</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-on-light-border/10 dark:divide-on-dark-border">
                            {artworks.map((art, index) => (
                                <motion.tr
                                    key={art.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group hover:bg-brand-light-bg/50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-4">
                                            <img src={art.image} alt="" className="w-12 h-12 rounded-lg object-cover shadow-sm bg-brand-light-bg dark:bg-white/10" />
                                            <span className="font-medium text-on-light-text dark:text-on-dark-text">{art.title}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-on-light-text-muted dark:text-on-dark-text-muted">{art.type}</td>
                                    <td className="py-4 px-6 font-medium text-on-light-text dark:text-on-dark-text">${art.price}</td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                            ${art.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                art.status === 'Sold' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                                            {art.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-brand-light-bg dark:hover:bg-white/10 rounded-lg text-on-light-text-muted dark:text-on-dark-text-muted"><Edit className="w-4 h-4" /></button>
                                            <button className="p-2 hover:bg-red-50 hover:text-red-500 rounded-lg text-on-light-text-muted dark:text-on-dark-text-muted"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ArtworkTable;
