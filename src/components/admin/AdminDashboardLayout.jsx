import AdminSidebar from './AdminSidebar';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';

const AdminDashboardLayout = ({ children, activeTab, setActiveTab }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-brand-light-bg dark:bg-brand-dark-bg flex text-on-light-text-body dark:text-on-dark-text-body selection:bg-brand-primary selection:text-white">

            {/* Desktop Sidebar */}
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 min-h-screen flex flex-col">

                {/* Mobile Header */}
                <header className="lg:hidden h-16 bg-brand-primary text-white border-b border-on-light-border dark:border-on-dark-border flex items-center justify-between px-4 sticky top-0 z-30">
                    <h2 className="font-display text-lg font-bold">Admin Panel</h2>
                    <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:bg-white/10">
                        <Menu className="w-6 h-6" />
                    </Button>
                </header>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-16 left-0 right-0 bg-brand-primary border-b border-on-light-border dark:border-on-dark-border shadow-xl z-40 p-4 text-white">
                        <nav className="flex flex-col space-y-2">
                            <Button variant="ghost" onClick={() => { setActiveTab('overview'); setIsMobileMenuOpen(false) }} className="text-white justify-start">Overview</Button>
                            <Button variant="ghost" onClick={() => { setActiveTab('approvals'); setIsMobileMenuOpen(false) }} className="text-white justify-start">Approvals</Button>
                            <Button variant="ghost" onClick={() => { setActiveTab('users'); setIsMobileMenuOpen(false) }} className="text-white justify-start">Users</Button>
                        </nav>
                    </div>
                )}

                {/* Page Content */}
                <main className="flex-1 p-6 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;
