import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function WallOfHeroes({ heroes }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Wall of Environmental Heroes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            The Wall of Heroes is the permanent record of founding supporters. Every name is an action. Every action is a signal that we can make a difference.
          </motion.p>
          <motion.a
            href="#get-involved"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-earth-green hover:bg-earth-green-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-earth-green/20"
          >
            Get on the wall
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {heroes.map((hero, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-panel p-4 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform">🌱</span>
                <span className="text-white font-medium text-lg">{hero.name}</span>
              </div>
              <span className="text-sm font-bold text-slate-500 bg-slate-800 px-3 py-1 rounded-full group-hover:text-earth-green group-hover:bg-earth-green/10 transition-colors">
                {hero.country}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
