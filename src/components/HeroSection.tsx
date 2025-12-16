import { motion } from 'framer-motion';
import gdgHeroLogo from '@/assets/gdg-hero-logo.png';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-google-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-google-green/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          <div className="relative w-full">
            {/* Decorative background banner */}
            <img
              src="/gdg-banner.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm pointer-events-none"
            />

            {/* CurvedLoop will be rendered below content (non-absolute) */}

            {/* Foreground content (centered) */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center py-8 mt-6">
              <img src={gdgHeroLogo} alt="GDG logo" className="w-96 md:w-[560px] lg:w-[720px] mx-auto mb-6 -mt-12" />

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                Empowering <span className="google-gradient-text">Tech Skills</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-light mt-4">
                Unleashing Learning and Collaboration!
              </p>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
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

            {/* CurvedLoop removed per request */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
