import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    date: 'Jan 15, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'MLRIT Campus, Seminar Hall',
    description:
      'Learn the fundamentals of modern web development with hands-on projects using React and TailwindCSS.',
    type: 'Workshop',
    color: 'google-blue',
  },
  {
    id: 2,
    title: 'Flutter Forward Extended',
    date: 'Feb 8, 2026',
    time: '2:00 PM - 6:00 PM',
    location: 'MLRIT Campus, Auditorium',
    description:
      'Join us for Flutter Forward Extended! Build beautiful cross-platform apps with Flutter.',
    type: 'Tech Talk',
    color: 'google-green',
  },
  {
    id: 3,
    title: 'AI/ML Study Jam',
    date: 'Feb 20, 2026',
    time: '11:00 AM - 5:00 PM',
    location: 'MLRIT Campus, Lab 305',
    description:
      'Dive into Machine Learning with Google Cloud. Complete hands-on labs and earn badges!',
    type: 'Study Jam',
    color: 'google-yellow',
  },
];

const pastEvents = [
  {
    id: 1,
    title: 'Hacktoberfest 2025',
    date: 'October 2025',
    attendees: 150,
  },
  {
    id: 2,
    title: 'Cloud Study Jams',
    date: 'October 2025',
    attendees: 200,
  },
  {
    id: 3,
    title: 'GDGC Info Session',
    date: 'September 2025',
    attendees: 300,
  },
];

export const EventsSection = () => {
  return (
    <section id="events" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-google-green/5 rounded-full blur-3xl" />
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
            <span className="google-gradient-text">EVENTS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us for workshops, hackathons, and tech talks to level up your skills
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-card p-6 h-full hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-${event.color}/20 text-${event.color}`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} className="text-google-blue" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={16} className="text-google-yellow" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} className="text-google-red" />
                      {event.location}
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 border border-border rounded-lg text-foreground hover:bg-secondary flex items-center justify-center gap-2 transition-colors group-hover:border-primary/50">
                    Register Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8">Past Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{event.date}</span>
                  <span className="flex items-center gap-1">
                    <Users size={14} />
                    {event.attendees}+ attendees
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Users = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
