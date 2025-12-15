import { motion } from 'framer-motion';
import CurvedLoop from './CurvedLoop';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-google-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-google-green/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          <div className="relative w-full">
            {/* Background image (decorative) */}
            <img
              src="/gdg-banner.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm pointer-events-none"
            />

            {/* CurvedLoop behind heading (non-interactive) */}
            <div className="absolute inset-x-0 top-8 flex justify-center pointer-events-none">
              <CurvedLoop
                marqueeText="Welcome to Google Developer Groups — On Campus • MLRIT"
                speed={1.5}
                curveAmount={420}
                direction="left"
                interactive={false}
                useGradient={true}
                className="curved-loop-text text-3xl md:text-5xl lg:text-6xl"
              />
            </div>

            {/* Foreground content */}
            <div className="relative z-20 mt-40 lg:mt-56 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                  Empowering{' '}
                  <span className="google-gradient-text">Tech Skills</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  Unleashing Learning and Collaboration!
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
                <a
                  href="#events"
                  className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  Explore Events
                </a>
                <a
                  href="#about"
                  className="px-8 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
