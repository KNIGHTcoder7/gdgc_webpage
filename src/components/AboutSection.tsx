import { motion } from 'framer-motion';
import { Users, Calendar, Code, Rocket } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Active Members' },
  { icon: Calendar, value: '50+', label: 'Events Hosted' },
  { icon: Code, value: '100+', label: 'Projects Built' },
  { icon: Rocket, value: '20+', label: 'Workshops' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-google-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-google-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">
            ABOUT <span className="google-gradient-text">US</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 space-y-4">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                What is GDG On Campus?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Google Developer Groups On Campus (GDGC) is a university-based community group for
                students interested in Google developer technologies. We bridge the gap between
                theory and practice by providing hands-on experience with Google's cutting-edge
                tools and technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At MLRIT, we're building a vibrant community of learners, builders, and innovators
                who are passionate about technology and its potential to solve real-world problems.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <h3 className="text-2xl font-display font-semibold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create an inclusive ecosystem where students can learn, grow, and connect with
                like-minded individuals. We organize workshops, hackathons, study jams, and speaker
                sessions to help students develop their technical skills and prepare for the future.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colors = ['bg-google-blue', 'bg-google-red', 'bg-google-yellow', 'bg-google-green'];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={24} className="text-background" />
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
