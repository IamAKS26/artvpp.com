import { useState } from 'react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { stats } from "../data/stats";
import { DollarSign, ShoppingBag, Image as ImageIcon, Clock, Plus, BarChart2, MoreVertical, Search, Filter, Settings } from "lucide-react";

const VendorDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock Data for "My Products"
    const myProducts = [
        { id: 1, title: 'Ethereal Dreams', price: 1200, status: 'Active', views: 1250, sales: 3, image: 'https://images.unsplash.com/photo-1579783902614-a3fb39279c42?q=80&w=200' },
        { id: 2, title: 'Urban Solitude', price: 850, status: 'Active', views: 890, sales: 5, image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=200' },
        { id: 3, title: 'Neon Nights', price: 1500, status: 'Draft', views: 0, sales: 0, image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200' },
        { id: 4, title: 'Abstract Harmony', price: 900, status: 'Active', views: 450, sales: 1, image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=200' },
    ];

    // Mock Data for "Orders"
    const orders = [
        { id: '#ORD-7829', customer: 'Alice Johnson', item: 'Ethereal Dreams', date: 'Oct 24, 2023', total: 1200, status: 'Completed' },
        { id: '#ORD-7830', customer: 'Michael Smith', item: 'Urban Solitude', date: 'Oct 25, 2023', total: 850, status: 'Processing' },
        { id: '#ORD-7831', customer: 'Sarah Williams', item: 'Abstract Harmony', date: 'Oct 26, 2023', total: 900, status: 'Pending' },
        { id: '#ORD-7832', customer: 'David Brown', item: 'Urban Solitude', date: 'Oct 27, 2023', total: 850, status: 'Completed' },
        { id: '#ORD-7833', customer: 'Emily Davis', item: 'Ethereal Dreams', date: 'Oct 28, 2023', total: 1200, status: 'Cancelled' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'text-green-600 bg-green-50 dark:bg-green-500/10 dark:text-green-400';
            case 'Processing': return 'text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400';
            case 'Pending': return 'text-orange-600 bg-orange-50 dark:bg-orange-500/10 dark:text-orange-400';
            case 'Cancelled': return 'text-red-600 bg-red-50 dark:bg-red-500/10 dark:text-red-400';
            case 'Active': return 'text-green-600 bg-green-50 dark:bg-green-500/10 dark:text-green-400';
            case 'Draft': return 'text-gray-600 bg-gray-50 dark:bg-gray-500/10 dark:text-gray-400';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black/95 text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 space-y-6">
                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <ImageIcon size={24} />
                                </div>
                                <div>
                                    <h2 className="font-bold">Elena R.</h2>
                                    <p className="text-sm text-gray-500">Pro Seller</p>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                <Plus size={18} /> New Artwork
                            </button>
                        </div>

                        <nav className="space-y-1">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'overview' ? 'bg-white dark:bg-zinc-800 font-medium shadow-sm' : 'text-gray-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                            >
                                <BarChart2 size={20} /> Overview
                            </button>
                            <button
                                onClick={() => setActiveTab('products')}
                                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'products' ? 'bg-white dark:bg-zinc-800 font-medium shadow-sm' : 'text-gray-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                            >
                                <ImageIcon size={20} /> My Products
                            </button>
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'orders' ? 'bg-white dark:bg-zinc-800 font-medium shadow-sm' : 'text-gray-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                            >
                                <ShoppingBag size={20} /> Orders
                            </button>
                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'settings' ? 'bg-white dark:bg-zinc-800 font-medium shadow-sm' : 'text-gray-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                            >
                                <Settings size={20} /> Settings
                            </button>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="mb-8">
                            <h1 className="text-3xl font-display font-bold">Dashboard {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                            <p className="text-gray-500">Welcome back, here's what's happening with your store.</p>
                        </div>

                        {/* Content Area Based on Tab */}
                        {activeTab === 'overview' && (
                            <>
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                        <div className="p-2 w-fit bg-green-50 text-green-600 rounded-lg mb-4"><DollarSign size={20} /></div>
                                        <h3 className="text-2xl font-bold mb-1">${stats.vendor.totalSales}</h3>
                                        <p className="text-sm text-gray-500">Total Sales</p>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                        <div className="p-2 w-fit bg-blue-50 text-blue-600 rounded-lg mb-4"><DollarSign size={20} /></div>
                                        <h3 className="text-2xl font-bold mb-1">${stats.vendor.totalEarnings}</h3>
                                        <p className="text-sm text-gray-500">Total Earnings</p>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                        <div className="p-2 w-fit bg-purple-50 text-purple-600 rounded-lg mb-4"><ImageIcon size={20} /></div>
                                        <h3 className="text-2xl font-bold mb-1">{stats.vendor.productsSold}</h3>
                                        <p className="text-sm text-gray-500">Arts Sold</p>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                        <div className="p-2 w-fit bg-orange-50 text-orange-600 rounded-lg mb-4"><Clock size={20} /></div>
                                        <h3 className="text-2xl font-bold mb-1">{stats.vendor.pendingOrders}</h3>
                                        <p className="text-sm text-gray-500">Pending Orders</p>
                                    </div>
                                </div>

                                {/* Recent Activity Placeholder */}
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 p-6 shadow-sm">
                                    <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-50 dark:border-white/5 last:border-0">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center"><ShoppingBag size={18} /></div>
                                                <div>
                                                    <p className="text-sm font-medium">New order received from <strong>Alice Johnson</strong></p>
                                                    <p className="text-xs text-gray-500">2 hours ago</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'products' && (
                            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <div className="relative w-full sm:w-64">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-white/5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20" />
                                    </div>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-white/5 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                                        <Filter size={16} /> Filter
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase text-gray-500 font-medium">
                                            <tr>
                                                <th className="px-6 py-4">Product</th>
                                                <th className="px-6 py-4">Price</th>
                                                <th className="px-6 py-4">Status</th>
                                                <th className="px-6 py-4">Views</th>
                                                <th className="px-6 py-4">Sales</th>
                                                <th className="px-6 py-4">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                            {myProducts.map(product => (
                                                <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-4">
                                                            <img src={product.image} alt={product.title} className="w-12 h-12 rounded-lg object-cover bg-gray-200" />
                                                            <span className="font-medium text-sm">{product.title}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-bold">${product.price}</td>
                                                    <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(product.status)}`}>{product.status}</span></td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{product.views}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{product.sales}</td>
                                                    <td className="px-6 py-4">
                                                        <button className="p-2 hover:bg-gray-200 dark:hover:bg-white/20 rounded-full transition-colors"><MoreVertical size={16} /></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'orders' && (
                            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase text-gray-500 font-medium">
                                            <tr>
                                                <th className="px-6 py-4">Order ID</th>
                                                <th className="px-6 py-4">Customer</th>
                                                <th className="px-6 py-4">Item</th>
                                                <th className="px-6 py-4">Date</th>
                                                <th className="px-6 py-4">Total</th>
                                                <th className="px-6 py-4">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                            {orders.map(order => (
                                                <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                    <td className="px-6 py-4 text-sm font-medium">{order.id}</td>
                                                    <td className="px-6 py-4 text-sm">{order.customer}</td>
                                                    <td className="px-6 py-4 text-sm">{order.item}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                                                    <td className="px-6 py-4 text-sm font-bold">${order.total}</td>
                                                    <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>{order.status}</span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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

export default VendorDashboard;
