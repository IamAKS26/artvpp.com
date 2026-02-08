import { useState } from 'react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { User, Palette, BarChart2, DollarSign, Clock, Settings, Upload, Image as ImageIcon } from "lucide-react";
import Button from '../components/ui/Button';

const ArtistDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black/95 text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 space-y-6">
                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm text-center">
                            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden border-4 border-white dark:border-zinc-800 shadow-md">
                                <img src={`https://ui-avatars.com/api/?name=New+Artist&size=100`} alt="Profile" />
                            </div>
                            <h2 className="font-bold text-lg">New Artist</h2>
                            <p className="text-sm text-gray-500 mb-4">Level 1 Seller</p>
                            <Button variant="outline" size="sm" className="w-full">Edit Profile</Button>
                        </div>

                        <nav className="space-y-1">
                            {[
                                { id: 'overview', icon: BarChart2, label: 'Overview' },
                                { id: 'services', icon: Palette, label: 'My Services' },
                                { id: 'earnings', icon: DollarSign, label: 'Earnings' },
                                { id: 'settings', icon: Settings, label: 'Profile' },
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === item.id ? 'bg-white dark:bg-zinc-800 font-medium shadow-sm' : 'text-gray-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                                >
                                    <item.icon size={20} /> {item.label}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h1 className="text-3xl font-display font-bold">Artist Dashboard</h1>
                                <p className="text-gray-500">Manage your commissions and profile.</p>
                            </div>
                            {activeTab === 'services' && (
                                <Button variant="primary" className="gap-2"><Upload size={18} /> Post New Service</Button>
                            )}
                        </div>

                        {activeTab === 'overview' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-gray-500 text-sm">Total Earnings</p>
                                            <h3 className="text-3xl font-bold">$1,250.00</h3>
                                        </div>
                                        <div className="p-2 bg-green-50 text-green-600 rounded-lg"><DollarSign size={20} /></div>
                                    </div>
                                    <p className="text-xs text-green-500 font-medium">+15% from last month</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-gray-500 text-sm">Active Orders</p>
                                            <h3 className="text-3xl font-bold">2</h3>
                                        </div>
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Clock size={20} /></div>
                                    </div>
                                    <p className="text-xs text-gray-400">2 pending delivery</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-gray-500 text-sm">Profile Views</p>
                                            <h3 className="text-3xl font-bold">843</h3>
                                        </div>
                                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><ImageIcon size={20} /></div>
                                    </div>
                                    <p className="text-xs text-green-500 font-medium">+124 this week</p>
                                </div>

                                <div className="md:col-span-3 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                    <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-50 dark:border-white/5 last:border-0">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-blue-500"><DollarSign size={18} /></div>
                                                <div>
                                                    <p className="text-sm font-medium">New order received for <strong>Custom Digital Portrait</strong></p>
                                                    <p className="text-xs text-gray-500">2 hours ago</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <h3 className="text-xl font-bold mb-6">Profile Settings</h3>
                                <div className="space-y-6 max-w-2xl">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Display Name</label>
                                            <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3" defaultValue="New Artist" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Location</label>
                                            <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3" placeholder="e.g. New York, USA" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Bio</label>
                                        <textarea className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 h-32" placeholder="Tell us about yourself..."></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">Skills (comma separated)</label>
                                        <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3" placeholder="e.g. Illustration, 3D Modeling" />
                                    </div>
                                    <Button variant="primary">Save Changes</Button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'services' && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { id: 1, title: 'Custom Digital Portrait', price: 150, time: '3 Days', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200', status: 'Active' },
                                        { id: 2, title: 'Logo Design & Branding', price: 300, time: '5 Days', image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=200', status: 'Active' },
                                        { id: 3, title: 'Character Illustration', price: 100, time: '2 Days', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=200', status: 'Paused' },
                                    ].map(service => (
                                        <div key={service.id} className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden group hover:border-brand-primary/20 transition-all">
                                            <div className="aspect-video relative overflow-hidden">
                                                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                                <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-md text-white text-xs rounded-lg font-medium">
                                                    {service.status}
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                                                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                                    <span className="flex items-center gap-1"><Clock size={14} /> {service.time}</span>
                                                    <span className="font-bold text-gray-900 dark:text-white">${service.price}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" size="sm" className="w-full">Edit</Button>
                                                    <Button variant="outline" size="sm" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">Delete</Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Add New Card */}
                                    <button className="border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 p-6 text-gray-400 hover:border-brand-primary/50 hover:text-brand-primary hover:bg-brand-primary/5 transition-all min-h-[280px]">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                                            <Upload size={24} />
                                        </div>
                                        <span className="font-medium">Create New Service</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'earnings' && (
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-6 rounded-2xl text-white shadow-lg">
                                        <p className="text-white/80 text-sm mb-1">Total Earnings</p>
                                        <h3 className="text-4xl font-bold mb-4">$1,250.00</h3>
                                        <div className="flex items-center gap-2 text-sm bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                                            <span>+15% this month</span>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                        <p className="text-gray-500 text-sm mb-1">Available for Withdrawal</p>
                                        <h3 className="text-2xl font-bold mb-4">$850.00</h3>
                                        <Button variant="outline" size="sm">Withdraw Funds</Button>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                        <p className="text-gray-500 text-sm mb-1">Pending Clearance</p>
                                        <h3 className="text-2xl font-bold mb-4">$400.00</h3>
                                        <p className="text-xs text-gray-400">Funds clear in 14 days</p>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm overflow-hidden">
                                    <div className="p-6 border-b border-gray-100 dark:border-white/5">
                                        <h3 className="font-bold text-lg">Transaction History</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase text-gray-500 font-medium">
                                                <tr>
                                                    <th className="px-6 py-4">Date</th>
                                                    <th className="px-6 py-4">Service</th>
                                                    <th className="px-6 py-4">Buyer</th>
                                                    <th className="px-6 py-4">Amount</th>
                                                    <th className="px-6 py-4">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                                {[
                                                    { date: 'Oct 24, 2023', service: 'Custom Digital Portrait', buyer: 'Alice Johnson', amount: 150, status: 'Cleared' },
                                                    { date: 'Oct 22, 2023', service: 'Logo Design', buyer: 'TechStart Inc.', amount: 300, status: 'Cleared' },
                                                    { date: 'Oct 20, 2023', service: 'Character Illustration', buyer: 'Mike Smith', amount: 100, status: 'Pending' },
                                                    { date: 'Oct 18, 2023', service: 'Custom Digital Portrait', buyer: 'Sarah Williams', amount: 150, status: 'Pending' },
                                                    { date: 'Oct 15, 2023', service: 'Logo Design', buyer: 'Coffee Shop', amount: 300, status: 'Withdrawn' },
                                                ].map((tx, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                        <td className="px-6 py-4 text-sm text-gray-500">{tx.date}</td>
                                                        <td className="px-6 py-4 text-sm font-medium">{tx.service}</td>
                                                        <td className="px-6 py-4 text-sm">{tx.buyer}</td>
                                                        <td className="px-6 py-4 text-sm font-bold text-green-600">+${tx.amount}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={`px-2 py-1 rounded-full text-xs font-bold 
                                                                ${tx.status === 'Cleared' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                                    tx.status === 'Pending' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                                                        'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}>
                                                                {tx.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ArtistDashboard;
