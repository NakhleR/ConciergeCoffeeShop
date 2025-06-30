import { motion } from 'framer-motion';

export const QRPage = () => {
    return (
        <section className="relative text-white min-h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center mb-8"
                    >
                        {/* Logo Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="mb-6"
                        >
                            <img
                                src="/assets/icons/Concierge _ Logo _ Icon.svg"
                                alt="Concierge Coffee Shop Logo"
                                className="w-24 h-24 md:w-32 md:h-32 filter invert"
                            />
                        </motion.div>

                        {/* Logo Logotype */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <img
                                src="/assets/icons/Concierge _ Logo _ Logotype.svg"
                                alt="Concierge"
                                className="h-16 md:h-20 filter invert"
                            />
                        </motion.div>
                    </motion.div>

                    {/* QR Code Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-8"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-2xl inline-block">
                            <img
                                src="/assets/icons/frame.png"
                                alt="QR Code for Concierge Coffee Shop Menu"
                                className="w-64 h-64 md:w-80 md:h-80"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h2 className="text-xl md:text-2xl text-cream-200 mb-4 font-light">
                            Scan to View Our Menu
                        </h2>


                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="flex flex-col md:flex-row gap-4 justify-center items-center"
                        >
                            <div className="bg-cream-100/10 backdrop-blur-sm rounded-full px-6 py-3 border border-cream-300/20">
                                <span className="text-cream-100 text-sm">☕ Premium Coffee Experience</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-20 w-20 h-20 border border-primary-400/20 rounded-full"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 left-20 w-16 h-16 border border-primary-400/20 rounded-full"
            />
        </section>
    );
}; 