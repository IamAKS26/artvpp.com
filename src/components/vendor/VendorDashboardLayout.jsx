import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';

const VendorDashboardLayout = ({ children, activeTab, setActiveTab }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-brand-light-bg dark:bg-brand-dark-bg flex text-on-light-text-body dark:text-on-dark-text-body selection:bg-brand-primary selection:text-white">

            {/* Desktop Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 min-h-screen flex flex-col">

                {/* Mobile Header */}
                <header className="lg:hidden h-16 bg-paper dark:bg-brand-dark-bg border-b border-on-light-border/20 dark:border-on-dark-border flex items-center justify-between px-4 sticky top-0 z-30">
                    <h2 className="font-display text-lg font-bold text-on-light-text dark:text-on-dark-text">ArtistPanel</h2>
                    <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-on-light-text dark:text-on-dark-text">
                        <Menu className="w-6 h-6" />
                    </Button>
                </header>

                {/* Mobile Menu Overlay (Simplified for MVP) */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-16 left-0 right-0 bg-paper dark:bg-brand-dark-bg border-b border-on-light-border/20 dark:border-on-dark-border shadow-xl z-40 p-4">
                        <nav className="flex flex-col space-y-2">
                            {/* Re-using logic would be better but keeping simple */}
                            <Button variant="ghost" onClick={() => { setActiveTab('overview'); setIsMobileMenuOpen(false) }} className="justify-start text-on-light-text dark:text-on-dark-text hover:bg-brand-light-bg dark:hover:bg-white/5">Overview</Button>
                            <Button variant="ghost" onClick={() => { setActiveTab('artworks'); setIsMobileMenuOpen(false) }} className="justify-start text-on-light-text dark:text-on-dark-text hover:bg-brand-light-bg dark:hover:bg-white/5">Artworks</Button>
                            <Button variant="ghost" onClick={() => { setActiveTab('upload'); setIsMobileMenuOpen(false) }} className="justify-start text-on-light-text dark:text-on-dark-text hover:bg-brand-light-bg dark:hover:bg-white/5">Upload</Button>
                            <Button variant="ghost" onClick={() => { setActiveTab('commissions'); setIsMobileMenuOpen(false) }} className="justify-start text-on-light-text dark:text-on-dark-text hover:bg-brand-light-bg dark:hover:bg-white/5">Requests</Button>
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

export default VendorDashboardLayout;
