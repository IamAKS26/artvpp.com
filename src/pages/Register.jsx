import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import { Mail, Lock, User, Check, Palette, ShoppingBag, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Register = () => {
    const { login } = useAuth(); // We'll just auto-login after register for mock
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user"); // user, artist, vendor

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));

        // Create mock user
        const newUser = {
            name,
            email,
            role,
            // In a real app, backend would handle this
        };

        // Auto-login (mock)
        // We are bypassing the login function's check against 'users' array for this demo
        // and directly setting state/localStorage in a real implementation or updating the context
        // For now, let's just use the login context method but we might need to "mock" adding the user first
        // effectively we can't really "add" to the imported const users array in Client side JS easily without persistent storage
        // So for the purpose of this demo, we will simulate a successful login by manually setting localStorage

        const mockAuth = {
            ...newUser,
            token: "mock-jwt-token"
        };

        localStorage.setItem("user", JSON.stringify(mockAuth));
        // Force reload to pick up auth state or use context method if available exposed (but login checks creds)
        // actually simplest is just to navigate and let AuthContext (if it reads from localstorage) pick it up? 
        // AuthContext reads on mount. We need a way to set user in context. 
        // For this demo, let's just pretend we logged in as one of the existing users based on role
        // OR better, we update Login to NOT check credentials if we pass a special flag, but that's messy.

        // Let's just manually reload for now to simulate "Auth Persist"
        window.location.href = role === 'artist' ? '/artist' : role === 'vendor' ? '/vendor' : '/';
    };

    const roles = [
        { id: 'user', title: 'Customer', icon: User, desc: 'Buy art & hire artists' },
        { id: 'artist', title: 'Artist', icon: Palette, desc: 'Sell services & commissions' },
        { id: 'vendor', title: 'Vendor', icon: ShoppingBag, desc: 'Sell products & merchandise' },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-background text-on-light-text dark:text-white selection:bg-brand-primary selection:text-white flex flex-col">
            <Navbar />

            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            <main className="flex-grow flex items-center justify-center relative z-10 px-4 pt-24 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-2xl bg-white/70 dark:bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-white/10 shadow-float overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Form Section */}
                    <div className="flex-1 p-8 md:p-12 order-2 md:order-1">
                        <div className="mb-8">
                            <h1 className="font-display text-3xl font-bold mb-2">Create Account</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Join our creative community today.</p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Role Selection Mobile (Dropdown or small cards) */}
                            {/* We'll use a simple selector for simplicity in form, but visualization is better */}

                            <div className="space-y-3 mb-6">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">I want to be a:</label>
                                <div className="grid grid-cols-1 gap-2">
                                    {roles.map(r => (
                                        <div
                                            key={r.id}
                                            onClick={() => setRole(r.id)}
                                            className={`cursor-pointer p-3 rounded-xl border flex items-center gap-3 transition-all ${role === r.id
                                                ? 'bg-brand-primary/5 border-brand-primary shadow-sm'
                                                : 'bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-brand-primary/50'}`}
                                        >
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${role === r.id ? 'bg-brand-primary text-white' : 'bg-gray-100 dark:bg-white/10 text-gray-500'}`}>
                                                <r.icon size={16} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-sm font-bold ${role === r.id ? 'text-brand-primary' : 'text-gray-700 dark:text-gray-200'}`}>{r.title}</h3>
                                                <p className="text-xs text-gray-500">{r.desc}</p>
                                            </div>
                                            {role === r.id && <Check size={16} className="text-brand-primary" />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                                <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-primary transition-all placeholder:text-gray-400 dark:text-white text-sm" required />
                            </div>

                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                                <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-primary transition-all placeholder:text-gray-400 dark:text-white text-sm" required />
                            </div>

                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-primary transition-all placeholder:text-gray-400 dark:text-white text-sm" required />
                            </div>

                            <Button isMagnetic variant="primary" className="w-full py-3.5 text-sm shadow-lg shadow-brand-primary/20 mt-4 group">
                                {loading ? "Creating Account..." : <span className="flex items-center gap-2 justify-center">Create Account <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                            Already have an account?{' '}
                            <Link to="/login" className="font-bold text-brand-primary hover:text-brand-secondary transition-colors">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default Register;
