import { motion } from 'framer-motion';
import { MoreHorizontal, Shield, User } from 'lucide-react';
import Button from '../ui/Button';

const UsersManagement = () => {
    const users = [
        { id: 1, name: "Aditya K.", email: "aditya@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Sarah Jenkins", email: "sarah@art.com", role: "Vendor", status: "Active" },
        { id: 3, name: "John Doe", email: "john@gmail.com", role: "Customer", status: "Blocked" },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-display font-bold text-on-light-text dark:text-on-dark-text">Users</h1>

            <div className="bg-paper dark:bg-white/5 rounded-2xl border border-on-light-border/20 dark:border-on-dark-border overflow-hidden shadow-sm">
                <table className="w-full">
                    <thead className="bg-brand-light-bg dark:bg-white/5 border-b border-on-light-border/20 dark:border-on-dark-border">
                        <tr>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">User</th>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Role</th>
                            <th className="py-4 px-6 text-left text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Status</th>
                            <th className="py-4 px-6 text-right text-xs font-semibold text-on-light-text-muted dark:text-on-dark-text-muted uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-on-light-border/10 dark:divide-on-dark-border">
                        {users.map((user, idx) => (
                            <motion.tr
                                key={user.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group hover:bg-brand-light-bg/50 dark:hover:bg-white/5"
                            >
                                <td className="py-4 px-6">
                                    <div>
                                        <p className="font-bold text-on-light-text dark:text-on-dark-text">{user.name}</p>
                                        <p className="text-xs text-on-light-text-muted dark:text-on-dark-text-muted">{user.email}</p>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-2">
                                        {user.role === 'Admin' ? <Shield className="w-4 h-4 text-brand-primary" /> : <User className="w-4 h-4 text-on-light-text-muted/70 dark:text-on-dark-text-muted" />}
                                        <span className="text-sm font-medium text-on-light-text-body dark:text-on-dark-text-body">{user.role}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <Button variant="ghost" size="sm"><MoreHorizontal className="w-5 h-5 text-on-light-text-muted/70 dark:text-on-dark-text-muted" /></Button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;
