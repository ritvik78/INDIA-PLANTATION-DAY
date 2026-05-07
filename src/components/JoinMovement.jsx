import React, { useState } from 'react';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function JoinMovement() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setIsSubscribed(true);
  };

  return (
    <section id="get-involved" className="py-24 bg-slate-900 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join the Movement</h2>
          <p className="text-xl text-gray-400">Be part of the biggest environmental action in history</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-3xl"
        >
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div>
                <div className="relative flex items-center">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full bg-slate-800/50 border border-slate-700 text-white px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-earth-green focus:border-transparent transition-all placeholder-gray-500"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 bg-earth-green hover:bg-earth-green-dark text-white px-6 py-2.5 rounded-full font-semibold transition-colors flex items-center gap-2"
                  >
                    Join <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="updates" 
                  required
                  className="mt-1 h-5 w-5 rounded border-slate-600 bg-slate-800 text-earth-green focus:ring-earth-green focus:ring-offset-slate-900"
                />
                <label htmlFor="updates" className="text-sm text-gray-400 leading-tight">
                  I want to receive email updates about World Environment Day, including announcements and reminders. I can unsubscribe at any time.
                </label>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                className="inline-flex justify-center mb-4"
              >
                <CheckCircle2 className="h-16 w-16 text-earth-green" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-gray-400">Thank you for joining the movement.</p>
            </div>
          )}

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px bg-slate-700 flex-1"></div>
            <span className="text-gray-500 uppercase text-sm font-semibold tracking-wider">or</span>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
              <Calendar className="h-5 w-5 text-earth-blue" />
              Add to Google Calendar
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
