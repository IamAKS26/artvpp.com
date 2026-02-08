import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import CreatorProfile from './pages/CreatorProfile';
import ProductDetail from './pages/ProductDetail';
import VendorDashboard from './pages/VendorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ZenithLanding from './pages/ZenithLanding';
import Login from './pages/Login';
import Register from './pages/Register';
import ArtistDashboard from './pages/ArtistDashboard';
import Checkout from './pages/Checkout';
import PageTransition from './components/layout/PageTransition';

// Placeholder for Vendor Dashboard
const Vendor = () => <div className="p-20 text-center text-2xl font-bold">Vendor Dashboard (Coming Soon)</div>;

import ProtectedRoute from './components/layout/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

// ... other imports ...

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/service/:id" element={<PageTransition><ServiceDetail /></PageTransition>} />
                <Route path="/creator/:name" element={<PageTransition><CreatorProfile /></PageTransition>} />
                <Route path="/product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />

                {/* Protected Routes */}
                <Route path="/vendor" element={
                    <ProtectedRoute>
                        <PageTransition><VendorDashboard /></PageTransition>
                    </ProtectedRoute>
                } />
                <Route path="/artist" element={
                    <ProtectedRoute>
                        <PageTransition><ArtistDashboard /></PageTransition>
                    </ProtectedRoute>
                } />
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <PageTransition><AdminDashboard /></PageTransition>
                    </ProtectedRoute>
                } />

                <Route path="/zenith" element={<PageTransition><ZenithLanding /></PageTransition>} />
                <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
                <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
                <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
            </Routes>
        </AnimatePresence >
    );
};

import { CartProvider } from './context/CartContext';
import CartSidebar from './components/layout/CartSidebar';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    <CartSidebar />
                    <AnimatedRoutes />
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    )
}

export default App
