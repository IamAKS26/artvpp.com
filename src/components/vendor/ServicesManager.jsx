import { motion } from 'framer-motion';
import { Edit, Pause, Eye } from 'lucide-react';
import Button from '../ui/Button';

const ServicesManager = () => {
    const services = [
        { id: 1, title: "Custom Oil Portrait", price: 150, active: true, image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=200" },
        { id: 2, title: "Logo Design", price: 200, active: true, image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=200" },
        { id: 3, title: "Charcoal Sketch", price: 80, active: false, image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=200" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text">My Services</h1>
                <Button variant="primary" size="sm">Create Service</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-paper dark:bg-white/5 rounded-2xl border border-on-light-border/20 dark:border-on-dark-border overflow-hidden shadow-sm group hover:shadow-md transition-shadow"
                    >
                        <div className="relative h-48 bg-brand-light-bg dark:bg-white/10">
                            <img src={service.image} alt="" className="w-full h-full object-cover" />
                            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${service.active ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                                {service.active ? 'Active' : 'Paused'}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-1 text-on-light-text dark:text-on-dark-text">{service.title}</h3>
                            <p className="text-on-light-text-muted dark:text-on-dark-text-muted text-sm mb-6">Starting at ${service.price}</p>

                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1 border-on-light-border/20 dark:border-on-dark-border text-on-light-text-body dark:text-on-dark-text-body hover:bg-brand-light-bg dark:hover:bg-white/5"><Edit className="w-4 h-4 mr-2" /> Edit</Button>
                                <Button variant="ghost" size="sm" className="px-3 hover:bg-brand-light-bg dark:hover:bg-white/5"><Pause className="w-4 h-4 text-on-light-text-muted dark:text-on-dark-text-muted" /></Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesManager;
