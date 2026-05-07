import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [participantCount, setParticipantCount] = useState(0);

  useEffect(() => {
    // Countdown to June 5th, 2026
    const targetDate = new Date('2026-06-05T00:00:00Z').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Animate participant counter
    const target = 1;
    const duration = 2000;
    const steps = 60;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let current = 0;
    
    const counter = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        setParticipantCount(target);
        clearInterval(counter);
      } else {
        setParticipantCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop" 
          alt="Earth from space" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
        >
          WORLD ENVIRONMENT <span className="text-earth-green">DAY</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-gray-300 font-light mb-16"
        >
          Together We Protect Our Planet
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-panel rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-earth-green to-earth-blue drop-shadow-sm">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-2 font-semibold">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="text-5xl md:text-7xl font-black text-white drop-shadow-lg tabular-nums">
            {participantCount.toLocaleString()}
          </div>
          <p className="text-lg text-earth-green mt-2 font-medium tracking-wide uppercase">
            People who joined the mission
          </p>
          <a
            href="https://instagram.com/india.plantation.day"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            <Instagram className="w-6 h-6" />
            Join our movement on Instagram
          </a>
        </motion.div>
      </div>
    </div>
  );
}
