import React from 'react';
import { BookOpen, Calculator, HelpCircle, FileText, CheckCircle, FunctionSquare } from 'lucide-react';

export function ContentSection() {
  return (
    <div className="space-y-12">
      {/* What is Point Estimate Calculator */}
      <section id="about" className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-purple-600" />
          What is Point Estimate Calculator?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Point Estimate Calculator is a sophisticated statistical tool that helps determine the most likely value of a population parameter based on sample data. It's essential for researchers, data analysts, and students working with statistical inference and probability estimation.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Key Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                <span className="text-gray-700">Multiple estimation methods for accurate results</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                <span className="text-gray-700">Automatic best method selection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                <span className="text-gray-700">Real-time calculations and updates</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Applications</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">Research and academic studies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">Quality control in manufacturing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">Market research and surveys</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculation Methods */}
      <section id="calculations" className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FunctionSquare className="h-6 w-6 text-purple-600" />
          Calculation Methods
        </h2>
        <div className="space-y-8">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-100">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Maximum Likelihood Estimation (MLE)</h3>
            <div className="bg-white p-4 rounded-lg border border-purple-100 mb-3">
              <code className="text-sm font-mono">MLE = X/n</code>
              <p className="text-gray-600 mt-2">Where:</p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>X = number of successes</li>
                <li>n = total number of trials</li>
              </ul>
            </div>
            <p className="text-gray-600">The MLE is the simplest estimator, representing the sample proportion.</p>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Laplace Estimation</h3>
            <div className="bg-white p-4 rounded-lg border border-blue-100 mb-3">
              <code className="text-sm font-mono">Laplace = (X + 1)/(n + 2)</code>
              <p className="text-gray-600 mt-2">Where:</p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>X = number of successes</li>
                <li>n = total number of trials</li>
              </ul>
            </div>
            <p className="text-gray-600">Laplace's rule of succession adds pseudo-counts to handle extreme probabilities.</p>
          </div>

          <div className="p-6 bg-gradient-to-r from-indigo-50 to-white rounded-lg border border-indigo-100">
            <h3 className="text-lg font-semibold text-indigo-800 mb-3">Jeffrey Estimation</h3>
            <div className="bg-white p-4 rounded-lg border border-indigo-100 mb-3">
              <code className="text-sm font-mono">Jeffrey = (X + 0.5)/(n + 1)</code>
              <p className="text-gray-600 mt-2">Where:</p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>X = number of successes</li>
                <li>n = total number of trials</li>
              </ul>
            </div>
            <p className="text-gray-600">Jeffrey's prior provides a balanced approach between MLE and Laplace.</p>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-100">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Wilson Score Interval (Center)</h3>
            <div className="bg-white p-4 rounded-lg border border-purple-100 mb-3">
              <code className="text-sm font-mono">Wilson = (X + z²/2)/(n + z²)</code>
              <p className="text-gray-600 mt-2">Where:</p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>X = number of successes</li>
                <li>n = total number of trials</li>
                <li>z = z-score for the confidence level</li>
              </ul>
            </div>
            <p className="text-gray-600">Wilson score provides better coverage probability, especially for extreme probabilities.</p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section id="how-to-use" className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FileText className="h-6 w-6 text-purple-600" />
          How to Use the Calculator
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Enter Your Data</h3>
              <p className="text-gray-600">Input the number of successful outcomes and total trials from your sample</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Set Confidence Level</h3>
              <p className="text-gray-600">Choose your desired confidence level (90%, 95%, or 99% are most common)</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Review Results</h3>
              <p className="text-gray-600">Examine the calculated estimates and choose the most appropriate one for your case</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Calculator className="h-6 w-6 text-purple-600" />
          Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-800 mb-2">Multiple Estimation Methods</h3>
              <p className="text-gray-600">MLE, Laplace, Jeffrey, and Wilson estimation techniques for comprehensive analysis</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">Real-time Calculations</h3>
              <p className="text-gray-600">Instant updates as you modify input values</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-100">
              <h3 className="font-semibold text-indigo-800 mb-2">Automatic Best Method Selection</h3>
              <p className="text-gray-600">Intelligent selection of the most appropriate estimation method</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-800 mb-2">User-Friendly Interface</h3>
              <p className="text-gray-600">Clear, intuitive design with helpful tooltips and explanations</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-purple-600" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What is a point estimate?</h3>
            <p className="text-gray-600">A point estimate is a single value that serves as the best estimate of an unknown population parameter based on sample data.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">When should I use this calculator?</h3>
            <p className="text-gray-600">Use this calculator when you need to estimate a population proportion from sample data, especially in research, quality control, or survey analysis.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I choose the right confidence level?</h3>
            <p className="text-gray-600">Choose 95% for standard research, 90% for preliminary studies, or 99% when high precision is required. Higher confidence levels provide more reliable estimates but require larger sample sizes.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What sample size do I need?</h3>
            <p className="text-gray-600">The required sample size depends on your desired precision and confidence level. Generally, larger samples (n &gt; 30) provide more reliable estimates.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How accurate are the results?</h3>
            <p className="text-gray-600">The accuracy depends on your sample size and data quality. Larger samples and appropriate confidence levels typically provide more accurate estimates.</p>
          </div>
        </div>
      </section>
    </div>
  );
}