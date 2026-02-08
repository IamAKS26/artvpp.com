import { motion } from 'framer-motion';
import Button from './Button';

const CommissionCTA = () => {
    return (
        <section className="relative py-24 px-6 rounded-[3rem] bg-black overflow-hidden text-center text-white my-20">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[100%] bg-purple-600/20 blur-[150px] rounded-full animate-blob mix-blend-screen" />
                <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[100%] bg-blue-600/20 blur-[150px] rounded-full animate-blob animation-delay-4000 mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-display font-bold leading-tight"
                >
                    Have a unique idea?<br />Let's bring it to life.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto"
                >
                    Connect with 5,000+ verified artists ready to create your custom masterpiece.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Button isMagnetic variant="primary" className="bg-white !text-black hover:bg-gray-200 border-none px-10 py-5 h-auto text-lg font-bold">
                        Start Commission Request
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CommissionCTA;
