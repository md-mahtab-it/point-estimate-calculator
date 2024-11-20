import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Connect() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Connect With Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <a href="mailto:contact@pointestimate.com" className="text-purple-600 hover:text-purple-700">
                  contact@pointestimate.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <a href="tel:+1234567890" className="text-purple-600 hover:text-purple-700">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p className="text-gray-600">123 Statistics Ave,<br />Data City, ST 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500 placeholder-gray-900"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500 placeholder-gray-900"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500 placeholder-gray-900"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}