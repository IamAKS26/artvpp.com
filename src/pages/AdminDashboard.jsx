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
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm min-h-[300px]">

                            {activeTab === 'overview' && (
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-6">Recent System Activity</h3>
                                    <div className="space-y-6">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-start gap-4 pb-6 border-b border-gray-100 dark:border-white/5 last:border-0 last:pb-0">
                                                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                                    <AlertCircle size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm">New Artist Application</h4>
                                                    <p className="text-sm text-gray-500 mt-1">User <strong>Sarah Jenkins</strong> applied to be an artist.</p>
                                                    <p className="text-xs text-gray-400 mt-2">2 hours ago</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'users' && (
                                <div>
                                    <div className="p-6 border-b border-gray-100 dark:border-white/5">
                                        <h3 className="text-xl font-bold">User Management</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase text-gray-500 font-medium">
                                                <tr>
                                                    <th className="px-6 py-4">User</th>
                                                    <th className="px-6 py-4">Role</th>
                                                    <th className="px-6 py-4">Status</th>
                                                    <th className="px-6 py-4">Joined</th>
                                                    <th className="px-6 py-4">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                                {[
                                                    { name: 'Alice Johnson', email: 'alice@example.com', role: 'Customer', status: 'Active', joined: 'Oct 24, 2023' },
                                                    { name: 'Elena R.', email: 'admin@artvpp.com', role: 'Vendor', status: 'Active', joined: 'Sep 12, 2023' },
                                                    { name: 'John Doe', email: 'john@example.com', role: 'Artist', status: 'Active', joined: 'Nov 01, 2023' },
                                                    { name: 'Michael Smith', email: 'mike@example.com', role: 'Customer', status: 'Banned', joined: 'Dec 05, 2023' },
                                                ].map((user, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs font-bold">
                                                                    {user.name.charAt(0)}
                                                                </div>
                                                                <div>
                                                                    <div className="font-medium text-sm">{user.name}</div>
                                                                    <div className="text-xs text-gray-500">{user.email}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm">{user.role}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${user.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                                                                {user.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">{user.joined}</td>
                                                        <td className="px-6 py-4 text-sm text-blue-600 cursor-pointer hover:underline">Edit</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'approvals' && (
                                <div>
                                    <div className="p-6 border-b border-gray-100 dark:border-white/5">
                                        <h3 className="text-xl font-bold">Pending Approvals</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase text-gray-500 font-medium">
                                                <tr>
                                                    <th className="px-6 py-4">Request Type</th>
                                                    <th className="px-6 py-4">Applicant</th>
                                                    <th className="px-6 py-4">Date</th>
                                                    <th className="px-6 py-4">Details</th>
                                                    <th className="px-6 py-4">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                                {[
                                                    { type: 'Artist Verification', applicant: 'Sarah Jenkins', date: '2 hours ago', details: 'Portfolio Link attached' },
                                                    { type: 'Product Listing', applicant: 'Elena R.', date: '5 hours ago', details: 'New "Abstract Blue" artwork' },
                                                    { type: 'Vendor Application', applicant: 'Art Supplies Co.', date: '1 day ago', details: 'Business License #12345' },
                                                ].map((item, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                        <td className="px-6 py-4 text-sm font-bold">{item.type}</td>
                                                        <td className="px-6 py-4 text-sm">{item.applicant}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">{item.details}</td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex gap-2">
                                                                <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs hover:bg-green-700 transition-colors">Approve</button>
                                                                <button className="px-3 py-1 bg-red-600 text-white rounded-lg text-xs hover:bg-red-700 transition-colors">Reject</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
