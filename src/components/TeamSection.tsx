import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';

import member1 from '@/assets/team/member1.jpg';
import member2 from '@/assets/team/member2.jpg';
import member3 from '@/assets/team/member3.jpg';
import member4 from '@/assets/team/member4.jpg';
import member5 from '@/assets/team/member5.jpg';
import member6 from '@/assets/team/member6.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Lead Organizer',
    bio: 'Passionate about building developer communities and open source.',
    image: member1,
    color: 'google-blue',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Tech Lead',
    bio: 'Full-stack developer with a love for cloud technologies.',
    image: member2,
    color: 'google-red',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Arjun Reddy',
    role: 'Co-Organizer',
    bio: 'ML enthusiast helping others break into AI/ML.',
    image: member3,
    color: 'google-yellow',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: 4,
    name: 'Sneha Kumar',
    role: 'Design Lead',
    bio: 'Creating beautiful experiences one pixel at a time.',
    image: member4,
    color: 'google-green',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Content Lead',
    bio: 'Storyteller and tech writer making complex simple.',
    image: member5,
    color: 'google-blue',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    id: 6,
    name: 'Ananya Rao',
    role: 'Events Lead',
    bio: 'Making every event memorable and impactful.',
    image: member6,
    color: 'google-red',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-google-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-google-green/5 rounded-full blur-3xl" />
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
            MEET THE <span className="google-gradient-text">TEAM</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The passionate people behind GDGC MLRIT driving our community forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300">
                {/* Avatar */}
                <div className="relative mx-auto mb-6 w-32 h-32">
                  <div
                    className={`absolute inset-0 rounded-full bg-${member.color}/20 blur-xl group-hover:blur-2xl transition-all duration-300`}
                  />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-card group-hover:border-primary/30 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Role Badge */}
                  <div
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-${member.color} text-background whitespace-nowrap`}
                  >
                    {member.role}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-google-blue/20 hover:text-google-blue transition-all"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.socials.github}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-all"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-google-blue/20 hover:text-google-blue transition-all"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
