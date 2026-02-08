import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import { Mail, Lock, Facebook, Github, Chrome } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));

        const result = login({ email, password });

        setLoading(false);

        if (result.success) {
            if (result.role === 'admin') {
                navigate('/admin');
            } else if (result.role === 'vendor') {
                navigate('/vendor');
            } else if (result.role === 'artist') {
                navigate('/artist');
            } else {
                navigate(from === "/login" ? "/" : from, { replace: true });
            }
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-background text-on-light-text dark:text-white selection:bg-brand-primary selection:text-white flex flex-col">
            <Navbar />

            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <main className="flex-grow flex items-center justify-center relative z-10 px-4 pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-md p-8 md:p-12 bg-white/70 dark:bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-white/10 shadow-float"
                >
                    <div className="text-center mb-10">
                        <h1 className="font-display text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-white dark:to-gray-400">Welcome Back</h1>
                        <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-brand-primary dark:focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-gray-400 dark:text-white"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-brand-primary dark:focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-gray-400 dark:text-white"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer text-gray-600 dark:text-gray-400 select-none hover:text-gray-900 dark:hover:text-white transition-colors">
                                <input type="checkbox" className="form-checkbox text-brand-primary rounded border-gray-300 dark:border-gray-600 focus:ring-brand-primary bg-transparent" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="text-brand-primary hover:text-brand-secondary font-medium transition-colors">Forgot password?</a>
                        </div>

                        <Button isMagnetic variant="primary" className="w-full py-4 text-base shadow-lg shadow-brand-primary/20" disabled={loading}>
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>
                    </form>

                    <div className="my-8 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-transparent backdrop-blur-xl text-gray-400 dark:text-gray-500 uppercase tracking-widest text-xs font-bold">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <button className="flex items-center justify-center py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                            <Chrome className="w-5 h-5 text-gray-600 dark:text-white" />
                        </button>
                        <button className="flex items-center justify-center py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                            <Github className="w-5 h-5 text-gray-600 dark:text-white" />
                        </button>
                        <button className="flex items-center justify-center py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                            <Facebook className="w-5 h-5 text-blue-600" />
                        </button>
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-80 transition-opacity">
                            Register now
                        </Link>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default Login;
