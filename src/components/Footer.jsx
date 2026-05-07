import React from 'react';
import { Leaf, Twitter, Facebook, Instagram, Share2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="h-8 w-8 text-earth-green" />
              <span className="text-white font-bold text-2xl tracking-tight">World Environment Day</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm">
              Join millions of people worldwide in the largest environmental action in history. Together we protect our planet.
            </p>
            <div className="flex gap-4">
              <button className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-earth-blue hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-earth-purple hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full bg-earth-green/10 flex items-center justify-center text-earth-green hover:bg-earth-green hover:text-white transition-all ml-4">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#mission" className="text-gray-400 hover:text-earth-green transition-colors">Our Mission</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-earth-green transition-colors">Partners</a></li>
              <li><a href="#press" className="text-gray-400 hover:text-earth-green transition-colors">Press & Media</a></li>
              <li><a href="#merch" className="text-gray-400 hover:text-earth-green transition-colors">Merchandise</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 World Environment Day. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-earth-purple" /> for the Earth
          </p>
        </div>
      </div>
    </footer>
  );
}
