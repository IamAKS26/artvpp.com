import { useState } from 'react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { stats } from "../data/stats";
import { DollarSign, Users, ShoppingCart, AlertCircle, BarChart2, Shield } from "lucide-react";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black/95 text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 space-y-6">
                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h2 className="font-bold">Admin</h2>
                                    <p className="text-sm text-gray-500">System Admin</p>
                                </div>
                            </div>
                        </div>

                        <nav className="space-y-1">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'overview' ? 'bg-white dark:bg-zinc-800 font-medium shadow-sm' : 'text-gray-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                            >
                                <BarChart2 size={20} /> Overview
                            </button>
                            <button
                                onClick={() => setActiveTab('users')}
                                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'users' ? 'bg-white dark:bg-zinc-800 font-medium shadow-sm' : 'text-gray-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                            >
                                <Users size={20} /> Users
                            </button>
                            <button
                                onClick={() => setActiveTab('approvals')}
                                className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'approvals' ? 'bg-white dark:bg-zinc-800 font-medium shadow-sm' : 'text-gray-500 hover:bg-white/50 dark:hover:bg-white/5'}`}
                            >
                                <AlertCircle size={20} /> Approvals
                            </button>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="mb-8">
                            <h1 className="text-3xl font-display font-bold">System Overview</h1>
                            <p className="text-gray-500">Platform health and performance metrics.</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <div className="p-2 w-fit bg-green-50 text-green-600 rounded-lg mb-4"><DollarSign size={20} /></div>
                                <h3 className="text-2xl font-bold mb-1">${stats.admin.totalRevenue}</h3>
                                <p className="text-sm text-gray-500">Total Revenue</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <div className="p-2 w-fit bg-blue-50 text-blue-600 rounded-lg mb-4"><ShoppingCart size={20} /></div>
                                <h3 className="text-2xl font-bold mb-1">{stats.admin.totalOrders}</h3>
                                <p className="text-sm text-gray-500">Total Orders</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <div className="p-2 w-fit bg-purple-50 text-purple-600 rounded-lg mb-4"><Users size={20} /></div>
                                <h3 className="text-2xl font-bold mb-1">{stats.admin.activeVendors}</h3>
                                <p className="text-sm text-gray-500">Active Vendors</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <div className="p-2 w-fit bg-orange-50 text-orange-600 rounded-lg mb-4"><AlertCircle size={20} /></div>
                                <h3 className="text-2xl font-bold mb-1">{stats.admin.pendingApprovals}</h3>
                                <p className="text-sm text-gray-500">Pending Approvals</p>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm min-h-[300px] flex items-center justify-center">
                            <p className="text-gray-400">Select a tab to view details (Demo Mode)</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
