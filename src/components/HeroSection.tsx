import { motion } from 'framer-motion';
import gdgHeroLogo from '@/assets/gdg-hero-logo.png';
import gdgGroupPhoto from '@/assets/gdg-group-photo.jpg';

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <img
              src={gdgHeroLogo}
              alt="Google Developer Groups On Campus MLRIT"
              className="w-full max-w-md mx-auto lg:mx-0"
            />

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Empowering{' '}
                <span className="google-gradient-text">Tech Skills</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Unleashing Learning and Collaboration!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
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
          </motion.div>

          {/* Right Content - Image Carousel Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-4 rounded-3xl overflow-hidden glow-effect">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={gdgGroupPhoto}
                  alt="GDG On Campus MLRIT Community"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-medium text-foreground">Tenure 2025 - 26</p>
              </div>
              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-foreground" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
