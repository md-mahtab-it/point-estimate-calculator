import React from 'react';
import { Shield, Baby, Database, Cookie, Lock, Share2, FileEdit, Mail } from 'lucide-react';

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Shield className="h-8 w-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      </div>

      <div className="prose prose-purple max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Database className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
          </div>
          <p className="text-gray-600 mb-4">We do not collect any personal information through the Point Estimate Calculator. All calculations are performed client-side, and no data is stored or transmitted to our servers.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Cookie className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">2. Usage of Cookies</h2>
          </div>
          <p className="text-gray-600 mb-4">Our website uses only essential cookies necessary for the proper functioning of the calculator. These cookies do not track your activity or store any personal information.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">3. Data Security</h2>
          </div>
          <p className="text-gray-600 mb-4">All calculations are performed locally in your browser. We implement industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of any data.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Share2 className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">4. Third-Party Services</h2>
          </div>
          <p className="text-gray-600 mb-4">We do not use any third-party services that collect or process user data.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Baby className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">5. Children's Privacy</h2>
          </div>
          <p className="text-gray-600 mb-4">Our Point Estimate Calculator is intended for general use and does not knowingly collect any personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at privacy@pointestimatecalculator.com. We will take steps to remove such information from our servers.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FileEdit className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">6. Changes to Privacy Policy</h2>
          </div>
          <p className="text-gray-600 mb-4">We reserve the right to update this privacy policy at any time. Changes will be effective immediately upon posting to pointestimatecalculator.com.</p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">7. Contact Us</h2>
          </div>
          <p className="text-gray-600">If you have any questions about our Privacy Policy, please contact us at privacy@pointestimatecalculator.com.</p>
        </section>
      </div>
    </div>
  );
}