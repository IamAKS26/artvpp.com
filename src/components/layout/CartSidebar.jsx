import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CartSidebar = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, isCartOpen, setIsCartOpen } = useCart();

    // Prevent body scroll when cart is open
    if (isCartOpen && typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
    } else if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
    }

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-dark-surface shadow-2xl z-[70] flex flex-col border-l border-gray-100 dark:border-white/10"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
                            <h2 className="text-xl font-bold font-display flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-primary" />
                                Your Cart
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({cart.length} items)</span>
                            </h2>
                            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-500 dark:text-gray-400">
                                    <ShoppingBag className="w-16 h-16 opacity-20" />
                                    <p>Your cart is empty.</p>
                                    <Button variant="outline" onClick={() => setIsCartOpen(false)}>Start Shopping</Button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-sm line-clamp-1">{item.title}</h3>
                                            <p className="text-xs text-gray-500 mb-2">{item.artist}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="font-bold">${item.price * item.quantity}</div>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-1 bg-gray-100 dark:bg-white/5 rounded-lg p-1">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-6 h-6 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded shadow-sm text-xs font-bold"
                                                        >-</button>
                                                        <span className="text-xs w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-6 h-6 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 rounded shadow-sm text-xs font-bold"
                                                        >+</button>
                                                    </div>
                                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-6 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="font-bold text-lg">${getCartTotal()}</span>
                                </div>
                                <p className="text-xs text-center text-gray-400">Shipping and taxes calculated at checkout.</p>
                                <Button
                                    variant="primary"
                                    className="w-full flex items-center justify-center gap-2 py-4"
                                    onClick={() => { setIsCartOpen(false); window.location.href = '/checkout'; }} // Using window.location for simplicity with sidebar unmount, ideally Link + handler
                                >
                                    Checkout <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
