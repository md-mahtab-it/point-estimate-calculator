import React from 'react';
import { Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">About</h3>
            <p className="mt-4 text-gray-600">
              Advanced point estimate calculator for statistical analysis and research. Providing accurate statistical calculations for researchers, analysts, and students worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-purple-600 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-purple-600 transition">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="mailto:contact@pointestimatecalculator.com" className="text-gray-600 hover:text-purple-600 transition flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  contact@pointestimatecalculator.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} pointestimatecalculator.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}