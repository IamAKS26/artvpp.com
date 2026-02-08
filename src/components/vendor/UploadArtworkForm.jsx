import { motion } from 'framer-motion';
import { Upload, X } from 'lucide-react';
import Button from '../ui/Button';

const UploadArtworkForm = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text">Upload New Artwork</h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-paper dark:bg-white/5 rounded-3xl border border-on-light-border/20 dark:border-on-dark-border p-8 shadow-sm space-y-8"
            >
                {/* Drag Drop Zone */}
                <div className="border-2 border-dashed border-on-light-border/20 dark:border-on-dark-border rounded-2xl p-12 text-center hover:border-brand-primary dark:hover:border-brand-primary hover:bg-brand-light-bg/30 dark:hover:bg-white/5 transition-all cursor-pointer group">
                    <div className="w-16 h-16 bg-brand-light-bg dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Upload className="w-8 h-8 text-on-light-text-muted dark:text-on-dark-text-muted group-hover:text-brand-primary dark:group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-on-light-text dark:text-on-dark-text">Drag and drop your art here</h3>
                    <p className="text-on-light-text-muted dark:text-on-dark-text-muted text-sm">JPG, PNG, WEBP up to 50MB</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-on-light-text-body dark:text-on-dark-text-body mb-2">Artwork Title</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-input-light-border dark:border-input-dark-border bg-input-light-bg dark:bg-input-dark-bg text-on-light-text dark:text-on-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="e.g. Midnight Solitude" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-on-light-text-body dark:text-on-dark-text-body mb-2">Category</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-input-light-border dark:border-input-dark-border bg-input-light-bg dark:bg-input-dark-bg text-on-light-text dark:text-on-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all">
                                <option>Painting</option>
                                <option>Digital Art</option>
                                <option>Sculpture</option>
                                <option>Photography</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-on-light-text-body dark:text-on-dark-text-body mb-2">Price ($)</label>
                            <input type="number" className="w-full px-4 py-3 rounded-xl border border-input-light-border dark:border-input-dark-border bg-input-light-bg dark:bg-input-dark-bg text-on-light-text dark:text-on-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="0.00" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-on-light-text-body dark:text-on-dark-text-body mb-2">Description</label>
                        <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-input-light-border dark:border-input-dark-border bg-input-light-bg dark:bg-input-dark-bg text-on-light-text dark:text-on-dark-text focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="Tell the story behind this piece..." />
                    </div>

                    {/* Toggles */}
                    <div className="flex items-center justify-between p-4 bg-brand-light-bg dark:bg-white/5 rounded-xl">
                        <div>
                            <h4 className="font-bold text-sm text-on-light-text dark:text-on-dark-text">Digital Download</h4>
                            <p className="text-xs text-on-light-text-muted dark:text-on-dark-text-muted">Enable instant download after purchase</p>
                        </div>
                        <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-green-400" />
                            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-neutral-300 dark:bg-white/20 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center justify-end gap-4">
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="primary" className="px-8">Publish Artwork</Button>
                </div>
            </motion.div>
        </div>
    );
};

export default UploadArtworkForm;
