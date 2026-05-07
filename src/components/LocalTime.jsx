import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "London", coordinates: [-0.1276, 51.5072], timezone: "UTC+0" },
  { name: "New York", coordinates: [-74.006, 40.7128], timezone: "UTC-5" },
  { name: "Tokyo", coordinates: [139.6917, 35.6895], timezone: "UTC+9" },
  { name: "Paris", coordinates: [2.3522, 48.8566], timezone: "UTC+1" },
  { name: "Sydney", coordinates: [151.2093, -33.8688], timezone: "UTC+11" },
  { name: "Mumbai", coordinates: [72.8777, 19.0760], timezone: "UTC+5:30", highlight: true },
  { name: "Lagos", coordinates: [3.3792, 6.5244], timezone: "UTC+1" },
  { name: "Mexico City", coordinates: [-99.1332, 19.4326], timezone: "UTC-6" }
];

export default function LocalTime() {
  const [search, setSearch] = useState('');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Local Action Time</h2>
            <p className="text-xl text-gray-400 mb-8">Type your city to see when you should take action.</p>
            
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input 
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type your city..." 
                className="w-full bg-slate-900 border border-slate-700 text-white pl-12 pr-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-earth-blue transition-all"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-4">Popular Cities</p>
              <div className="flex flex-wrap gap-2">
                {markers.map(city => (
                  <button 
                    key={city.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                      city.highlight 
                        ? 'bg-earth-green/10 border-earth-green text-earth-green' 
                        : 'bg-slate-800 border-slate-700 text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel rounded-3xl p-4 relative overflow-hidden bg-slate-900/50"
          >
            <div className="w-full aspect-[4/3] relative">
              <ComposableMap projectionConfig={{ scale: 140 }}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isIndia = geo.properties.name === "India";
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isIndia ? "#4CAF50" : "#1e293b"}
                          stroke="#334155"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover: { fill: isIndia ? "#2E7D32" : "#334155", outline: "none" },
                            pressed: { fill: "#1e293b", outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
                {markers.map(({ name, coordinates, highlight }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <g
                      fill="none"
                      stroke={highlight ? "#4CAF50" : "#2196F3"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="translate(-12, -24)"
                    >
                      <circle cx="12" cy="10" r="3" fill={highlight ? "#4CAF50" : "#2196F3"} />
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                    </g>
                    <text
                      textAnchor="middle"
                      y={highlight ? -32 : 15}
                      style={{ fontFamily: "Inter", fill: highlight ? "#4CAF50" : "#94a3b8", fontSize: "10px", fontWeight: highlight ? "bold" : "normal" }}
                    >
                      {name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 text-xs text-gray-500 font-mono">
              <span>UTC-8</span>
              <span>UTC+0</span>
              <span>UTC+8</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
