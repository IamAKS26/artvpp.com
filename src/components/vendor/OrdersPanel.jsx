import { motion } from 'framer-motion';
import Button from '../ui/Button';

const OrdersPanel = () => {
    const orders = [
        { id: '#ORD-7829', customer: "John Smith", item: "Abstract Harmony", date: "Oct 22, 2024", total: "$120.00", status: "Processing", type: "Physical" },
        { id: '#ORD-7830', customer: "Sarah Connor", item: "Neon Nights Pack", date: "Oct 21, 2024", total: "$45.00", status: "Delivered", type: "Digital" },
        { id: '#ORD-7831', customer: "Emily Blunt", item: "Sculpted Silence", date: "Oct 20, 2024", total: "$1,200.00", status: "Shipped", type: "Physical" },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text">Recent Orders</h1>

            <div className="bg-paper dark:bg-white/5 rounded-2xl border border-on-light-border/20 dark:border-on-dark-border overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-brand-light-bg dark:bg-white/5 border-b border-on-light-border/20 dark:border-on-dark-border text-left">
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Order ID</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Customer</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Item</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Date</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Total</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider">Status</th>
                                <th className="py-4 px-6 text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-on-light-border/10 dark:divide-on-dark-border">
                            {orders.map((order, index) => (
                                <motion.tr
                                    key={order.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-brand-light-bg dark:hover:bg-white/5"
                                >
                                    <td className="py-4 px-6 font-mono text-sm text-on-light-text-muted dark:text-on-dark-text-muted">{order.id}</td>
                                    <td className="py-4 px-6 font-medium text-on-light-text dark:text-on-dark-text">{order.customer}</td>
                                    <td className="py-4 px-6 text-on-light-text-body dark:text-on-dark-text-body">{order.item}</td>
                                    <td className="py-4 px-6 text-sm text-on-light-text-muted dark:text-on-dark-text-muted">{order.date}</td>
                                    <td className="py-4 px-6 font-bold text-on-light-text dark:text-on-dark-text">{order.total}</td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                            ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <Button variant="outline" size="sm">Manage</Button>
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

export default OrdersPanel;
