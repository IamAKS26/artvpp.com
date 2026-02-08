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
                                            <h3 className="text-3xl font-bold">$0.00</h3>
                                        </div>
                                        <div className="p-2 bg-green-50 text-green-600 rounded-lg"><DollarSign size={20} /></div>
                                    </div>
                                    <p className="text-xs text-gray-400">Not active yet</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-gray-500 text-sm">Active Orders</p>
                                            <h3 className="text-3xl font-bold">0</h3>
                                        </div>
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Clock size={20} /></div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-gray-500 text-sm">Profile Views</p>
                                            <h3 className="text-3xl font-bold">0</h3>
                                        </div>
                                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><ImageIcon size={20} /></div>
                                    </div>
                                </div>

                                <div className="md:col-span-3 bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm text-center">
                                    <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                        <Palette size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Start Selling Today</h3>
                                    <p className="text-gray-500 mb-6 max-w-md mx-auto">You haven't posted any services yet. Create your first service to start accepting commissions.</p>
                                    <Button variant="primary">Create New Service</Button>
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

                        {(activeTab === 'services' || activeTab === 'earnings') && (
                            <div className="bg-white dark:bg-zinc-900 p-12 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm text-center">
                                <p className="text-gray-400">No data available yet.</p>
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
