import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative text-white py-20 overflow-hidden w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center mb-4"
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
                className="w-20 h-20 md:w-24 md:h-24 filter invert"
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
                className="h-12 md:h-16 filter invert"
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-cream-200 mb-2 font-light"
          >
            Coffee & More
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-primary-300 text-lg mb-8"
          >
            Badaro, Beirut
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <div className="bg-cream-100/10 backdrop-blur-sm rounded-full px-6 py-3 border border-cream-300/20">
              <span className="text-cream-100 text-sm">☕ Premium Coffee Experience</span>
            </div>
            <div className="bg-cream-100/10 backdrop-blur-sm rounded-full px-6 py-3 border border-cream-300/20">
              <span className="text-cream-100 text-sm">🥐 Fresh Pastries Daily</span>
            </div>
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
    </section >
  );
}; 