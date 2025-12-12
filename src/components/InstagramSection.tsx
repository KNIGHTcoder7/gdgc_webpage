import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import hacktoberfestImg from '@/assets/hacktoberfest.jpg';
import cloudStudyJamsImg from '@/assets/cloud-study-jams.jpg';
import infoSessionImg from '@/assets/info-session.jpg';

const instagramPosts = [
  {
    id: 1,
    title: 'HacktoberFest 2025',
    description:
      'Hacktoberfest 2025 is here to set the open-source world ablaze. A global fest where coders create, collaborate, and conquer.',
    image: hacktoberfestImg,
    link: 'https://www.instagram.com/p/DPtTn-1iTul/',
    tags: ['TECH', 'CODING', 'HACKTOBERFEST'],
  },
  {
    id: 2,
    title: 'Google Cloud Study Jams',
    description:
      'Get ready for Google Cloud Study Jams! This October, dive into a 30-day FREE campaign to master Google Cloud Platform.',
    image: cloudStudyJamsImg,
    link: 'https://www.instagram.com/p/DO8RwAHiW-l/',
    tags: ['TECH', 'MLRIT', 'GDGC'],
  },
  {
    id: 3,
    title: 'GDGC Info Session',
    description:
      "Join the GDGC Info Session @ MLRIT and become part of a global family of builders and problem-solvers!",
    image: infoSessionImg,
    link: 'https://www.instagram.com/p/DO_RzGPCSGP/',
    tags: ['TECH', 'MLRIT', 'GDGC'],
  },
];

export const InstagramSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-muted-foreground">
            INSTAGRAM
            <br />
            <span className="text-foreground">POSTS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {post.title}
                  </h3>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Open Instagram post
                  </a>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
