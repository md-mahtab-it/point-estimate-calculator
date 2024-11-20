import React from 'react';
import { Calculator, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-0">
        <div className="flex flex-col sm:flex-row sm:h-16 items-center">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <div className="flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-xl text-gray-800">Point Estimate Calculator</span>
            </div>
          </div>
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-2 sm:mt-0 sm:ml-auto text-sm sm:text-base">
            <Link 
              to="/"
              className="flex items-center gap-1 text-gray-600 hover:text-purple-600 transition"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            {location.pathname === '/' && (
              <>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-600 hover:text-purple-600 transition"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('calculations')} 
                  className="text-gray-600 hover:text-purple-600 transition"
                >
                  Calculations
                </button>
                <button 
                  onClick={() => scrollToSection('how-to-use')} 
                  className="text-gray-600 hover:text-purple-600 transition"
                >
                  How to Use
                </button>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-gray-600 hover:text-purple-600 transition"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-gray-600 hover:text-purple-600 transition"
                >
                  FAQ
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}