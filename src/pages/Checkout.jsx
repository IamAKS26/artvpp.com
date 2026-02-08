import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Checkout = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Details, 2: Success
    const [loading, setLoading] = useState(false);

    const total = getCartTotal();

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setLoading(false);
        setStep(2);
        clearCart();
    };

    if (cart.length === 0 && step === 1) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-black/95 text-on-light-text dark:text-white flex flex-col">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                    <Button variant="primary" onClick={() => navigate('/shop')}>Return to Shop</Button>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black/95 text-on-light-text dark:text-white flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {step === 1 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Left: Form */}
                        <div className="lg:col-span-7">
                            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
                                <ArrowLeft size={20} /> Back to Cart
                            </button>

                            <h1 className="text-3xl font-display font-bold mb-8">Checkout</h1>

                            <div className="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <h2 className="text-xl font-bold mb-6">Shipping Details</h2>
                                <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                                            <input required type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                                            <input required type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                        <input required type="email" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Street Address</label>
                                        <input required type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
                                            <input required type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Postal Code</label>
                                            <input required type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Card Details (Mock)</label>
                                        <div className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-400 cursor-not-allowed">
                                            •••• •••• •••• 4242
                                        </div>
                                        <p className="text-xs text-gray-500">Payments are simulated in this demo.</p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right: Summary */}
                        <div className="lg:col-span-5">
                            <div className="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm sticky top-24">
                                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                                <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                                    {cart.map(item => (
                                        <div key={item.id} className="flex gap-4">
                                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg bg-gray-100" />
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-sm line-clamp-1">{item.title}</h3>
                                                <p className="text-xs text-gray-500">{item.artist}</p>
                                                <p className="text-sm font-medium mt-1">${item.price} x {item.quantity}</p>
                                            </div>
                                            <div className="font-bold text-sm">${item.price * item.quantity}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-white/10">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Subtotal</span>
                                        <span>${total}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Shipping</span>
                                        <span>Calculated at next step</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-100 dark:border-white/10">
                                        <span>Total</span>
                                        <span>${total}</span>
                                    </div>
                                </div>

                                <Button
                                    variant="primary"
                                    className="w-full mt-8 py-4"
                                    onClick={() => document.getElementById('checkout-form').requestSubmit()}
                                    disabled={loading}
                                >
                                    {loading ? 'Processing...' : 'Place Order'}
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in-up">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h1 className="text-4xl font-display font-bold mb-4">Order Placed Successfully!</h1>
                        <p className="text-gray-500 max-w-md mx-auto mb-8">
                            Thank you for your purchase. A confirmation email has been sent to your inbox.
                        </p>
                        <Button variant="primary" onClick={() => navigate('/')}>Return Home</Button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Checkout;
