import React from 'react';
import { Leaf, Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-earth-green" />
            <span className="text-white font-bold text-xl tracking-tight">World Environment Day</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#mission" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Mission</a>
              <a href="#partners" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Partners</a>
              <a href="#press" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Press</a>
              <a href="#get-involved" className="text-earth-green hover:text-earth-green-dark px-3 py-2 rounded-md text-sm font-bold transition-colors">Get Involved</a>
              <a href="#merch" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Merch</a>
              <button className="text-gray-300 hover:text-white p-2 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-earth-green rounded-full"></span>
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-t-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#mission" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mission</a>
            <a href="#partners" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Partners</a>
            <a href="#press" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Press</a>
            <a href="#get-involved" className="text-earth-green block px-3 py-2 rounded-md text-base font-bold">Get Involved</a>
            <a href="#merch" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Merch</a>
          </div>
        </div>
      )}
    </nav>
  );
}
