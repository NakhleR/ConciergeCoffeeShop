import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/use-mobile';

const MobileHero = () => {
  return (
    <section className="w-full h-1/2 bg-white flex flex-col items-center justify-center p-6">
      {/* Mobile Mascot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 flex items-center justify-center"
      >
        <img
          src="/assets/images/mascot_mobile.svg"
          alt="Concierge Mobile Mascot"
          className="max-h-48 w-auto object-contain"
        />
      </motion.div>
      {/* Main Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <img
          src="/assets/icons/Concierge _ Logo _ Logotype.svg"
          alt="Concierge Coffee Shop"
          className="h-16 mx-auto"
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-black font-pphatton tracking-wide mb-6"
      >
        Coffee & Community
      </motion.p>
    </section>
  );
};

const DesktopHero = () => {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        height: 'clamp(150px, 15vw, 280px)'
      }}
    >
      <div className="w-full h-full relative z-10 bg-white">
        {/* Left Mascot */}
        <motion.div
          initial={{ opacity: 0, y: 100, zIndex: -100 }}
          animate={{ opacity: 1, y: 0, zIndex: 10 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-0 left-4 md:left-8 lg:left-12"
          style={{
            height: 'calc(80% + 2rem)'
          }}
        >
          <img
            src="/assets/images/mascot_left.svg"
            alt="Concierge Mascot Left"
            className="w-auto h-full object-contain"
          />
        </motion.div>

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center relative z-20">
            {/* Main Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <img
                src="/assets/icons/Concierge _ Logo _ Logotype.svg"
                alt="Concierge Coffee Shop"
                className="h-12 md:h-16 lg:h-20 mx-auto"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-black font-pphatton tracking-wide"
            >
              Coffee & Community
            </motion.p>
          </div>
        </motion.div>

        {/* Right Mascot */}
        <motion.div
          initial={{ opacity: 0, y: 100, zIndex: -100 }}
          animate={{ opacity: 1, y: 0, zIndex: 10 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-0 right-4 md:right-8 lg:right-12"
          style={{
            height: 'calc(80% + 2rem)'
          }}
        >
          <img
            src="/assets/images/mascot_right.svg"
            alt="Concierge Mascot Right"
            className="w-auto h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export const Hero = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileHero /> : <DesktopHero />;
}; 