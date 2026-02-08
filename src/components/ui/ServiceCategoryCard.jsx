import { motion } from 'framer-motion';

const ServiceCategoryCard = ({ title, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
        >
            <div className="absolute inset-0 bg-brand-light-bg dark:bg-white/5">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-display font-bold text-white mb-1 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">{title}</h3>
                <div className="w-8 h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left" />
            </div>
        </motion.div>
    );
};

export default ServiceCategoryCard;
