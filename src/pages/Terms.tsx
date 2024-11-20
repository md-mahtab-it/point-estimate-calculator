import React from 'react';
import { FileText, CheckSquare, ScrollText, AlertTriangle, ShieldAlert, FileEdit, Mail } from 'lucide-react';

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-2 mb-8">
        <FileText className="h-8 w-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
      </div>

      <div className="prose prose-purple max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckSquare className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          </div>
          <p className="text-gray-600 mb-4">By accessing and using the Point Estimate Calculator, you accept and agree to be bound by these Terms of Service.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <ScrollText className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">2. Use License</h2>
          </div>
          <p className="text-gray-600 mb-4">Permission is granted to temporarily use the Point Estimate Calculator for personal, non-commercial transitory viewing only.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">3. Disclaimer</h2>
          </div>
          <p className="text-gray-600 mb-4">The calculator is provided "as is". While we strive for accuracy, we make no warranties about the completeness, reliability, and accuracy of this information.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">4. Limitations</h2>
          </div>
          <p className="text-gray-600 mb-4">In no event shall Point Estimate Calculator be liable for any damages arising out of the use or inability to use the calculator.</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FileEdit className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">5. Revisions</h2>
          </div>
          <p className="text-gray-600 mb-4">We reserve the right to revise these terms at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Service.</p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">6. Contact</h2>
          </div>
          <p className="text-gray-600">For any questions regarding these Terms of Service, please contact us at contact@pointestimate.com.</p>
        </section>
      </div>
    </div>
  );
}